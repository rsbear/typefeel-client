import React from "react";
import cookie from "cookie";
import ssrPrepass from "react-ssr-prepass";
import initUrqlClient from "./initUrqlClient";

const isBrowser: boolean = typeof window !== "undefined";

const withUrqlClient = (App: any) => {
  return class WithUrql extends React.Component {
    urqlClient: any;
    static async getInitialProps(ctx: any) {
      const {
        AppTree,
        ctx: { req, res }
      } = ctx;

      let serverAccessToken = "";

      if (!isBrowser) {
        const cookies = cookie.parse(
          req.headers.cookie ? req.headers.cookie : ""
        );
        if (cookies.rfs) {
          const response = await fetch("http://localhost:4000/refresh_token", {
            method: "POST",
            credentials: "include",
            headers: {
              cookie: "rfs=" + cookies.rfs
            }
          });
          const data = await response.json();
          serverAccessToken = data.accessToken;
        }
      }

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      // getInitialProps is universal, but we only want
      // to run server-side rendered suspense on the server
      if (isBrowser) {
        return appProps;
      }

      const [urqlClient, ssrCache] = initUrqlClient({}, serverAccessToken);

      // Run suspense and hence all urql queries
      try {
        await ssrPrepass(<AppTree {...appProps} urqlClient={urqlClient} />);
      } catch (err) {
        console.log(err);
      }

      // Extract query data from the Apollo store
      // Extract the SSR query data from urql's SSR cache
      const urqlState = ssrCache.extractData();

      return {
        ...appProps,
        urqlState
      };
    }

    constructor(props) {
      super(props);

      if (props.urqlClient) {
        this.urqlClient = props.urqlClient;
      } else {
        // Create the urql client and rehydrate the prefetched data
        const [urqlClient] = initUrqlClient(props.urqlState, "yes");
        this.urqlClient = urqlClient;
      }
    }

    render() {
      return <App {...this.props} urqlClient={this.urqlClient} />;
    }
  };
};

export default withUrqlClient;

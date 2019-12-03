import App from "next/app";
import React from "react";
import NProgress from "nprogress";
import NextNprogress from "nextjs-progressbar";

import withUrqlClient from "lib/withUrqlClient";
import { Provider, Query } from "urql";

import { Global } from "@emotion/core";
import { globalStyle } from "styles/main";
import gql from "graphql-tag";

const AUTH = gql`
  query Me {
    me {
      id
      username
      email
    }
  }
`;

class MyApp extends App {
  render() {
    const { Component, pageProps, urqlClient }: any = this.props;
    return (
      <>
        <Provider value={urqlClient}>
          <Global styles={globalStyle} />
          <NextNprogress color="rgba(0,0,0,.8)" height="4" />
          <Query query={AUTH}>
            {({ data }) => <Component authUser={data.me} {...pageProps} />}
          </Query>
        </Provider>
      </>
    );
  }
}

export default withUrqlClient(MyApp);

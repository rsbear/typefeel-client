import App from "next/app";
import React from "react";
import NextNprogress from "nextjs-progressbar";

import { ApolloProvider } from "@apollo/react-hooks";
import { Query } from "@apollo/react-components";
import { withApollo } from "lib/apollo";
import gql from "graphql-tag";

import { Global } from "@emotion/core";
import { globalStyle } from "styles/main";

const AUTH = gql`
  query Me {
    me {
      id
      username
      email
      keyboardjoins {
        id
        keyboardId
      }
      follows {
        id
        productId
        keyboard {
          id
          shortId
        }
        keyset {
          id
          shortId
        }
      }
    }
  }
`;

class MyApp extends App<any> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <ApolloProvider client={apolloClient}>
        <Global styles={globalStyle} />
        <NextNprogress color="rgba(0,0,0,.8)" height="3" />
        <Query query={AUTH}>
          {({ loading, error, data }: any) => {
            return (
              <Component
                authUser={!loading && !error && data ? data.me : null}
                {...pageProps}
              />
            );
          }}
        </Query>
        {/* <Component {...pageProps} /> */}
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);

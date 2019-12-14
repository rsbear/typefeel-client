import React, { FC, useState } from "react";
import { css } from "@emotion/core";
import { inputBox, Input, FormikInput } from "styles/inputs";
import { margins } from "styles/main";
import { btn, Button } from "styles/buttons";
import Link from "next/link";
import { setAccessToken } from "lib/accessToken";
import Header from "components/layouts/Header";
import { useGenerateAuthMutation, useLoginMutation } from "generated/graphql";
import { useRouter } from "next/router";
import { Formik } from "formik";

const Login: FC<any> = () => {
  const [stateEmail, setEmail] = useState("");
  const [secret, setSecret] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const [generateAuth] = useGenerateAuthMutation();
  const [login] = useLoginMutation();

  async function handleGenerateAuth(e: any, { email }) {
    e.preventDefault();
    try {
      let res = await generateAuth({ variables: { email } });

      if (res && !res.data.generateAuth) {
        setError(`${email} is invalid.`);
        setConfirm(false);
      } else {
        setEmail(email);
        setConfirm(true);
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  }

  async function handleLogin(e: any, { secret }) {
    e.preventDefault();
    try {
      const response = await login({
        variables: {
          email: stateEmail,
          secret
        }
      });

      console.log(response);

      if (response && response.data) {
        setAccessToken(response.data.login.accessToken);
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  }

  if (!confirm) {
    return (
      <div css={loginWrapper}>
        <Header />
        <h3>typefeel</h3>
        <h1>Log in</h1>
        <p css={errorText}>{!error ? "" : error}</p>
        <Formik initialValues={{ email: "" }} onSubmit={() => {}}>
          {({ values }) => (
            <form onSubmit={e => handleGenerateAuth(e, values)}>
              <FormikInput
                type="email"
                margins="30px 0"
                icon="icon ion-ios-mail"
                placeholder="email@email.com"
                name="email"
              />
              <Button primary="true" type="submit" margin="0 0 60px 0">
                Generate token
              </Button>
            </form>
          )}
        </Formik>
        <Link href="signup">
          <a>Need an account? Sign up</a>
        </Link>
      </div>
    );
  }
  return (
    <div css={loginWrapper}>
      <Header />
      <h3>typefeel</h3>
      <h1>Magic word</h1>
      <p>Check your email for the secret password</p>
      <Formik initialValues={{ secret: "" }} onSubmit={() => {}}>
        {({ values }) => (
          <form onSubmit={e => handleLogin(e, values)}>
            <FormikInput
              autoFocus
              type="text"
              margins="30px 0"
              icon="icon ion-ios-lock"
              placeholder="What's the magic word?"
              name="secret"
            />
            <Button type="submit" primary="true">
              Log me in
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;

const loginWrapper = css`
  position: relative;
  width: 300px;
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;

  h3 {
    font-style: italic;
    font-weight: 400;
  }

  h1 {
    margin: 40px 0;
  }
`;

const errorText = css`
  color: red;
`;

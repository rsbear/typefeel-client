import React, { FC, useState } from "react";
import { jsx, css } from "@emotion/core";
import { inputBox, Input } from "styles/inputs";
import { margins } from "styles/main";
import { btn, Button } from "styles/buttons";
import Link from "next/link";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { setAccessToken } from "lib/accessToken";
import { useRouter } from "next/router";
import Header from "components/layouts/Header";
import { GetProps } from "interfaces/GetProps";
import { useGenerateAuthMutation, useLoginMutation } from "generated/graphql";

const Login: FC<any> = () => {
  const [email, setEmail] = useState("");
  const [secret, setSecret] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const [generateAuth] = useGenerateAuthMutation();
  const [login] = useLoginMutation();

  async function handleGenerateAuth(e: any) {
    e.preventDefault();
    try {
      await generateAuth({ variables: { email } });
      setConfirm(true);
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  }

  async function handleLogin(e: any) {
    e.preventDefault();
    try {
      const response = await login({
        variables: {
          email,
          secret
        }
      });

      console.log(response);

      if (response && response.data) {
        setAccessToken(response.data.login.accessToken);
      }

      // router.push("/");
    } catch (err) {
      console.log(err);
    }
  }

  if (confirm) {
    return (
      <div css={loginWrapper}>
        <Header />
        <h3>typefeel</h3>
        <h1>Log in</h1>
        <p>Check your email for the secret password</p>
        <form onSubmit={e => handleLogin(e)}>
          <Input
            type="text"
            margins="30px 0"
            icon="icon ion-ios-lock"
            placeholder="What's the magic word?"
            name="secret"
            onChange={(e: any) => setSecret(e.target.value)}
          />
          <Button type="submit" primary="true">
            Log me in
          </Button>
        </form>
      </div>
    );
  }
  return (
    <div css={loginWrapper}>
      <Header />
      <h3>typefeel</h3>
      <h1>Log in</h1>
      <form onSubmit={e => handleGenerateAuth(e)}>
        <Input
          type="email"
          margins="30px 0"
          icon="icon ion-ios-mail"
          placeholder="email@email.com"
          name="email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <Button primary="true" type="submit" margin="0 0 60px 0">
          Generate token
        </Button>
      </form>
      <Link href="signup">
        <a>Need an account? Sign up</a>
      </Link>
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

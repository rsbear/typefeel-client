import React, { FC, useState } from "react";
import { jsx, css } from "@emotion/core";
import { inputBox } from "styles/inputs";
import { margins } from "styles/main";
import { Button } from "styles/buttons";
import gql from "graphql-tag";
import Link from "next/link";
import { useGenerateAuthMutation, useSignupMutation } from "generated/graphql";

const Signup: FC<any> = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");
  const [error, setError] = useState("");
  const [confirm, setConfirm] = useState(false);

  const [generateAuth] = useGenerateAuthMutation();
  const [signup] = useSignupMutation();

  // const [generateAuth, auth] = useMutation(GENERATE_AUTH);
  // const [signup, user] = useMutation(SIGNUP);

  async function handleGenerateAuth(e: any) {
    e.preventDefault();
    try {
      let res = await generateAuth({ variables: { email } });
      console.log(res);
      setConfirm(true);
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  }

  async function handleSignup(e: any) {
    e.preventDefault();
    try {
      await signup({ variables: { secret, email, username } });
      // console.log(user);
    } catch (err) {
      console.log(err);
    }
  }

  if (confirm) {
    return (
      <div css={signupWrapper}>
        <h3>typefeel</h3>
        <h1>Sign up</h1>
        <p>We emailed you the secret password</p>
        <form onSubmit={e => handleSignup(e)}>
          <div css={[inputBox, margins("0 0 20px 0")]}>
            <input
              type="text"
              placeholder="What's the magic word"
              onChange={e => setSecret(e.currentTarget.value)}
              autoFocus
            />
          </div>
          <Button primary="true" type="submit">
            Confirm account
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div css={signupWrapper}>
      <h3>typefeel</h3>
      <h1>Sign up</h1>
      {error && <p>{error}</p>}
      <form onSubmit={() => {}}>
        <div css={[inputBox, margins("0 0 20px 0")]}>
          <input
            type="text"
            placeholder="email@email.com"
            onChange={e => setEmail(e.currentTarget.value)}
            autoFocus
          />
        </div>
        <div css={[inputBox, margins("0 0 20px 0")]}>
          <input
            type="text"
            placeholder="Username"
            onChange={e => setUsername(e.currentTarget.value)}
          />
        </div>
        <Button
          primary="true"
          margin="0 0 60px 0"
          onClick={e => handleGenerateAuth(e)}
        >
          Sign up
        </Button>
        <Link href="login">
          <a>Already have an account? Log in</a>
        </Link>
      </form>
    </div>
  );
};

export default Signup;

const signupWrapper = css`
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

  p {
    margin: 10px 0;
    font-size: 14px;
  }
`;

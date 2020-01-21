import React, { FC } from "react";
import Layout from "components/layouts/Layout";
import { GetProps } from "interfaces/GetProps";
import { useKeyboardQuery } from "generated/graphql";

import css from "@emotion/css";
import { text } from "styles/text";
import { colors, grid50, margins } from "styles/main";
import MarketKeyboard from "components/MarketKeyboard";
import InterestCheckKeyboard from "components/InterestCheckKeyboard";

const KeyboardPage: GetProps<any> = ({ authUser, shortId }) => {
  const { loading, error, data, refetch } = useKeyboardQuery({
    variables: { shortId }
  });

  const dynamicNav = {
    name: !loading ? data.keyboard.name : "",
    productType: "keyboard",
    shortId: shortId
  };

  const title = !loading && data && data.keyboard ? data.keyboard.name : "...";

  return (
    <Layout title={title} authUser={authUser} dynamicNav={dynamicNav}>
      {loading && <h2>loading bitch</h2>}
      {!loading && data && (
        <>
          {!data.keyboard.announcement ? null : (
            <div css={announcementDiv}>
              <p>PSA: {data.keyboard.announcement}</p>
            </div>
          )}
          <h1 css={text.heading}>
            {data.keyboard.brand} {data.keyboard.name}
          </h1>
          <h2 css={specs}>
            {data.keyboard.size}, {data.keyboard.mount} mount,{" "}
            {data.keyboard.angle}&deg; typing angle
          </h2>
          <h2 css={specs}>
            {data.keyboard.connector}, {data.keyboard.pcb} PCB,{" "}
            {data.keyboard.firmware} support
          </h2>
          <div css={[contentBox, grid50]}>
            <img
              css={mainImg}
              src={data.keyboard.images1500[0]}
              alt={data.keyboard.name}
            />
            {data.keyboard.market && (
              <MarketKeyboard
                editions={data.keyboard.editions}
                id={data.keyboard.id}
                refresh={refetch}
                follows={authUser ? authUser.follows : []}
              />
            )}
            {data.keyboard.interestCheck && (
              <InterestCheckKeyboard
                editions={data.keyboard.editions}
                layouts={data.keyboard.layouts}
                id={data.keyboard.id}
                refresh={refetch}
                authUserJoins={authUser ? authUser.keyboardjoins : []}
                follows={authUser ? authUser.follows : []}
              />
            )}
          </div>

          <div>
            <h4 css={margins("0 0 15px 0")}>Details</h4>
            {data.keyboard.details.map((d: string, i: number) => (
              <p key={i}>{d}</p>
            ))}
          </div>

          <div css={imagesWrapper}>
            {data.keyboard.images1500.map((src: string, i: number) => (
              <img src={src} alt={data.keyboard.name} key={i} />
            ))}
          </div>
        </>
      )}
    </Layout>
  );
};

KeyboardPage.getInitialProps = async (context: any) => {
  const { shortId } = context.query;
  return { shortId };
};

export default KeyboardPage;

const announcementDiv = css`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 4px;
  background-color: #5a929e;

  p {
    color: white;
  }
`;

const specs = css`
  color: ${colors.black50};
`;

const contentBox = css`
  margin: 60px 0;
`;

const mainImg = css`
  height: 500px;
  width: 90%;
  object-fit: cover;
  object-position: center;
`;

const imagesWrapper = css`
  width: 100%;
  img {
    width: 100%;
    height: 600px;
    margin: 20px 0;
  }
`;

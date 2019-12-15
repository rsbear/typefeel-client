import React, { FC, useState } from "react";
import Layout from "components/layouts/Layout";
import { GetProps } from "interfaces/GetProps";
import { useKeysetQuery } from "generated/graphql";

import css from "@emotion/css";
import { text } from "styles/text";
import { grid50, margins, colors, flex } from "styles/main";
import { Button } from "styles/buttons";
import MarketKeyset from "components/MarketKeyset";
import InterestCheckKeyset from "components/InterestCheckKeyset";
import FollowButton from "components/shared/FollowButton";

const Keyset: GetProps<any> = ({ authUser, shortId }) => {
  const { loading, error, data } = useKeysetQuery({ variables: { shortId } });

  const dynamicNav = {
    name: !loading ? data.keyset.profile + " " + data.keyset.name : "",
    discussionHref: "/keyset/[shortId]/discussion",
    discussionAs: `/keyset/${shortId}/discussion`,
    dataHref: "/keyset/[shortId]/data",
    dataAs: `/keyset/${shortId}/data`,
    shortId: shortId,
    productType: "keyset"
  };

  return (
    <Layout title="keyset" authUser={authUser} dynamicNav={dynamicNav}>
      {!loading && data && data.keyset && (
        <div>
          <h1 css={text.heading}>
            {data.keyset.profile} {data.keyset.name}
          </h1>
          <h2 css={specs}>
            {JSON.stringify(data.keyset.kits.length)} kits available
          </h2>
          <div css={[contentBox, grid50]}>
            <img
              css={mainImg}
              src={data.keyset.images1500[0]}
              alt={data.keyset.name}
            />
            <div>
              {data.keyset.market && <MarketKeyset kits={data.keyset.kits} />}
              {data.keyset.interestCheck && (
                <InterestCheckKeyset
                  kits={data.keyset.kits}
                  id={data.keyset.id}
                  joins={authUser ? authUser.keysetjoins : []}
                />
              )}
              <FollowButton
                id={data.keyset.id}
                follows={authUser ? authUser.follows : []}
              />
            </div>
          </div>
          <div>
            {data.keyset.colors.length <= 0 ? null : (
              <div css={[flex.row, margins("40px 0")]}>
                {data.keyset.colors.map(({ id, hex, ral }) => (
                  <div key={id} css={() => colorTile(hex)}>
                    <span>{ral}</span>
                    <div className="hex"></div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {data.keyset.details.map((d: string, i: number) => (
            <p key={i} css={margins("10px 0")}>
              {d}
            </p>
          ))}
          <div css={imagesWrapper}>
            {data.keyset.images1500.map((img: string, i: number) => (
              <img src={img} alt={data.keyset.name} key={i} />
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
};

Keyset.getInitialProps = async (context: any) => {
  const { shortId } = context.query;
  return { shortId };
};

export default Keyset;

const contentBox = css`
  margin: 60px 0;
`;
const specs = css`
  color: ${colors.black50};
`;

const mainImg = css`
  height: 500px;
  width: 100%;
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

const detailParagraph = css`
  margin: 10px 0;
`;

const colorTile = (c: string) => css`
  position: relative;
  height: 200px;
  width: 160px;
  padding: 10px;
  margin-right: 15px;
  border: solid 1px ${colors.black05};
  border-radius: 4px;

  span {
    font-weight: 500;
  }

  div.hex {
    position: absolute;
    top: 60px;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 60px);
    background-color: #${c};
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

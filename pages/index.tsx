import React, { FC } from "react";
import Layout from "components/layouts/Layout";
import { GetProps } from "interfaces/GetProps";
import Link from "next/link";
import { text } from "styles/text";
import { flex, grid50, colors, margins } from "styles/main";
import { css } from "@emotion/core";
import { useSortKeyboardsQuery, useSortKeysetsQuery } from "generated/graphql";
import Tile from "components/Tile";

const Landing: GetProps<any> = ({ authUser }) => {
  const keyboards = useSortKeyboardsQuery({
    variables: { where: { interestCheck: true } }
  });
  const keysets = useSortKeysetsQuery({
    variables: { where: { interestCheck: true } }
  });
  return (
    <Layout title="Home" authUser={authUser}>
      {!authUser && (
        <div css={[flex.row, grid50]}>
          <div css={linkBox}>
            <Link href="/login">
              <a>
                <h1>Log in</h1>
                <p>To do stuff..</p>
              </a>
            </Link>
          </div>
          <div css={linkBox}>
            <Link href="/signup">
              <a>
                <h1>Sign up</h1>
                <p>So you can log in...</p>
              </a>
            </Link>
          </div>
        </div>
      )}
      {keyboards.loading || (keysets.loading && <h2>Loading</h2>)}
      <h2 css={margins("0 0 10px 0")}>Keyboards in interest check</h2>
      {!keyboards.loading &&
        !keyboards.error &&
        keyboards.data &&
        keyboards.data.sortKeyboards && (
          <div css={grid50}>
            {keyboards.data.sortKeyboards.map((k: any) => (
              <Link
                href="/keyboard/[shortId]"
                as={`/keyboard/${k.shortId}`}
                key={k.id}
              >
                <a>
                  <Tile
                    image={k.images600[0]}
                    mount={k.mount}
                    name={k.name}
                    size={k.size}
                    key={k.id}
                  />
                </a>
              </Link>
            ))}
          </div>
        )}
      {keysets.loading && <h2>Loading</h2>}
      <h2 css={margins("40px 0 15px 0")}>Keysets in interest check</h2>
      {!keysets.loading &&
        !keysets.error &&
        keysets.data &&
        keysets.data.sortKeysets && (
          <div css={grid50}>
            {keysets.data.sortKeysets.map((k: any) => (
              <Link
                href="/keyset/[shortId]"
                as={`/keyset/${k.shortId}`}
                key={k.id}
              >
                <a>
                  <Tile
                    image={k.images600[0]}
                    mount={null}
                    name={k.name}
                    size={k.profile}
                    key={k.id}
                  />
                </a>
              </Link>
            ))}
          </div>
        )}
    </Layout>
  );
};

export default Landing;

const linkBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border: solid 1px ${colors.black05};
  border-radius: 4px;
`;

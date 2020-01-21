import React, { FC } from "react";
import { css } from "@emotion/core";
import { colors } from "styles/main";
import Link from "next/link";

const KeyboardProjectTile: FC<any> = ({ keyboard }) => {
  return (
    <div css={wrapper}>
      <div key={keyboard.id}>
        <h1>{keyboard.name}</h1>
        <p>Join count: {JSON.stringify(keyboard.joins.length)}</p>
        <Link
          href="/dashboard/update/keyboard/[shortId]"
          as={`/dashboard/update/keyboard/${keyboard.shortId}`}
        >
          <a>Update</a>
        </Link>
      </div>
    </div>
  );
};

export default KeyboardProjectTile;

const wrapper = css`
  padding: 20px 30px;
  border: solid 1px ${colors.black10};
  border-radius: 4px;
`;

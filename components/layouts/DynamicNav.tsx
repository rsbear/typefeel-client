import React, { FC } from "react";
import css from "@emotion/css";
import { colors, flex } from "styles/main";
import { fontSize } from "styles/text";
import Link from "next/link";

interface Props {
  dynamicNav?: {
    name?: string;
    discussionHref?: string;
    discussionAs?: string;
    dataHref?: string;
    dataAs?: string;
  };
}

const DynamicNav: FC<Props> = ({ dynamicNav }) => {
  if (!dynamicNav) {
    return null;
  }

  return (
    <div css={[flex.column, wrap]}>
      <h4>{dynamicNav.name}</h4>
      <p css={ppp}>
        <Link href={dynamicNav.discussionHref} as={dynamicNav.discussionAs}>
          <a>Discussion</a>
        </Link>
      </p>
      <p css={ppp}>
        <Link href={dynamicNav.dataHref} as={dynamicNav.dataAs}>
          <a>Data</a>
        </Link>
      </p>
    </div>
  );
};

export default DynamicNav;

const wrap = css`
  margin-top: 20px;
  padding-top: 20px;
  border-top: solid 1px ${colors.black10};
`;

const ppp = css`
  margin: 10px 0;
  margin-top: 0;
  font-size: ${fontSize.small};
`;

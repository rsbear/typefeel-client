import React, { FC } from "react";
import Link from "next/link";

import css from "@emotion/css";
import { text } from "styles/text";
import { colors } from "styles/main";

interface Props {
  username: string;
  router?: any;
}

const AccountPageNavigation: FC<Props> = ({ username, router }) => {
  const { pathname } = router;
  return (
    <div>
      <h1 css={text.heading}>{username}</h1>
      <ul css={accountNav}>
        <Link href="/dashboard">
          <a>
            <li className={pathname !== "/dashboard" ? undefined : "active"}>
              Joins &amp; follows
            </li>
          </a>
        </Link>
        <Link href="/dashboard/mykeyboards">
          <a>
            <li
              className={
                pathname !== "/dashboard/mykeyboards" ? undefined : "active"
              }
            >
              My keyboard projects
            </li>
          </a>
        </Link>
        <Link href="/dashboard/mykeysets">
          <a>
            <li
              className={
                pathname !== "/dashboard/mykeysets" ? undefined : "active"
              }
            >
              My keyset projects
            </li>
          </a>
        </Link>
        {/* <li>Billing</li> */}
      </ul>
    </div>
  );
};

export default AccountPageNavigation;

const accountNav = css`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;

  li {
    margin-right: 15px;
    opacity: 0.6;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    transition: all 120ms ease;

    &:hover {
      opacity: 1;
    }

    &.active {
      opacity: 1;
      border-bottom: solid 1px ${colors.black70};
    }
  }
`;

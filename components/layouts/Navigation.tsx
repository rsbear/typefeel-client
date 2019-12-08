import React, { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import DynamicNav from "./DynamicNav";

import css from "@emotion/css";
import { colors } from "styles/main";
import { fontSize } from "styles/text";

const Navigation: FC<any> = ({ authUser, dynamicNav }) => {
  const router = useRouter();

  const keyboardPaths = router.pathname.includes("/keyboard");
  const keysetPaths = router.pathname.includes("/keyset");

  return (
    <nav css={navStyle}>
      <ul>
        <h4>
          <Link href="/">
            <a>typefeel</a>
          </Link>
        </h4>
        <li>
          <Link href="/keyboards">
            <a>Keyboards</a>
          </Link>
        </li>
        {keyboardPaths && (
          <>
            <li className="subRoute">
              <Link href="/keyboards/interestchecks">
                <a>Interest checks</a>
              </Link>
            </li>
            <li className="subRoute">
              <Link href="/keyboards/catalog">
                <a>Catalog</a>
              </Link>
            </li>
          </>
        )}
        <li>
          <Link href="/keysets">
            <a>Keysets</a>
          </Link>
        </li>
        {keysetPaths && (
          <>
            <li className="subRoute">
              <Link href="/keysets/interestchecks">
                <a>Interest checks</a>
              </Link>
            </li>
            <li className="subRoute">
              <Link href="/keysets/catalog">
                <a>Catalog</a>
              </Link>
            </li>
          </>
        )}
        <li>Artisans</li>
        <li>
          <Link href="/create">
            <a>Create</a>
          </Link>
        </li>
        {!authUser ? (
          <li>
            <Link href="/login">
              <a>Log in</a>
            </Link>
            <span>&nbsp;/&nbsp;</span>
            <Link href="/signup">
              <a>Sign up</a>
            </Link>
          </li>
        ) : (
          <li>
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </li>
        )}
        <DynamicNav dynamicNav={dynamicNav} />
      </ul>
    </nav>
  );
};

export default Navigation;

const navStyle = css`
  position: relative;
  height: 100vh;
  width: 140px;
  margin-right: 40px;
  display: flex;
  flex-flow: column;
  justify-content: center;

  ul {
    position: sticky;
    top: 40px;

    h4 {
      font-style: italic;
      margin-bottom: 20px;
    }

    li {
      padding: 8px 0;
      margin: 2px 0;
      font-size: ${fontSize.small};
      color: ${colors.black60};

      &.subRoute {
        font-size: 13px;
        padding-left: 10px;
        border-left: solid 1px ${colors.black05};
      }
    }
  }
`;

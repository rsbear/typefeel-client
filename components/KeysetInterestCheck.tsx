import React, { FC, useState, useEffect, useReducer } from "react";
import { css } from "@emotion/core";
import { colors, flex } from "styles/main";
import { fontSize } from "styles/text";
import { useAppContext } from "hooks/useAppContext";
import Link from "next/link";
import { useJoinKeysetMutation } from "generated/graphql";

interface Kit {
  id: string;
  kit: string;
  name: string;
}
interface Props {
  id: string;
  kits: any;
}

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "push":
      return [...state, payload];
    case "remove":
      return state.filter(x => x !== payload);
    case "reset":
      return [];
    default:
      return [];
  }
};

const KeysetInterestCheck: FC<Props> = ({ id, kits }) => {
  const { authUser } = useAppContext();
  const [joined, setJoined] = useState(false);
  const [selectedKits, setSelectedKits] = useState([]);
  const [state, dispatch] = useReducer(reducer, []);

  const [joinMutation] = useJoinKeysetMutation();

  useEffect(() => {
    if (authUser) {
      if (authUser.keysetjoins)
        for (let i of authUser.keysetjoins) {
          if (i.keysetId === id) {
            setJoined(true);
          }
        }
    }
  }, [authUser]);

  const handleKit = (kit: string) => {
    if (selectedKits.includes(kit)) {
      console.log(`included`);
      setSelectedKits((prevKits: any) => {
        return prevKits.filter(y => y !== kit);
      });
    } else {
      setSelectedKits((prevKits: any) => {
        return [...prevKits, kit];
      });
    }
  };

  function handleSelect(kit) {
    if (state.includes(kit)) {
      dispatch({ type: "remove", payload: kit });
    } else {
      dispatch({ type: "push", payload: kit });
    }
  }

  const handleMutation = async () => {
    event.preventDefault();
    try {
      const res = await joinMutation({
        variables: { id, data: { kits: selectedKits } }
      });
      console.log(res);
      setJoined(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div css={[wrapper]}>
      <div css={[container]}>
        <h3 css={choiceTitle}> Select your kits</h3>
        <div css={gridbythree}>
          {kits.map((k: Kit) => (
            <div css={gridCell} key={k.id}>
              <p
                css={pStyle}
                className={state.includes(k.name) ? "active" : undefined}
                onClick={() => handleSelect(k.name)}
              >
                {k.name} <span>{k.kit} kit</span>
              </p>
            </div>
          ))}
        </div>

        <div css={[flex.row, flex.justifycenter]}>
          {!authUser ? (
            <Link href="/login">
              <a>
                <button css={joinButton} type="button">
                  Log in to continue
                </button>
              </a>
            </Link>
          ) : (
            <>
              {!joined ? (
                <button css={joinButton} type="button">
                  Join in
                </button>
              ) : (
                <button css={joinButton} type="button">
                  You're in
                </button>
              )}
            </>
          )}
          <button
            css={imageButton}
            onClick={() => dispatch({ type: "reset" })}
            type="button"
          >
            <i className="icon ion-ios-refresh" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default KeysetInterestCheck;

const wrapper = css`
  border-bottom: solid 2px ${colors.black10};
`;

const container = css`
  width: 800px;
  margin: 60px auto;
`;

const choiceTitle = css`
  margin-bottom: 40px;
  margin-top: 30px;
  margin-left: 15px;
  font-size: ${fontSize[24]};
  font-weight: 500;
`;

const gridbythree = css`
  margin: 20px 0;
  display: grid;
  grid-template-columns: calc(33% - 6px) calc(33% - 6px) calc(33% - 6px);
  grid-column-gap: 12px;
  grid-row-gap: 20px;
`;

const gridCell = css`
  height: 100%;
  width: 100%;
`;

const pStyle = css`
  display: inline-block;
  padding: 8px 16px;
  background-color: transparent;
  border-radius: 4px;

  font-size: ${fontSize[18]};
  font-weight: 500;
  text-transform: uppercase;

  cursor: pointer;

  &:hover {
    background-color: ${colors.black80};
    color: white;
  }

  &:hover span {
    color: white;
    opacity: 0.6;
  }

  span {
    font-size: ${fontSize[12]};
    color: ${colors.black60};
  }

  &.active {
    background-color: ${colors.black80};
    color: white;
  }
  &.active span {
    color: white;
    opacity: 0.6;
  }
`;

const joinButton = css`
  margin-top: 40px;
  padding: 0 80px;
  height: 40px;
  border-radius: 20px;
  border: solid 1px dodgerblue;
  background-color: dodgerblue;

  color: white;
  font-weight: 600;
  font-size: ${fontSize[14]};
  outline: 0;
`;

const imageButton = css`
  margin-top: 40px;
  margin-left: 20px;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  border: solid 1px #f49b0b;
  background-color: #f49b0b;

  color: white;
  font-weight: 600;

  padding-bottom: 2px;
  i {
    font-size: ${fontSize[18]};
  }
`;

import React, { FC, useState, useEffect } from "react";
import { useAppContext } from "hooks/useAppContext";
import { RoundButton } from "styles/buttons";
import { css } from "@emotion/core";
import { colors } from "styles/main";
import { fontSize } from "styles/text";

interface Props {
  onClick?: any;
  joined: boolean;
}

const JoinButton: FC<Props> = ({ joined, onClick }) => {
  return !joined ? (
    <button css={secondary} disabled>
      Already joined
    </button>
  ) : (
    <button css={def} onClick={onClick}>
      Join in
    </button>
  );
};

export default JoinButton;

const def = css`
  height: 48px;
  border-radius: 24px;
  border: solid 1px ${colors.black90};
  outline: 0;
  background-color: ${colors.black90};
  color: white;
  margin-bottom: 15px;
  font-weight: 300;
  font-size: ${fontSize.medium};
  transition: all 200ms ease;
`;

const secondary = css`
  height: 48px;
  border-radius: 24px;
  border: solid 3px rgba(40, 230, 160, 1);
  background-color: transparent;
  font-weight: 300;
  font-size: 14px;
  transition: all 200ms ease;
  color: green;

  margin-bottom: 15px;
`;

import React, { FC } from "react";
import { jsx, css } from "@emotion/core";
import { colors } from "./main";
import { fontSize } from "./text";

export const btn = css`
  width: 100%;
  height: 36px;
  outline: none;
  border: solid 1px ${colors.black70};
  border-radius: 4px;
  background-color: ${colors.black70};
  font-size: ${fontSize.small};
  color: ${colors.white};
  transition: all 200ms ease;
`;
export const btnSmall = css`
  width: auto;
  margin-right: auto;
  height: 24px;
  outline: none;
  border: solid 1px ${colors.black05};
  border-radius: 4px;
  background-color: ${colors.black05};
  font-size: 12px;
  color: ${colors.black70};
`;
const secondary = css`
  border: solid 1px ${colors.black30};
  background-color: transparent;
  color: ${colors.black70};

  &:hover {
    background-color: ${colors.black70};
    color: ${colors.white};
  }

  &.active {
    background-color: ${colors.black70};
    color: ${colors.white};
  }
`;

const deleteIcon = css`
  font-size: 18px;
`;

const trashButton = css`
  height: 36px;
  width: 36px;
  margin-left: 15px;
  border-radius: 4px;
  border: solid 1px red;
  background: red;
  color: white;
`;

export const DeleteButton = props => (
  <button css={trashButton} {...props}>
    <i className={props.icon} css={deleteIcon} />
  </button>
);

export const Button: FC<any> = (props: any) => {
  /* console.log(props); */
  if (props.primary) {
    return (
      <>
        <button
          {...props}
          css={[
            btn,
            css`
              margin: ${props.margin};
            `
          ]}
        >
          {props.children}
        </button>
      </>
    );
  }
  if (props.secondary) {
    return (
      <>
        <button
          {...props}
          css={[
            btn,
            secondary,
            css`
              margin: ${props.margin};
            `
          ]}
        >
          {props.children}
        </button>
      </>
    );
  }
  if (props.small) {
    return (
      <>
        <button
          {...props}
          css={[
            btnSmall,
            css`
              margin: ${props.margin};
            `
          ]}
        >
          {props.children}
        </button>
      </>
    );
  }
};

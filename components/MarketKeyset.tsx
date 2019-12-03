import React, { FC, useState } from "react";
import { flex } from "styles/main";
import css from "@emotion/css";

interface Props {
  kits?: any;
}

const MarketKeyset: FC<Props> = ({ kits }) => {
  const [i, setI] = useState(0);
  return (
    <>
      <div css={flex.row}>
        {kits.map(({ kit, id }, idx: number) => (
          <h4
            css={viewTitle}
            className={i !== idx ? undefined : "active"}
            onClick={() => setI(idx)}
            key={id}
          >
            {kit}
          </h4>
        ))}
      </div>
      <h3>Preorder price</h3>
      <h1>${JSON.stringify(kits[i].price)}</h1>
      <h3>Suggested price</h3>
      <h1>${JSON.stringify(kits[i].suggestedPrice)}</h1>
    </>
  );
};

export default MarketKeyset;

const viewTitle = css`
  opacity: 0.6;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &.active {
    opacity: 1;
  }
`;

import React, { FC, useState } from "react";

import css from "@emotion/css";
import { flex, grid50, margins, colors } from "styles/main";
import { Button, RoundButton } from "styles/buttons";
import { useJoinKeyboardMutation } from "generated/graphql";
import FollowButton from "./shared/FollowButton";

interface Props {
  id?: string;
  editions?: any;
  refresh?: any;
  layouts?: string[];
  authUserJoins?: any;
  follows?: any;
}

const InterestCheckKeyboard: FC<Props> = ({
  editions,
  layouts,
  id,
  authUserJoins,
  follows
}) => {
  const [index, setIndex] = useState(0);
  const [caseSelect, setCaseSelect] = useState("");
  const [plateSelect, setPlateSelect] = useState("");
  const [layoutSelect, setLayoutSelect] = useState("");
  const [alreadyJoined, setAlreadyJoined] = useState(false);

  const [joinKeyboard, res] = useJoinKeyboardMutation();

  React.useEffect(() => {
    for (let j of authUserJoins) {
      if (j.keyboardId !== id) {
        setAlreadyJoined(false);
      } else {
        setAlreadyJoined(true);
      }
    }
  }, []);

  const handleJoin = async (e: any) => {
    e.preventDefault();
    let data = {
      caseChoice: caseSelect,
      plateChoice: plateSelect,
      layoutChoice: layoutSelect
    };
    try {
      let response = await joinKeyboard({
        variables: { id, data }
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div css={[flex.column]}>
      {/* switch edition view */}
      <div css={[flex.itemscenter, edContainer]}>
        <div css={[flex.row, flex.space]}>
          {editions.length > 1 &&
            editions.map(({ name }: any, i: number) => (
              <h4
                css={editionTitle}
                className={index !== i ? undefined : "active"}
                onClick={() => setIndex(i)}
                key={i}
              >
                {name}
              </h4>
            ))}
        </div>
      </div>

      <h4 css={margins("0 0 10px 0")}>Select a case material</h4>
      <div css={grid50}>
        {editions[index].cases.map((c: string, i: number) => (
          <Button
            className={caseSelect !== c ? undefined : "active"}
            secondary="true"
            key={i}
            onClick={() => setCaseSelect(c)}
          >
            {c}
          </Button>
        ))}
      </div>
      <h4 css={margins("20px 0 10px 0")}>Select a plate material</h4>
      <div css={grid50}>
        {editions[index].plates.map((p: string, i: number) => (
          <Button
            className={plateSelect !== p ? undefined : "active"}
            secondary="true"
            key={i}
            onClick={() => setPlateSelect(p)}
          >
            {p}
          </Button>
        ))}
      </div>
      <h4 css={margins("20px 0 10px 0")}>Select a layout</h4>
      <div css={grid50}>
        {layouts.map((l: string, i: number) => (
          <Button
            className={layoutSelect !== l ? undefined : "active"}
            secondary="true"
            key={i}
            onClick={() => setLayoutSelect(l)}
          >
            {l}
          </Button>
        ))}
      </div>
      <div css={joinFollowContainer}>
        {!alreadyJoined ? (
          <RoundButton
            large="true"
            primary="true"
            margins="0 0 15px 0"
            onClick={e => handleJoin(e)}
          >
            Join it
          </RoundButton>
        ) : (
          <RoundButton large="true" disabled="true" margins="0 0 15px 0">
            You're in
          </RoundButton>
        )}
        <FollowButton id={id} follows={follows} />
      </div>
    </div>
  );
};

export default InterestCheckKeyboard;

const edContainer = css`
  margin: 0 auto;
`;

const joinFollowContainer = css`
  margin-top: auto;
  justify-self: flex-end;
`;

const editionTitle = css`
  opacity: 0.5;
  padding-bottom: 5px;
  margin-bottom: 10px;
  margin-right: 10px;
  cursor: pointer;

  &.active {
    opacity: 1;
    color: ${colors.black70};
    border-bottom: solid 1px dodgerblue;
  }

  &:hover {
    color: ${colors.black60};
  }
`;

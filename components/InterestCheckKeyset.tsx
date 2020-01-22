import React, { FC, useState } from "react";
import { useJoinKeysetMutation } from "generated/graphql";

import { Button, RoundButton } from "styles/buttons";
import { grid50, margins, flex } from "styles/main";
import { css } from "@emotion/core";
import FollowButton from "./shared/FollowButton";
import Link from "next/link";

interface Props {
  kits?: any;
  id: string;
  joins?: any;
  follows?: any;
  authUser?: any;
}

interface Kit {
  id: string;
  kit: string;
  name: string;
}

const InterestCheckKeyset: FC<Props> = ({
  id,
  kits,
  joins,
  follows,
  authUser
}) => {
  const [alreadyJoined, setAlreadyJoined] = useState(false);
  const [selectedKits, setSelectedKits] = useState([]);
  const [joinMutation] = useJoinKeysetMutation();

  React.useEffect(() => {
    for (let i of joins) {
      if (i.keysetId === id) {
        setAlreadyJoined(true);
      }
    }
  }, []);

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

  const handleMutation = async () => {
    event.preventDefault();
    try {
      const res = await joinMutation({
        variables: { id, data: { kits: selectedKits } }
      });
      console.log(res);
      setAlreadyJoined(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div css={[flex.column, heightHundo]}>
        <h4 css={margins("0 0 10px 0")}>Select your kits</h4>
        <div css={grid50}>
          {kits.map(({ id, kit, name }: Kit) => (
            <Button
              secondary="true"
              margin="0 0 15px 0"
              className={selectedKits.includes(name) ? "active" : undefined}
              onClick={() => handleKit(name)}
              key={id}
            >
              {name}
            </Button>
          ))}
        </div>
        <div css={[flex.column, btnContainer]}>
          {!authUser ? (
            <Link href="/login">
              <a>
                <RoundButton large="true" primary="true" margins="0 0 15px 0">
                  Log in to join or follow
                </RoundButton>
              </a>
            </Link>
          ) : (
            <>
              <RoundButton
                primary="true"
                margins="auto 0 15px 0"
                onClick={handleMutation}
              >
                {!alreadyJoined ? `Join keyset` : "Already joined"}
              </RoundButton>
              <FollowButton id={id} follows={follows} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default InterestCheckKeyset;

const heightHundo = css`
  height: 100%;
`;
const btnContainer = css`
  margin-top: auto;
  display: flex;
  justify-self: flex-end;
`;

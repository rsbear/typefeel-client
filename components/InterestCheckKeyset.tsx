import React, { FC, useState } from "react";
import { Button } from "styles/buttons";
import { grid50, margins } from "styles/main";
import { useJoinKeysetMutation } from "generated/graphql";

interface Props {
  kits?: any;
  id: string;
  joins?: any;
}

interface Kit {
  id: string;
  kit: string;
  name: string;
}
const InterestCheckKeyset: FC<Props> = ({ id, kits, joins }) => {
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
      <h4 css={margins("0 0 10px 0")}>Select your kits</h4>
      <div css={grid50}>
        {kits.map(({ id, kit }: Kit) => (
          <Button
            secondary="true"
            margin="0 0 15px 0"
            className={selectedKits.includes(kit) ? "active" : undefined}
            onClick={() => handleKit(kit)}
            key={id}
          >
            {kit}
          </Button>
        ))}
      </div>
      <Button primary="true" margin="auto 0 15px 0" onClick={handleMutation}>
        {!alreadyJoined ? `Join keyset` : "Already joined"}
      </Button>
    </>
  );
};

export default InterestCheckKeyset;

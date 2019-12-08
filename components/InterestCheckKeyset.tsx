import React, { FC, useState } from "react";
import { Button } from "styles/buttons";

interface Props {
  kits?: any;
}

interface Kit {
  id: string;
  kit: string;
  name: string;
}
const InterestCheckKeyset: FC<Props> = ({ kits }) => {
  const [selectedKits, setSelectedKits] = useState([]);
  return (
    <div>
      {kits.map(({ id, kit, name }: Kit) => (
        <div>
          <Button secondary="true" key={id}>
            {name}
          </Button>
        </div>
      ))}
      <Button primary="true">Join keyset</Button>
    </div>
  );
};

export default InterestCheckKeyset;

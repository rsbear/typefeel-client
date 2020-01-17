import React, { FC, useState } from "react";
import { Button, RoundButton } from "styles/buttons";
import {
  useFollowKeyboardMutation,
  useFollowKeyboardDeleteMutation,
  useCreateFollowMutation
} from "generated/graphql";
import css from "@emotion/css";

interface Props {
  id: string;
  follows?: any;
}

const FollowButton: FC<Props> = ({ id, follows }) => {
  const [following, setFollowing] = useState(false);
  const [followId, setFollowId] = useState("");

  const [followMut] = useCreateFollowMutation();
  const [unfollowMut] = useFollowKeyboardDeleteMutation();

  React.useEffect(() => {
    for (let f of follows) {
      if (f.productId === id) {
        setFollowing(true);
        setFollowId(f.id);
      }
    }
  }, [follows]);

  const handleFollow = async () => {
    event.preventDefault();
    if (!following) {
      setFollowing(true);
      try {
        await followMut({
          variables: { id }
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      setFollowing(false);
      try {
        await unfollowMut({
          variables: { id: followId }
        });
        setFollowId("");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return !following ? (
    <RoundButton secondary="true" onClick={handleFollow}>
      Follow <i className="icon ion-ios-heart-empty" css={heartIcon} />
    </RoundButton>
  ) : (
    <RoundButton secondary="true" onClick={handleFollow}>
      Following{" "}
      <i className="icon ion-ios-heart" css={[heartIcon, heartIconFull]} />
    </RoundButton>
  );
};

export default FollowButton;

const heartIcon = css`
  margin-left: 5px;
`;

const heartIconFull = css`
  color: pink;
`;

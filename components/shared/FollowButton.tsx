import React, { FC, useState } from "react";
import { Button } from "styles/buttons";
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
      try {
        await followMut({
          variables: { id }
        });
        setFollowing(true);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await unfollowMut({
          variables: { id: followId }
        });
        setFollowing(false);
        setFollowId("");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return !following ? (
    <Button secondary="true" onClick={handleFollow}>
      Follow <i className="icon ion-ios-heart-empty" css={heartIcon} />
    </Button>
  ) : (
    <Button secondary="true" onClick={handleFollow}>
      Following <i className="icon ion-ios-heart" css={heartIcon} />
    </Button>
  );
};

export default FollowButton;

const heartIcon = css`
  margin-left: 5px;
`;

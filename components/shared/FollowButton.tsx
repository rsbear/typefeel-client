import React, { FC, useState } from "react";
import { Button } from "styles/buttons";
import {
  useFollowKeyboardMutation,
  useFollowKeyboardDeleteMutation,
  useCreateFollowMutation
} from "generated/graphql";
import css from "@emotion/css";

interface Props {
  keyboardId?: string;
  follows?: any;
}

const FollowButton: FC<Props> = ({ keyboardId, follows }) => {
  const [following, setFollowing] = useState(false);
  const [followId, setFollowId] = useState("");

  const [followMut] = useCreateFollowMutation();
  const [unfollowMut] = useFollowKeyboardDeleteMutation();

  React.useEffect(() => {
    for (let k of follows) {
      if (k.productId === keyboardId) {
        setFollowing(true);
        setFollowId(k.id);
      } else {
        setFollowing(false);
        setFollowId("");
      }
    }
  }, []);

  const handleFollow = async e => {
    e.preventDefault();
    try {
      await followMut({
        variables: { id: keyboardId }
      });
      setFollowing(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnfollow = async e => {
    e.preventDefault();
    try {
      await unfollowMut({
        variables: { id: followId }
      });
      setFollowing(false);
    } catch (err) {
      console.log(err);
    }
  };

  return !following ? (
    <Button secondary="true" onClick={e => handleFollow(e)}>
      Follow <i className="icon ion-ios-heart-empty" css={heartIcon} />
    </Button>
  ) : (
    <Button secondary="true" onClick={e => handleUnfollow(e)}>
      Following <i className="icon ion-ios-heart" css={heartIcon} />
    </Button>
  );
};

export default FollowButton;

const heartIcon = css`
  margin-left: 5px;
`;

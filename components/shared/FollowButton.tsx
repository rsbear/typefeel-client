import React, { FC, useState, useEffect, useContext } from "react";
import { Button, RoundButton } from "styles/buttons";
import {
  useCreateFollowMutation,
  useUnfollowMutation
} from "generated/graphql";
import css from "@emotion/css";
import Link from "next/link";
import { useAppContext } from "hooks/useAppContext";

interface Props {
  id: string;
  follows?: any;
}

const FollowButton: FC<Props> = ({ id }) => {
  const { authUser } = useAppContext();
  const [following, setFollowing] = useState(false);
  const [followId, setFollowId] = useState("");

  const [followMut] = useCreateFollowMutation();
  const [unfollowMut] = useUnfollowMutation();

  useEffect(() => {
    if (authUser) {
      for (let f of authUser.follows) {
        if (f.productId === id) {
          setFollowing(true);
          setFollowId(f.id);
        }
      }
    }
  }, [authUser]);

  const handleFollow = async () => {
    event.preventDefault();
    if (!following) {
      setFollowing(true);
      try {
        const res = await followMut({
          variables: { id }
        });
        if (res.data && res.data.createFollow.success) {
          setFollowId(res.data.createFollow.id);
        }
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

  return !authUser ? (
    <Link href="/login">
      <a>
        <RoundButton large="true" primary="true" margins="0 0 15px 0">
          Log in to join or follow
        </RoundButton>
      </a>
    </Link>
  ) : (
    <RoundButton secondary="true" onClick={handleFollow}>
      {!following ? "Follow" : "Following"}
      <i
        className={
          !following ? "icon ion-ios-heart-empty" : "icon ion-ios-heart"
        }
        css={heartIcon}
      />
    </RoundButton>
  );
};

export default FollowButton;

const heartIcon = css`
  margin-left: 5px;
`;

const heartIconFull = css`
  margin-left: 5px;
  color: pink;
`;

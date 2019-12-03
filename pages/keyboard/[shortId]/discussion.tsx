import React, { FC, useState } from "react";
import Layout from "components/layouts/Layout";
import {
  useCreatePostMutation,
  useKeyboardPostsQuery
} from "generated/graphql";
import { GetProps } from "interfaces/GetProps";

import css from "@emotion/css";
import { flex, colors } from "styles/main";
import { Button } from "styles/buttons";
import { ReplyBox } from "styles/inputs";
import PostBox from "components/shared/PostBox";

const KeyboardDiscussion: GetProps<any> = ({ shortId, authUser }) => {
  const [body, setBody] = useState("");
  const { loading, error, data, refetch } = useKeyboardPostsQuery({
    variables: { shortId }
  });

  console.log(data);

  const [createPost] = useCreatePostMutation();

  const handleCreatePost = async (e: any) => {
    e.preventDefault();
    try {
      let response = await createPost({
        variables: { id: data.keyboard.id, body }
      });
      console.log(response);
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  const dynamicNav = {
    name: !loading ? data.keyboard.name : "",
    discussionHref: "/keyboard/[shortId]/discussion",
    discussionAs: `/keyboard/${shortId}/discussion`,
    dataHref: "/keyboard/[shortId]/data",
    dataAs: `/keyboard/${shortId}/data`
  };
  return (
    <Layout title="Discussion" authUser={authUser} dynamicNav={dynamicNav}>
      {loading && <h2>Loading...</h2>}
      {!loading && !error && data && (
        <div css={flex.row}>
          <div css={infoLeft}>
            <h1>{data.keyboard.name}</h1>
            <div css={flex.column}>
              {data.keyboard.images600.map((p: string, i: number) => (
                <img src={p} alt="" css={pic} key={i} />
              ))}
            </div>
          </div>
          <div css={postsContainer}>
            {data.keyboard.posts.map((p: any) => (
              <PostBox
                created={p.created}
                content={p.body}
                username={p.user.username}
                key={p.id}
              />
            ))}
            <ReplyBox
              placeholder="Reply"
              onChange={e => setBody(e.target.value)}
            ></ReplyBox>
            <Button primary="true" onClick={e => handleCreatePost(e)}>
              Submit reply
            </Button>
          </div>
        </div>
      )}
    </Layout>
  );
};

KeyboardDiscussion.getInitialProps = async (context: any) => {
  const { shortId } = context.query;
  return { shortId };
};

export default KeyboardDiscussion;

const infoLeft = css`
  padding-right: 20px;
  border-right: solid 1px ${colors.black10};
`;
const pic = css`
  margin: 10px 0;
  height: 240px;
  width: 240px;
  object-fit: cover;
  object-position: center;
`;

const postsContainer = css`
  width: 100%;
  padding-left: 20px;
`;

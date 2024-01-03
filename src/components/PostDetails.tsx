import { Suspense, useEffect, useState } from "react";
import {
  Await,
  defer,
  useAsyncValue,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import { IPostComment, IPostDetails } from "../types/index.types";
import { PostComment } from "./PostComment";

export const PostDetails = () => {
  const { post, comments } = useLoaderData() as { post: IPostDetails, comments: IPostComment[] };
  console.log("post: ", post);
  const navigation = useNavigate();
  const goBack = () => navigation(-1);

  return (
    <>
      <Suspense fallback={<h3>Loadig post...</h3>}>
        <Await resolve={post}>
          {(resolvedPost) =>
            <>
              <h3>
                {resolvedPost?.id}: {resolvedPost?.title}
              </h3>
              <p>{resolvedPost?.body}</p>              
            </>
          }
        </Await>
      </Suspense>
      <Suspense fallback={<h3>Loadig comments...</h3>}>
        <Await resolve={comments}>
          {(resolvedComments) =>
            <>{
              resolvedComments.map( (comment: IPostComment) => (
                <PostComment comment={comment}/>
              ))
            }                           
            </>
          }
        </Await>
      </Suspense>
      <button onClick={goBack}>Back</button>
    </>
  );
};

async function loadPost(id: number) {
  const postsRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return await postsRes.json();
}

async function loadComments(id: number) {
  const commentsRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return await commentsRes.json();
}

export const postLoader = async ({ params }: { params: any }) => {
  console.log("params: ", params);
  return defer({
    post: loadPost(params.id),
    comments: loadComments(params.id)
  });
};

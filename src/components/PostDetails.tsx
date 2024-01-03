import { Suspense, useEffect, useState } from "react";
import {
  Await,
  defer,
  useAsyncValue,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";

export interface IPostDetails {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export const PostDetails = () => {
  const { post } = useLoaderData() as { post: IPostDetails };
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

export const postLoader = async ({ params }: { params: any }) => {
  console.log("params: ", params);
  return defer({
    post: loadPost(params.id),
  });
};

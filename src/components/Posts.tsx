import { Post } from "./Post";
import { Await, defer, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import { IPostDetails } from "../types/index.types";

export const Posts = () => {
  const { posts } = useLoaderData() as { posts: IPostDetails[] };
  console.log("posts: ", posts);
  return (
    <Suspense fallback={<h3>Loading posts...</h3>}>
      <Await resolve={posts}>
        {(resolvedPosts) => <>{
          resolvedPosts.map((post: IPostDetails) => (
            <Post post={post} key={`post_${post.id}`} />
          ))
        }
        </>}
      </Await>
    </Suspense>
  );
};

async function loadPosts() {
  const postsRes = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await postsRes.json();
}

export const postsLoader = async () => {
  return defer({
    posts: loadPosts(),
  });
};

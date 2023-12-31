import { useEffect, useState } from "react";
import { Post } from "./Post";
import { IPostDetails } from "./PostDetails";

export const Posts = () => {
  const [posts, setPosts] = useState<IPostDetails[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log("json: ", json);
        setPosts(json);
      });
  }, []);
  if (posts?.length)
    return (
      <>
        {posts.map((post) => (
          <Post post={post} key={`post_${post.id}`}/>
        ))}
      </>
    );
  return <h3>No posts</h3>;
};

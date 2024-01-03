import { Link } from "react-router-dom";
import { IPostDetails } from "../types/index.types";

export const Post = ({ post }: { post: IPostDetails }) => {
  // console.log("render Post >>>")

  return (
    <div>
      <h3>{post.id}: </h3>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </div>
  );
};



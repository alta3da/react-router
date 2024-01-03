import { IPostComment } from "../types/index.types";

export const PostComment = ({comment}: {comment: IPostComment}) => {
  return (
    <>
      <h3>
        {comment?.name}: {comment?.email}
      </h3>
      <p>{comment?.body}</p>
    </>
  );
};

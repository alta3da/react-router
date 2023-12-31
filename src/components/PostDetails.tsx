import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export interface IPostDetails {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export const PostDetails = () => {
  const { id } = useParams();
  const navigation = useNavigate()
  const [post, setPost] = useState<IPostDetails>();
  const goBack= () => navigation(-1)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log("json: ", json);
        setPost(json);
      });
  }, []);

  if(!post)
    return <div>loading...</div>
  return (   
      <div>
        <h3>
          {post?.id}: {post?.title}
        </h3>
        <p>{post?.body}</p>
        <button onClick={goBack}>Back</button>
      </div>    
  );
};

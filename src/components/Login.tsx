import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Login = () => {  
  const {user, setUser} = useAuth()
  const location = useLocation();
  const navigation = useNavigate();
  console.log("location: ", location);
  const ref = useRef(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userName = (ref.current as unknown as { username: { value: string } })
      .username.value;
    console.log("userName: ", userName);
    setUser(userName)
    if (location?.state?.from) navigation(location?.state?.from);
  };

  return (
    <>
      {!user && <form onSubmit={(e) => handleSubmit(e)} ref={ref}>
        <input type="text" name="username" placeholder="Say friend and enter"></input>
        <button type="submit">Submit</button>
      </form>}
      <br />
      <button onClick={() => setUser(undefined)}>Logout</button>
    </>
  );
};

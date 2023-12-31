import { useContext, useRef } from "react";
import { AuthContext } from "../App";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";

export const Login = () => {
  const context = useContext(AuthContext);
  const location = useLocation();
  const navigation = useNavigate();
  console.log("location: ", location);
  const ref = useRef(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userName = (ref.current as unknown as { username: { value: string } })
      .username.value;
    console.log("userName: ", userName);
    context.user = userName;
    if (location.state.from) navigation(location.state.from);
  };

  const handleLogout = () => {
    context.user = undefined;
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} ref={ref}>
        <input type="text" name="username"></input>
        <button type="submit">Submit</button>
      </form>
      <br />
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

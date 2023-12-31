import { useContext, useEffect } from "react";
import { AuthContext } from "../App";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthGuard = ({ children }: { children: any }) => {
  const {user} = useContext(AuthContext);
  const navigation = useNavigate()
  const {pathname} = useLocation()

  useEffect(() => {
    if(!user) navigation("/login", {replace: true, state:{from: pathname}})
  })  

  return <>{user && children}</>;
};

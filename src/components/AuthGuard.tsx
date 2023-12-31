import { useContext, useEffect } from "react";
import { AuthContext } from "../App";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const AuthGuard = ({ children }: { children: any }) => {
  const auth = useAuth();
  const navigation = useNavigate()
  const {pathname} = useLocation()

  useEffect(() => {
    if(!auth) navigation("/login", {replace: true, state:{from: pathname}})
  })  

  return <>{auth && children}</>;
};

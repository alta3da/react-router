import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const AuthGuard = ({ children }: { children: any }) => {
  const {user} = useAuth();
  const navigation = useNavigate()
  const {pathname} = useLocation()

  useEffect(() => {
    if(!user) navigation("/login", {replace: true, state:{from: pathname}})
  })  

  return <>{user && children}</>;
};

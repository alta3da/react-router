import { useContext } from "react"
import { AuthContext } from "../App"


export const useAuth = () => {
  const {user} = useContext(AuthContext)
  return !!user
}
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { createContext, useState } from "react";
import { router } from "./routes/router";

export const AuthContext = createContext<{
  user: string | undefined;
  setUser: Function;
}>({ user: undefined, setUser: () => {} });

function App() {
  console.log("render App");
  const [user, setUser] = useState<string>();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router}/>
    </AuthContext.Provider>
  );
}

export default App;

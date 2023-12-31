import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import { About } from "./components/About";
import { Layout } from "./components/Layout";
import { Posts } from "./components/Posts";
import { PostDetails } from "./components/PostDetails";
import { AuthGuard } from "./components/AuthGuard";
import { Login } from "./components/Login";
import { createContext, useState } from "react";

export const AuthContext = createContext<{
  user: string | undefined;
  setUser: Function;
}>({ user: undefined, setUser: () => {} });

function App() {
  console.log("render App");
  const [user, setUser] = useState<string>();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/about-us"
            element={<Navigate to="/about" replace={true} />}
          />
          <Route
            path="/posts"
            element={
              <AuthGuard>
                <Posts />
              </AuthGuard>
            }
          />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;

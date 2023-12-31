import React, { useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Comp } from "./Comp";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import { About } from "./components/About";
import { Layout } from "./components/Layout";
import { Posts } from "./components/Posts";
import { PostDetails } from "./components/PostDetails";
import { createContext } from "react";
import { AuthGuard } from "./components/AuthGuard";
import { Login } from "./components/Login";

export const AuthContext = createContext<{user: string | undefined}>({ user: undefined });

function App() {
  console.log("render App");
  return (
    <AuthContext.Provider value={{ user: undefined }}>
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

import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Login } from "../components/Login";
import { AuthGuard } from "../components/AuthGuard";
import { Posts, postsLoader } from "../components/Posts";
import { PostDetails, postLoader } from "../components/PostDetails";
import { NotFound } from "../components/NotFound";

export const router = createBrowserRouter(
  createRoutesFromElements(
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
        loader={postsLoader}
      />
      <Route
        path="/posts/:id"
        element={
          <AuthGuard>
            <PostDetails />
          </AuthGuard>
        }
        loader={postLoader}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

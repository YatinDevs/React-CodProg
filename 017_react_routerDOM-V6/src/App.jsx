import React from "react";
import {
  About,
  Contact,
  Error,
  Home,
  PostDetails,
  Posts,
  Login,
} from "./pages";

// useCase :
// step 1 : import 4 things :
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import RequireAuth from "./components/RequireAuth";
import useAuth, { AuthProvider } from "./context/AuthProvider";
import { loader as fetchPosts } from "./pages/Posts";
import { loader as fetchPostDetails } from "./pages/PostDetails";
// step 2: create router

// posts/:id --> path variable
function App() {
  const { isLoggedIn } = useAuth();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          errorElement={<Error />}
          path="/posts"
          loader={(args) => fetchPosts(args, { isLoggedIn: isLoggedIn })}
          element={<Posts />}
        />
        <Route
          path="/posts/:id"
          errorElement={<Error />}
          loader={(args) => fetchPostDetails(args, { isLoggedIn: isLoggedIn })}
          element={<PostDetails />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  // console.log("React-Router-V6");
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

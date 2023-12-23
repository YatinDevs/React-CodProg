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
import { AuthProvider } from "./context/AuthProvider";
import { loader as fetchPosts } from "./pages/Posts";
import { loader as fetchPostDetails } from "./pages/PostDetails";
// step 2: create router

// posts/:id --> path variable
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/posts"
        loader={fetchPosts}
        element={
          <RequireAuth>
            <Posts />
          </RequireAuth>
        }
      />
      <Route
        path="/posts/:id"
        errorElement={<Error />}
        loader={fetchPostDetails}
        element={
          <RequireAuth>
            <PostDetails />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  // console.log("React-Router-V6");
  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
}

export default App;

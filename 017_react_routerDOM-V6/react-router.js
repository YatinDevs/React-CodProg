// first v5
// we will see v6.0

// install react-router-dom package :
// - npm install react-router-dom

/*
 
 !1 Basic Overview of React-Router DOM
import React from "react";

* useCase :
* step 1 : import 4 things :
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

* step 2: create router

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<h1>HomePage</h1>} />
      <Route path="/about" element={<h1>AboutPage</h1>} />
      <Route path="/contact" element={<h1>Contact</h1>} />
      <Route path="/post" element={<h1>Posts</h1>} />
      <Route path="*" element={<h1>PageNotFound</h1>} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

*/

// !2 Nested Routes ,Link ,Outlet
/*
 
? - Nested Routes:

In React Router DOM, nested routes are achieved by nesting Route components within
each other. Each Route component defines a specific path and renders a corresponding
component when the path is matched.

? - Link:

The Link component from React Router DOM is used to create navigation links.
It prevents the default behavior of a traditional anchor (<a>) tag and instead
updates the URL and renders the corresponding component.

- The default behavior of a traditional anchor (<a>) tag, when clicked,
is to perform a full page reload or navigate to a new URL. 
In a single-page application (SPA) built with a library like React and a
routing library like React Router DOM, this behavior is undesirable because
it contradicts the goal of creating a seamless, dynamic user experience without
full page refreshes.

? - Outlet:
In React Router DOM, the concept of an outlet is implicit.
When you define nested Route components, the content of the matched route is 
automatically rendered at the location of the parent Route.

*/
// Link :
// using anchor and href to navlinks page refreshes.

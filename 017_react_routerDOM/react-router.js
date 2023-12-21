// first v5
// we will see v6.0

// install react-router-dom package :
// - npm install react-router-dom

/*
 
 - Basic Overview of React-Router DOM
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

// Link :
// using anchor and href to navlinks page refreshes.

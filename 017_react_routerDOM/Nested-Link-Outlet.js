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

- Link :
- using anchor and href to navlinks page refreshes.

!3 Navigation Link (NavLink):

The NavLink component is used for creating navigation links in a React application.
It is an extension of the Link component with additional features.
The NavLink component allows you to apply styles or add custom classNames to
the active link based on the current route.

- In summary, NavLink is a powerful component in React Router DOM that enhances
 the functionality of Link by providing features for styling active navigation 
 links based on the current route. It's commonly used in navigation menus to
 highlight the active link and improve the user experience.

!4 - Fetch Posts
https://jsonplaceholder.typicode.com/posts

!5 - useParams :

Purpose: useParams is a hook provided by the React Router library. 
It is used to access parameters from the current route in a React component.

Usage: It is typically used within a component that is rendered by a Route
 component in a React Router setup.

* *** dynamic route parameters 
<Route path="/users/:userId" component={UserProfile} />

useParams is commonly used with dynamic route parameters specified in the route
 path using a colon syntax.

*/

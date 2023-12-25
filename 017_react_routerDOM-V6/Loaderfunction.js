// we will take React router DOM  v6 from here.

// 6.4+
// !loaders function.
// form Element
// actions

// Case :  Previously .
// Component mounted --> Posts Component.
// useEffect hook --> API Calls --> fetch data.

// Case : With Loaders.

// data fetched first
// Component mounted afterwards.

// * How to use Loaders

// 1. Provide loader function to Route
// 2. useLoaderData and get data.
// 3. Error handling of loaders
// 4. (redirect to Error page with errorElement)
// 5. useRouteError to fetch Error which occured

// Case : Protected Routing we Did
// But Problem with Loader function
// API call is done first then Component is Mounted.
// So.

// ! Protected Network Calls needed in Loader Function.

// we declared AuthProvider to top most parent
// then passed isLoggedIn auth to required components
// as args
// used re-direct function of react-router-dom
// to handle protected network call on boolean of auth.

// !Search Params and Redirect
// Case :  Now we want that user should go to  previous path
// location after login

// !useNavigation and Loading State

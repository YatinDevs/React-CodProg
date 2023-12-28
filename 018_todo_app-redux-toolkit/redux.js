/*
# Redux Toolkit - Redux

- Intro to Redux and Create Counter app using redux-toolkit.
- We will Have a Store where we will have state of whole application .

# Store :

- The Store contains the state of the Entire Application.
- We create a single store to store the state of the entire app.
- We can create Multiple stores ,but it is not recommended.

# How to Update State inside Store. - dispatch function (invokes action type in reducer)

- We Call the `dispatch ` function and provide the action to the `dispatch` function,
  indication how we want to update the state.

# Reducers - reducer (actual logic)

- After Calling the dispatch function, it ,in turn ,invokes the reducer function.
  Reducers contain the logic for updating the state,which we define , as they have access to
  both the app state and the action we provided when calling the dispatch function.

# Slice

- An App may consists of Multiple Features.
- forEach feature, we create a 'slice',which is essentially a collection of reducer logic and actions specific to that particular feature.

- npm install @reduxjs/toolkit react-redux

*/

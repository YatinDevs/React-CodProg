# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Redux Setup :

- Redux Thunk
- The word Thunk - Programming term - means -
- A piece of code that does some delayed work.
- Rather than execute Some logic now,
- we can write a function body or code that can be used to perform the work later.

# where you should write code to fetch data ?

- component ------------ action dispatch -----> reducers.

# Inside Reducers?

- Reducers should always be synchronous.
- Reducers should access only state and actions(through Parameters)

# Where you should write code to fetch data ?

- thunk function - async task
  component(action dispatch) ----------> thunk function --------> reducers.

# Setting up JSON-Server for Testing :

- npm install -g json-server

- console cmd : json-server --watch db.json --port 8001

# create Async Thunk for Get Request

- npm i @redux/toolkit react-redux axios

- GetRequest

# create Async Thunk for POST Request

# create separate Loading and error states for different Requests

# create Async Thunk for Delete Request and PATCH req

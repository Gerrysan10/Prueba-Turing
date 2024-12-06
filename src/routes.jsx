import App from "./screens/App";
import Login from "./screens/login";

const routes = [
    {
      path: "/home",
      element: <App />,
    },
    {
      path: "/",
      element: <Login />,
    },
  ];

export default routes;
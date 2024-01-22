import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/", // the url
    element: <App />, // which component to load
    errorElement: <ErrorPage />, // which component to load on error
    children: [ // child routes
      {
        path: "/", // the url
        element: <Home />, // which component to load
        children: [
          {
            path: "/users/:id", // the url
            element: <UserProfile /> // which component to load
          }
        ]
      },
      {
        path: "/about", // the url
        element: <About /> // which component to load
      },
      {
        path: "/login", // the url
        element: <Login /> // which component to load
      },
      {
        path: "/profile", // the url
        element: <UserProfile /> // which component to load
      }
    ]
  }
]

export default routes;
import Login from "./features/auth/login/Login";
import Home from "./features/home/Home";

const injectProps = (props, Component) => {
  return <Component {...props} />;
};

export const routes = {
  home: {
    exact: false,
    path: "/",
    component: (props) => injectProps(props, Home),
    title: "Home",
  },

  login: {
    exact: false,
    path: "/login",
    component: (props) => injectProps(props, Login),
    title: "login",
  },
};

export const paths = [
  {
    category: "home",
    to: routes.home.path,
    name: routes.home.title,
    key: "home",
  },
  {
    category: "login",
    to: routes.login.path,
    name: routes.login.title,
    key: "login",
  },
];

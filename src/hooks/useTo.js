import { useNavigate } from "react-router-dom";
import { routes } from "../router";

export const useTo = () => {
  const navigate = useNavigate();
  const to = (key, query, state = {}) => {
    if (typeof key == "undefined" || key === "") {
      navigate(routes.top.path, { ...state });
      return;
    }

    if (typeof query == "undefined" || query === "") {
      navigate(key, { ...state });
      return;
    }

    if (query[0] === "?") {
      navigate(key + query, { ...state });
      return;
    }

    navigate(key + "?" + query, { ...state });
  };
  return to;
};

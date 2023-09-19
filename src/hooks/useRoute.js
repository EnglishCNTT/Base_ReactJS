import { useLocation, useNavigate, useParams } from "react-router-dom";
import { routes } from "../router";
import { useTo } from "./useTo";

export const useRoute = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const to = useTo();
  const open = (url) => window.open(url);
  const getRoute = (path) => routes[path];

  return { location, navigate, params, to, open, getRoute };
};

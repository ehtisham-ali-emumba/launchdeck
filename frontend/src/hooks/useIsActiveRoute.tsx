import { useLocation } from "react-router-dom";

export function useIsActiveRoute() {
  const location = useLocation();

  const isRouteActive = (path: string) => location.pathname === path;
  return { isRouteActive };
}

import { useLocation } from "react-router-dom";

export function useConsulta() {
  return new URLSearchParams(useLocation().search);
}

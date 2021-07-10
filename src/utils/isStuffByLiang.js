import { useLocation } from "@reach/router"

export const useIsStuffByLiang = () => {
  return useLocation()?.href?.includes("liang") ?? false
}

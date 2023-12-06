import { useQuery } from "@tanstack/react-query";
import { getCurrentUserAPI } from "../services/users";
import { useUser } from "../stores/user";

export const useCurrentUser = () => {
  const isLoggedIn = useUser((store) => store.isLoggedIn);
  return useQuery({
    queryKey: ["me"],
    queryFn: () => getCurrentUserAPI(),
    enabled: isLoggedIn,
  });
};

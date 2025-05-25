import useSWR from "swr";
import { fetcher } from "../infra/fetch";
import type { Friend } from "../model/friend";
import { useNavigate } from "react-router";

export const useFriend = (id: string) => {
  const navigate = useNavigate();
  const {
    data: friend,
    error: isError,
    isLoading,
  } = useSWR<Friend>(`/friend/${id}`, fetcher, {
    onError: (error) => {
      if (error.status === 404) {
        navigate("/notfound");
      }
    },
  });

  return { friend, isError, isLoading };
};

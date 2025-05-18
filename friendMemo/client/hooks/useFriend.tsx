import useSWR from "swr";
import { fetcher } from "../infra/fetch";
import type { Friend } from "../model/friend";

export const useFriend = (id: string) => {
  const {
    data: friend,
    error: isError,
    isLoading,
  } = useSWR<Friend>(`/friend/${id}`, fetcher);

  return { friend, isError, isLoading };
};

import { fetcher } from "../infra/fetch";
import useSWR from "swr";
import type { Friend } from "../model/friend";
export const useFriends = () => {
  const {
    data: friends,
    error,
    isLoading,
  } = useSWR<Friend[]>("/friend", fetcher);
  const isError = error;
  return {
    friends,
    isError,
    isLoading,
  };
};

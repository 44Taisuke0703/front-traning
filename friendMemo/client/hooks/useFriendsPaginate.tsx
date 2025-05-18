import useSWR from "swr";
import { fetcher } from "../infra/fetch";
import type { Friend, FriendPagination } from "../model/friend";

export const useFriendsPaginate = (itemOffset: number, itemPerPage: number) => {
  const { data: totalCount, isLoading: isLoadingTotalCount } = useSWR<{
    items: number;
  }>("/friend?_page=1", fetcher);
  const { data: todos, isLoading: isLoadingTodo } = useSWR<Friend[]>(
    `/friend?_start=${itemOffset}&_limit=${itemPerPage}`,
    fetcher
  );
  const isLoading = isLoadingTodo || isLoadingTotalCount;
  return {
    data: { todos: todos, totalCount: totalCount?.items } as FriendPagination,
    isLoading,
  };
};

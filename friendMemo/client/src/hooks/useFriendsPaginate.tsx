import useSWR from "swr";
import { fetcher } from "../infra/fetch";
import type { Friend, FriendPagination } from "../model/friend";

export const useFriendsPaginate = (
  itemOffset: number,
  itemPerPage: number,
  params?: string
) => {
  const { data: total, isLoading: isLoadingTotalCount } = useSWR<Friend[]>(
    params ? `/friend?${params}` : "/friend",
    fetcher
  );
  const { data: items, isLoading: isLoadingTodo } = useSWR<Friend[]>(
    params
      ? `/friend?_start=${itemOffset}&_limit=${itemPerPage}&${params}`
      : `/friend?_start=${itemOffset}&_limit=${itemPerPage}`,
    fetcher
  );
  const isLoading = isLoadingTodo || isLoadingTotalCount;
  return {
    data: { items, totalCount: total?.length } as FriendPagination,
    isLoading,
  };
};

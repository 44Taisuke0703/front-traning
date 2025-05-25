import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Loading from "./Loading";

type UseDataHook<T> = (
  offset: number,
  limit: number,
  params?: string
) => {
  data: { items: T[]; totalCount: number } | undefined;
  isLoading: boolean;
};

type ListComponentProps<T> = {
  items: T[];
};

type PaginationPageProps<T> = {
  useDataHook: UseDataHook<T>;
  ListComponent: React.ComponentType<ListComponentProps<T>>;
  itemPerPage: number;
  params?: string;
  SkeletonComponent?: React.ComponentType;
};

function Pagination<T>({
  useDataHook,
  ListComponent,
  itemPerPage,
  params,
  SkeletonComponent,
}: PaginationPageProps<T>) {
  const [itemOffset, setItemOffset] = useState<number>(0);
  useEffect(() => {
    setItemOffset(0);
  }, [params]);
  const { data, isLoading } = useDataHook(itemOffset, itemPerPage, params);
  console.log(data);
  const totalCount: number = data?.totalCount || 0;
  const pageCount: number = Math.ceil(totalCount / itemPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset: number = (event.selected * itemPerPage) % totalCount;
    setItemOffset(newOffset);
  };

  if (isLoading || data === undefined) {
    return (
      <div className="offset-2 col-8 mt-3">
        {SkeletonComponent ? (
          <SkeletonComponent></SkeletonComponent>
        ) : (
          <Loading></Loading>
        )}
      </div>
    );
  }

  if (data.items.length === 0) {
    return <div className="offset-2 col-8">友達が見つかりません</div>;
  }

  return (
    <div className="row">
      <div className="offset-2 col-8">
        <ListComponent items={data.items} />
      </div>
      <div className="d-flex justify-content-center offset-2 col-8 mt-3">
        <ReactPaginate
          className="pagination shadow"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          forcePage={pageCount > 0 ? itemOffset / itemPerPage : undefined}
          nextClassName="page-item"
          previousClassName="page-item"
          pageClassName="page-item"
          breakClassName="page-item"
          pageLinkClassName="page-link"
          nextLinkClassName="page-link"
          previousLinkClassName="page-link"
          breakLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    </div>
  );
}

export default Pagination;

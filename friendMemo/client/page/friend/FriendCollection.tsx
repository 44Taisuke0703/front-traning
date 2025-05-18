import FriendList from "../../component/friend/FriendList";
import { useFriends } from "../../hooks/useFriends";
import { NavLink } from "react-router";
import Pagination from "../../component/util/Pagination";
import { useFriendsPaginate } from "../../hooks/useFriendsPaginate";
const FriendCollection = () => {
  const { friends, isError, isLoading } = useFriends();
  if (isLoading || friends === undefined) return <div>Loading...</div>;
  if (isError) return <div>Error loading friends</div>;
  return (
    <>
      <div className="row mt-3">
        <div className="offset-1 col-10 offset-lg-3 col-lg-6">
          <div className="d-flex justify-content-end">
            <NavLink className="btn btn-primary" to="/friend/new">
              友達を追加
            </NavLink>
          </div>
          <Pagination
            useDataHook={useFriendsPaginate}
            itemPerPage={5}
            ListComponent={FriendList}
          ></Pagination>
        </div>
      </div>
    </>
  );
};
export default FriendCollection;

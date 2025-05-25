import FriendList from "../../component/friend/FriendList";
import { NavLink } from "react-router";
import Pagination from "../../component/util/Pagination";
import { useFriendsPaginate } from "../../hooks/useFriendsPaginate";

import { useSearchName } from "../../hooks/useSearchName";
import SkeltonFriendCard from "../../skelton/SkeletonFriendCard";

const SkeltonComponent = () => {
  return (
    <>
      <SkeltonFriendCard></SkeltonFriendCard>
      <SkeltonFriendCard></SkeltonFriendCard>
      <SkeltonFriendCard></SkeltonFriendCard>
      <SkeltonFriendCard></SkeltonFriendCard>
      <SkeltonFriendCard></SkeltonFriendCard>
    </>
  );
};
const FriendCollection = () => {
  const { SearchInput, name } = useSearchName();
  return (
    <>
      <div className="row mt-3">
        <div className="offset-1 col-10 offset-lg-3 col-lg-6">
          <div className="d-flex justify-content-end">
            <NavLink className="btn btn-outline-primary" to="/friend/new">
              友達を追加
            </NavLink>
          </div>
          <div className=" offset-1 col-10 offset-lg-2 col-lg-8 mt-1">
            <SearchInput></SearchInput>
          </div>

          <Pagination
            useDataHook={useFriendsPaginate}
            itemPerPage={5}
            ListComponent={FriendList}
            params={`name_like=${name}`}
            SkeletonComponent={SkeltonComponent}
          ></Pagination>
        </div>
      </div>
    </>
  );
};
export default FriendCollection;

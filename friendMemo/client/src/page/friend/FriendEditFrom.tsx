import { useParams } from "react-router";

import { useFriend } from "../../hooks/useFriend";
import { lazy, Suspense } from "react";
import SkeltonAbstractFriendForm from "../../component/friend/SkeltonAbstractFriendForm";

const FriendUpdateForm = lazy(
  () => import("../../component/friend/FriendUpdateForm")
);
const FriendEditFrom = () => {
  const { id } = useParams<{ id: string }>();
  const { friend, isError, isLoading } = useFriend(id ?? "");
  if (id === undefined) {
    return <div>友達のIDが指定されていません</div>;
  }
  if (isLoading || isError || friend === undefined) {
    return <SkeltonAbstractFriendForm></SkeltonAbstractFriendForm>;
  }
  return (
    <Suspense
      fallback={<SkeltonAbstractFriendForm></SkeltonAbstractFriendForm>}
    >
      <FriendUpdateForm friend={friend}></FriendUpdateForm>;
    </Suspense>
  );
};
export default FriendEditFrom;

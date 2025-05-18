import { useParams } from "react-router";
import FriendUpdateForm from "../../component/friend/FriendUpdateForm";
import { useFriend } from "../../hooks/useFriend";
const FriendEditFrom = () => {
  const { id } = useParams<{ id: string }>();
  const { friend, isError, isLoading } = useFriend(id ?? "");
  if (id === undefined) {
    return <div>友達のIDが指定されていません</div>;
  }
  if (isLoading || isError || friend === undefined) {
    return <div>Loading...</div>;
  }
  return <FriendUpdateForm friend={friend}></FriendUpdateForm>;
};
export default FriendEditFrom;

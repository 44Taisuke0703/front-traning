import { useParams } from "react-router";
import { useFriend } from "../../hooks/useFriend";
import FriendDetails from "../../component/friend/FriendDetails";

const FriendSingle = () => {
  const { id } = useParams<{ id: string }>();
  const { friend, isError, isLoading } = useFriend(id ?? "");

  if (id === undefined) {
    return <div>友達のIDが指定されていません</div>;
  }

  if (isLoading || isError || friend === undefined) {
    return <div>Loading...</div>;
  }
  return (
    <div className="row mt-3">
      <div className="offset-1 col-10 offset-lg-3 col-lg-6">
        <h2 className="text-center">友達詳細</h2>
        <FriendDetails friend={friend}></FriendDetails>
      </div>
    </div>
  );
};
export default FriendSingle;

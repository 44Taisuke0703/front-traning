import FriendList from "../component/friend/FriendList";
import { useFriends } from "../hooks/useFriends";

const FriendCollection = () => {
  const { friends, isError, isLoading } = useFriends();
  if (isLoading || friends === undefined) return <div>Loading...</div>;
  if (isError) return <div>Error loading friends</div>;
  return (
    <>
      <div className="row">
        <div className="offset-1 col-10 offset-lg-3 col-lg-6">
          <FriendList friends={friends}></FriendList>
        </div>
      </div>
    </>
  );
};
export default FriendCollection;

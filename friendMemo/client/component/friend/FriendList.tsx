import type { Friend } from "../../model/friend";
import FriendCard from "./Friend";

const FriendList = ({ friends }: { friends: Friend[] }) => {
  return (
    <>
      {friends.map((friend) => (
        <FriendCard key={friend.id} friend={friend} />
      ))}
    </>
  );
};
export default FriendList;

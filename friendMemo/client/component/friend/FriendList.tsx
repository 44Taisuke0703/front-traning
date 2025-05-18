import type { Friend } from "../../model/friend.ts";
import FriendCard from "./FriendCard.tsx";

const FriendList = ({ items }: { items: Friend[] }) => {
  return (
    <>
      {items.map((friend) => (
        <FriendCard key={friend.id} friend={friend} />
      ))}
    </>
  );
};
export default FriendList;

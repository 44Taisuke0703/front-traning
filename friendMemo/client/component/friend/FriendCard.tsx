import { NavLink } from "react-router";
import type { Friend } from "../../model/friend";

const FriendCard = ({ friend }: { friend: Friend }) => {
  const { id, name, email, phone, address, birthday, memo } = friend;
  return (
    <div className="card mt-3">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h4 className="card-title">{name}</h4>
          <NavLink className="text-secondary" to={`/friend/${id}`}>
            詳細
          </NavLink>
        </div>
        <p className="card-text">{email}</p>
        <p className="card-text">{phone}</p>
        <p className="card-text">{address}</p>
        <p className="card-text">{birthday}</p>
        <p className="card-text">{memo}</p>
      </div>
    </div>
  );
};
export default FriendCard;

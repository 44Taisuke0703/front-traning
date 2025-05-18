import type { Friend } from "../../model/friend";

const Friend = ({ friend }: { friend: Friend }) => {
  const { name, email, phone, address, birthday, memo } = friend;
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{email}</p>
        <p className="card-text">{phone}</p>
        <p className="card-text">{address}</p>
        <p className="card-text">{birthday}</p>
        <p className="card-text">{memo}</p>
      </div>
    </div>
  );
};
export default Friend;

import { NavLink, useNavigate } from "react-router";
import { deleteFriend } from "../../api/friend";
import type { Friend } from "../../model/friend";

const FriendDetails = ({ friend }: { friend: Friend }) => {
  const navigate = useNavigate();
  const { id, name, email, phone, memo, address, birthday } = friend;
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">{name}</h4>
      </div>
      <div className="card-body">
        <p className="card-text">メールアドレス：{email}</p>
        <p className="card-text">電話番号：{phone}</p>
        <p className="card-text">住所：{address}</p>
        <p className="card-text">誕生日：{birthday}</p>
        <p className="card-text">メモ：{memo}</p>
      </div>
      <div className="card-footer d-flex justify-content-end">
        <button
          className="btn btn-danger me-3"
          onClick={() => {
            deleteFriend(id).then(() => {
              navigate("/friend", {
                state: {
                  flash: { message: "友達を削除しました", type: "success" },
                },
              });
            });
          }}
        >
          削除
        </button>
        <NavLink className="btn btn-primary" to={`/friend/${id}/edit`}>
          編集
        </NavLink>
      </div>
    </div>
  );
};

export default FriendDetails;

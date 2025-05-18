import AbstractFriendForm from "./AbstractFriendForm";
import type { Friend, FriendInput } from "../../model/friend";
import { putFriend } from "../../api/friend";
import { useNavigate } from "react-router";

const FriendUpdateForm = ({ friend }: { friend: Friend }) => {
  const navigate = useNavigate();
  const defaultValues: FriendInput = {
    name: friend.name,
    email: friend.email,
    phone: friend.phone,
    address: friend.address,
    birthday: friend.birthday,
    memo: friend.memo,
  };
  const onSubmit = async (data: FriendInput) => {
    await putFriend(friend.id, data);
    navigate(`/friend/${friend.id}`, {
      state: { flash: { message: "友達を更新しました", type: "success" } },
    });
  };
  return (
    <>
      <AbstractFriendForm
        defaultValues={defaultValues}
        onSubmit={onSubmit}
      ></AbstractFriendForm>
    </>
  );
};

export default FriendUpdateForm;

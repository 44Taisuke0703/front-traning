import type { Friend } from "../../model/friend";
import { postFriend } from "../../api/friend";
import AbstractFriendForm from "./AbstractFriendForm";
const FriendCreateForm = () => {
  const defaultValues: Friend = {
    id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    birthday: "",
    memo: "",
  };
  const onSubmit = async (data: Friend) => {
    await postFriend(data);
    alert("友達を登録しました");
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

export default FriendCreateForm;

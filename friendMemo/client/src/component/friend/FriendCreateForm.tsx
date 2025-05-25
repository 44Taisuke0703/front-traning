import type { FriendInput } from "../../model/friend";
import { postFriend } from "../../api/friend";
import AbstractFriendForm from "./AbstractFriendForm";
import { useNavigate } from "react-router";
const FriendCreateForm = () => {
  const navigate = useNavigate();
  const defaultValues: FriendInput = {
    name: "",
    email: "",
    phone: "",
    address: "",
    birthday: "",
    memo: "",
  };
  const onSubmit = async (data: FriendInput) => {
    await postFriend(data);
    navigate("/friend", {
      state: { flash: { message: "友達を登録しました", type: "success" } },
    });
  };
  return (
    <>
      <AbstractFriendForm
        title="新規友達登録フォーム"
        defaultValues={defaultValues}
        onSubmit={onSubmit}
      ></AbstractFriendForm>
    </>
  );
};

export default FriendCreateForm;

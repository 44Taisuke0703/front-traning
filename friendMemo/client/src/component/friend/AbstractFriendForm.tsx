import { useForm } from "react-hook-form";
import type { Friend, FriendInput } from "../../model/friend";
import TextInput from "../field/TextInput";
import TextAreaInput from "../field/TextAreaInput";

const AbstractFriendForm = ({
  title,
  defaultValues,
  onSubmit,
}: {
  title: string;
  defaultValues: FriendInput;
  onSubmit: (data: FriendInput) => Promise<void>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Friend>({
    defaultValues: defaultValues,
  });

  return (
    <>
      <div className="row">
        <div className=" offset-1 col-10 offset-lg-3 col-lg-6">
          {" "}
          <div className="card mt-3 shadow">
            <div className="card-body">
              <h4 className="card-title">{title}</h4>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                  register={register}
                  path="name"
                  label="氏名"
                  type="text"
                  placeholder="氏名"
                  config={{ required: "氏名は必須です" }}
                  errors={errors}
                />
                <TextInput
                  register={register}
                  path="email"
                  label="メールアドレス"
                  type="email"
                  placeholder="メールアドレス"
                  config={{ required: "メールアドレスは必須です" }}
                  errors={errors}
                />
                <TextInput
                  register={register}
                  path="phone"
                  label="電話番号"
                  type="phone"
                  placeholder="電話番号"
                  config={{ required: "電話番号は必須です" }}
                  errors={errors}
                />
                <TextInput
                  register={register}
                  path="address"
                  label="住所"
                  type="address"
                  placeholder="住所"
                  config={{ required: "住所は必須です" }}
                  errors={errors}
                />
                <TextInput
                  register={register}
                  path="birthday"
                  label="誕生日"
                  type="date"
                  placeholder="誕生日"
                  config={{ required: "誕生日は必須です" }}
                  errors={errors}
                />

                <TextAreaInput
                  register={register}
                  path="memo"
                  rows={3}
                  label="メモ"
                  placeholder="メモ"
                  config={{ required: " メモは必須です" }}
                  errors={errors}
                />
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-outline-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AbstractFriendForm;

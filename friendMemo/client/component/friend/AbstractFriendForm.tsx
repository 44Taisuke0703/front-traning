import { useForm } from "react-hook-form";
import type { Friend, FriendInput } from "../../model/friend";
import TextInput from "../field/TextInput";

const AbstractFriendForm = ({
  defaultValues,
  onSubmit,
}: {
  defaultValues: FriendInput;
  onSubmit: (data: FriendInput) => Promise<void>;
}) => {
  const { register, handleSubmit } = useForm<Friend>({
    defaultValues: defaultValues,
  });

  return (
    <>
      <div className="row">
        <div className=" offset-1 col-10 offset-lg-3 col-lg-6">
          {" "}
          <div className="card mt-3">
            <div className="card-body">
              <h4 className="card-title">Create Friend</h4>
              <p className="card-text">
                Please fill in the form below to create a new friend.
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                  register={register}
                  path="name"
                  label="氏名"
                  type="text"
                ></TextInput>
                <TextInput
                  register={register}
                  path="email"
                  label="メールアドレス"
                  type="email"
                ></TextInput>
                <TextInput
                  register={register}
                  path="phone"
                  label="電話番号"
                  type="phone"
                />
                <TextInput
                  register={register}
                  path="address"
                  label="住所"
                  type="address"
                ></TextInput>
                <TextInput
                  register={register}
                  path="birthday"
                  label="誕生日"
                  type="date"
                ></TextInput>

                <div className="mb-3">
                  <label htmlFor="memo" className="form-label">
                    Memo
                  </label>
                  <textarea
                    placeholder="メモ"
                    className="form-control"
                    id="memo"
                    rows={3}
                    {...register("memo")}
                  ></textarea>
                </div>
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary">
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

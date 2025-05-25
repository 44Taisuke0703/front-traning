import { useForm } from "react-hook-form";
import type { Friend, FriendInput } from "../../model/friend";
import TextInput from "../field/TextInput";

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
              <p className="card-text">
                Please fill in the form below to create a new friend.
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                  register={register}
                  path="name"
                  label="氏名"
                  type="text"
                  placeholder="氏名"
                  config={{ required: "氏名は必須です" }}
                  errors={errors}
                ></TextInput>
                <TextInput
                  register={register}
                  path="email"
                  label="メールアドレス"
                  type="email"
                  placeholder="メールアドレス"
                  config={{ required: "メールアドレスは必須です" }}
                  errors={errors}
                ></TextInput>
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
                  placeholder="住所は必須です"
                  config={{ required: "住所は必須です" }}
                  errors={errors}
                ></TextInput>
                <TextInput
                  register={register}
                  path="birthday"
                  label="誕生日"
                  type="date"
                  placeholder="誕生日は必須です"
                  config={{ required: "誕生日は必須です" }}
                  errors={errors}
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
                    {...register("memo", { required: "メモは必須です" })}
                  ></textarea>
                  {errors.memo && (
                    <>
                      <div className="text-danger">{errors.memo?.message}</div>
                    </>
                  )}
                </div>
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

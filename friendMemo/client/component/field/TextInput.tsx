import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

type TextInputProps<T extends FieldValues> = {
  path: Path<T>;
  register: UseFormRegister<T>;
  label: string;
  type: string;
};
const TextInput = <T extends FieldValues>({
  path,
  register,
  label,
  type,
}: TextInputProps<T>) => {
  return (
    <div className="mb-3">
      <label htmlFor={path} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        {...register(path)}
        id={path}
      ></input>
    </div>
  );
};
export default TextInput;

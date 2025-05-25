import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

type TextInputProps<T extends FieldValues> = {
  path: Path<T>;
  errors?: FieldErrors<T>;
  register: UseFormRegister<T>;
  label?: string;
  type: string;
  placeholder?: string;
  config?: object;
};
const TextInput = <T extends FieldValues>({
  path,
  errors,
  register,
  label,
  type,
  placeholder,
  config,
}: TextInputProps<T>) => {
  return (
    <div className="mb-3">
      {label && (
        <label htmlFor={path} className="form-label">
          {label}
        </label>
      )}
      <input
        type={type}
        className="form-control"
        {...register(path, { ...config })}
        placeholder={placeholder}
        id={path}
      ></input>
      {errors &&
        errors[path] &&
        typeof errors[path] === "object" &&
        "message" in errors[path] &&
        typeof errors[path]?.message === "string" && (
          <div className="text-danger">{errors[path]?.message as string}</div>
        )}
    </div>
  );
};
export default TextInput;

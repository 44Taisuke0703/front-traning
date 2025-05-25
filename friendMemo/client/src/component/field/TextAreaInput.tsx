import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

type TextAreaProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  path: Path<T>;
  label?: string;
  placeholder?: string;
  errors?: FieldErrors<T>;
  config?: object;
  rows: number;
};

const TextAreaInput = <T extends FieldValues>({
  register,
  path,
  label,
  errors,
  config,
  rows,
}: TextAreaProps<T>) => {
  return (
    <>
      <div className="mb-3">
        {label && (
          <label htmlFor={path} className="form-label">
            {label}
          </label>
        )}

        <textarea
          placeholder="メモ"
          className="form-control"
          id={path}
          rows={rows}
          {...register(path, { ...config })}
        ></textarea>
        {errors &&
          errors[path] &&
          typeof errors[path] === "object" &&
          "message" in errors[path] &&
          typeof errors[path]?.message === "string" && (
            <div className="text-danger">{errors[path]?.message as string}</div>
          )}
      </div>
      ;
    </>
  );
};

export default TextAreaInput;

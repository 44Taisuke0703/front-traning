import { useCallback, useDeferredValue } from "react";
import { useForm, useWatch } from "react-hook-form";
import TextInput from "../component/field/TextInput";

export const useSearchName = () => {
  const { register, control } = useForm<{ name?: string }>({
    defaultValues: {
      name: "",
    },
  });
  const name = useWatch({ control, name: "name" });
  const deferredName = useDeferredValue(name);

  const SearchInput = useCallback(() => {
    return (
      <TextInput
        register={register}
        type="text"
        path="name"
        placeholder="氏名を入力してください"
      ></TextInput>
    );
  }, [register]);

  return { SearchInput, name: deferredName };
};

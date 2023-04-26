import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "components/form-controls/InputField";

const TodoForm = (props) => {
  const schema = yup
    .object({
      title: yup.string().required("Please enter title"),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleOnSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
  };
  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      {/* <input {...register("title")} />
      <p>{errors.title?.message}</p> */}
      <InputField
        name="title"
        label="Todo"
        {...register("title")}
        errors={errors}
        touchedFields={touchedFields}
        control={control}
      />
    </form>
  );
};
export default TodoForm;

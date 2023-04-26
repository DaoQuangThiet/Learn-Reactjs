import { TextField } from "@mui/material";

import React from "react";
import { Controller } from "react-hook-form";

const InputField = React.forwardRef((props, ref) => {
  const { name, label, errors, control } = props;
  const hasError = errors[name];
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            variant="outlined"
            label={label}
            fullWidth
            error={!!hasError}
            helperText={errors[name]?.message}
          />
        )}
      />
    </>
  );
});
export default InputField;

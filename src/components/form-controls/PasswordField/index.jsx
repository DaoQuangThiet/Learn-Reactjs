import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormHelperText } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import React from "react";
import { Controller } from "react-hook-form";

const PasswordField = React.forwardRef((props, ref) => {
  const { name, label, errors, control } = props;
  const hasError = !!errors[name];
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <FormControl error={hasError} fullWidth variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <OutlinedInput
              {...field}
              variant="outlined"
              label={label}
              fullWidth
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          )}
        />
        <FormHelperText>{errors[name]?.message}</FormHelperText>
      </FormControl>
    </>
  );
});
export default PasswordField;

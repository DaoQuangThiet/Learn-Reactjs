import { yupResolver } from "@hookform/resolvers/yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import InputField from "components/form-controls/InputField";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import PasswordField from "./../../../../components/form-controls/PasswordField/index";

const theme = createTheme();
const RegisterForm = (props) => {
  const schema = yup
    .object({
      fullName: yup.string().required("Please enter Full Name"),
      email: yup.string().required("Please enter Email"),
      password: yup.string().required("Please enter Password"),
      retypePassword: yup.string().required("Please enter Retype Password"),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
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
  const handleSubmitnew = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      fullName: data.get("fullName"),
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
              <Box noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <InputField
                      name="fullName"
                      label="Full Name"
                      {...register("fullName")}
                      errors={errors}
                      control={control}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <InputField
                      name="email"
                      label="Email"
                      {...register("email")}
                      errors={errors}
                      control={control}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <PasswordField
                      name="password"
                      label="Password"
                      {...register("password")}
                      errors={errors}
                      control={control}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <PasswordField
                      name="retypePassword"
                      label="Retype Password"
                      {...register("retypePassword")}
                      errors={errors}
                      control={control}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="#" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </form>
          </Box>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
};
export default RegisterForm;

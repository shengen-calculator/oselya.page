import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { connect } from "react-redux";
import { AuthContainer, Card } from "../../shared-theme/authContainer";
import {
  AuthenticationAction,
  authenticationRequest,
} from "../../redux/actions/authenticationActions";
import { useEffect } from "react";

interface LogInPageProps {
  auth: AuthenticationState;
  authenticationRequest: (
    params: AuthenticationParams,
  ) => AuthenticationAction | undefined;
}

const LogIn: React.FC<LogInPageProps> = ({ auth, authenticationRequest }) => {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState("");

  useEffect(() => {
    if (auth.error) {
      setEmailError(true);
      setEmailErrorMessage("Вказана адреса не авторизована адміністрацією");
    }
  }, [auth.error]);

  useEffect(() => {
    setEmailError(false);
    setEmailErrorMessage("");
  }, []);

  const validateInputs = (): boolean => {
    const email = document.getElementById("email") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;
    const name = document.getElementById("name") as HTMLInputElement;

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Будь-ласка введіть коректну емейл адресу.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Пароль повинен містити мінімум 6 символів.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    if (!name.value || name.value.length < 1) {
      setNameError(true);
      setNameErrorMessage("Name is required.");
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage("");
    }

    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (nameError || emailError || passwordError) {
      return;
    }
    const data = new FormData(event.currentTarget);
    authenticationRequest({
      email: data.get("email") as string,
      company: data.get("name") as string,
      password: data.get("password") as string,
    });
  };

  return (
    <AuthContainer direction="column" justifyContent="space-between">
      <Card variant="outlined">
        <Typography
          component="h1"
          variant="h4"
          sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
        >
          Вхід
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <FormControl>
            <FormLabel htmlFor="email">Емейл</FormLabel>
            <TextField
              required
              fullWidth
              id="email"
              placeholder="your@email.com"
              name="email"
              autoComplete="email"
              variant="outlined"
              error={emailError}
              helperText={emailErrorMessage}
              color={passwordError ? "error" : "primary"}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="name">Назва об'єднання</FormLabel>
            <TextField
              autoComplete="name"
              name="name"
              required
              fullWidth
              id="name"
              placeholder="Сакура"
              error={nameError}
              helperText={nameErrorMessage}
              color={nameError ? "error" : "primary"}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Пароль</FormLabel>
            <TextField
              required
              fullWidth
              name="password"
              placeholder="••••••"
              type="password"
              id="password"
              autoComplete="new-password"
              variant="outlined"
              error={passwordError}
              helperText={passwordErrorMessage}
              color={passwordError ? "error" : "primary"}
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={validateInputs}
          >
            Увійти
          </Button>
        </Box>
        <Divider>
          <Typography sx={{ color: "text.secondary" }}>або</Typography>
        </Divider>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography sx={{ textAlign: "center" }}>
            Не зареєстровані?{" "}
            <Link
              component={RouterLink}
              to="/register"
              variant="body2"
              sx={{ alignSelf: "center" }}
            >
              Зареєструватись
            </Link>
          </Typography>
        </Box>
      </Card>
    </AuthContainer>
  );
};

const mapStateToProps = (state: ApplicationState) => {
  return {
    auth: state.authentication,
  };
};

// noinspection JSUnusedGlobalSymbols
const mapDispatchToProps = {
  authenticationRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);

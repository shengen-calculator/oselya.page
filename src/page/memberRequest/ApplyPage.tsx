import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import AddressForm from "./AddressForm";
import Info from "./Info";
import InfoMobile from "./InfoMobile";
import InformationForm from "./InformationForm";
import Review from "./Review";
import { connect } from "react-redux";
import {
  CreateMemberRequestAction,
  createMemberRequestRequest,
} from "../../redux/actions/memberRequestAction";
import { useEffect } from "react";

const steps = ["Контактні дані", "Загальна інформація", "Перегляд"];

interface ApplicationProps {
  step: number;
  memberRequest: MemberRequest;
  memberRequestError: MemberRequestError;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const getStepContent: React.FC<ApplicationProps> = ({
  step,
  memberRequest,
  memberRequestError,
  onChange,
}) => {
  switch (step) {
    case 0:
      return (
        <AddressForm
          memberRequest={memberRequest}
          memberRequestError={memberRequestError}
          onChange={onChange}
        />
      );
    case 1:
      return (
        <InformationForm
          memberRequest={memberRequest}
          memberRequestError={memberRequestError}
          onChange={onChange}
        />
      );
    case 2:
      return <Review memberRequest={memberRequest} />;
    default:
      throw new Error("Unknown step");
  }
};

interface ApplyPageProps {
  request: MemberRequestState;
  createMemberRequestRequest: (
    params: MemberRequestParams,
  ) => CreateMemberRequestAction | undefined;
}

const ApplyPage: React.FC<ApplyPageProps> = ({
  request,
  createMemberRequestRequest,
}) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [memberRequest, setMemberRequest] = React.useState<MemberRequest>({
    email: "",
    firstName: "",
    lastName: "",
    city: "",
    address: "",
    phone: "",
    company: "",
    quantity: "",
    messenger: "",
  });

  const [memberRequestError, setMemberRequestError] =
    React.useState<MemberRequestError>({
      emailError: false,
      emailErrorMessage: "",
      firstNameError: false,
      firstNameErrorMessage: "",
      lastNameError: false,
      lastNameErrorMessage: "",
      cityError: false,
      cityErrorMessage: "",
      addressError: false,
      addressErrorMessage: "",
      phoneError: false,
      phoneErrorMessage: "",
      companyError: false,
      companyErrorMessage: "",
      quantityError: false,
      quantityErrorMessage: "",
      messengerError: false,
      messengerErrorMessage: "",
    });

  useEffect(() => {
    if (request.saved && activeStep === 2) {
      setActiveStep(activeStep + 1);
    }
  }, [request.saved]);

  const handleNext = () => {
    if (activeStep === 0 && validateAddress()) {
      setActiveStep(activeStep + 1);
    }

    if (activeStep === 1 && validateInfo()) {
      setActiveStep(activeStep + 1);
    }

    if (activeStep === 2) {
      submitMemberRequest();
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMemberRequest((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateAddress = (): boolean => {
    let isValid = true;
    let errors: MemberRequestError = {
      emailError: false,
      emailErrorMessage: "",
      firstNameError: false,
      firstNameErrorMessage: "",
      lastNameError: false,
      lastNameErrorMessage: "",
      cityError: false,
      cityErrorMessage: "",
      addressError: false,
      addressErrorMessage: "",
      phoneError: false,
      phoneErrorMessage: "",
      companyError: false,
      companyErrorMessage: "",
      quantityError: false,
      quantityErrorMessage: "",
      messengerError: false,
      messengerErrorMessage: "",
    };

    if (!memberRequest.email || !/\S+@\S+\.\S+/.test(memberRequest.email)) {
      errors.emailError = true;
      errors.emailErrorMessage = "Не коректний формат електронної адреси.";
      isValid = false;
    }

    if (!memberRequest.firstName || memberRequest.firstName.length < 2) {
      errors.firstNameError = true;
      errors.firstNameErrorMessage = "Вкажіть Ваше Ім'я.";
      isValid = false;
    }

    if (!memberRequest.lastName || memberRequest.lastName.length < 2) {
      errors.lastNameError = true;
      errors.lastNameErrorMessage = "Вкажіть Ваше Прізвище.";
      isValid = false;
    }

    if (!memberRequest.city || memberRequest.city.length < 4) {
      errors.cityError = true;
      errors.cityErrorMessage = "Вкажіть назву міста (населенго пункту).";
      isValid = false;
    }

    if (!memberRequest.address || memberRequest.address.length < 10) {
      errors.addressError = true;
      errors.addressErrorMessage = "Вкажіть адресу.";
      isValid = false;
    }

    if (!memberRequest.phone || memberRequest.phone.length < 10) {
      errors.phoneError = true;
      errors.phoneErrorMessage = "Вкажіть номер телефону.";
      isValid = false;
    }
    setMemberRequestError(errors);
    return isValid;
  };

  const validateInfo = (): boolean => {
    let isValid = true;
    let errors: MemberRequestError = {
      emailError: false,
      emailErrorMessage: "",
      firstNameError: false,
      firstNameErrorMessage: "",
      lastNameError: false,
      lastNameErrorMessage: "",
      cityError: false,
      cityErrorMessage: "",
      addressError: false,
      addressErrorMessage: "",
      phoneError: false,
      phoneErrorMessage: "",
      companyError: false,
      companyErrorMessage: "",
      quantityError: false,
      quantityErrorMessage: "",
      messengerError: false,
      messengerErrorMessage: "",
    };

    if (!memberRequest.company || memberRequest.company.length < 2) {
      errors.companyError = true;
      errors.companyErrorMessage = "Вкажіть назву об'єднання.";
      isValid = false;
    }

    if (!memberRequest.quantity || !Number(memberRequest.quantity)) {
      errors.quantityError = true;
      errors.quantityErrorMessage = "Вкажіть кількість об'єктів на утриманні.";
      isValid = false;
    }

    if (!memberRequest.messenger || memberRequest.messenger.length < 2) {
      errors.messengerError = true;
      errors.messengerErrorMessage = "Вкажіть назву месенджера.";
      isValid = false;
    }
    setMemberRequestError(errors);
    return isValid;
  };

  const submitMemberRequest = (): void => {
    createMemberRequestRequest(memberRequest);
  };

  return (
    <React.Fragment>
      <Grid
        container
        sx={{
          height: {
            xs: "100%",
            sm: "calc(100dvh - var(--template-frame-height, 0px))",
          },
          mt: {
            xs: 4,
            sm: 0,
          },
        }}
      >
        <Grid
          size={{ xs: 12, sm: 5, lg: 4 }}
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            backgroundColor: "background.paper",
            borderRight: { sm: "none", md: "1px solid" },
            borderColor: { sm: "none", md: "divider" },
            alignItems: "start",
            pt: 16,
            px: 10,
            gap: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              width: "100%",
              maxWidth: 500,
            }}
          >
            <Info totalPrice={activeStep >= 2 ? "$144.97" : "$134.98"} />
          </Box>
        </Grid>
        <Grid
          size={{ sm: 12, md: 7, lg: 8 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "100%",
            width: "100%",
            backgroundColor: { xs: "transparent", sm: "background.default" },
            alignItems: "start",
            pt: { xs: 0, sm: 16 },
            px: { xs: 2, sm: 10 },
            gap: { xs: 4, md: 8 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: { sm: "space-between", md: "flex-end" },
              alignItems: "center",
              width: "100%",
              maxWidth: { sm: "100%", md: 600 },
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexGrow: 1,
              }}
            >
              <Stepper
                id="desktop-stepper"
                activeStep={activeStep}
                sx={{ width: "100%", height: 40 }}
              >
                {steps.map((label) => (
                  <Step
                    sx={{ ":first-child": { pl: 0 }, ":last-child": { pr: 0 } }}
                    key={label}
                  >
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Box>
          <Card sx={{ display: { xs: "flex", md: "none" }, width: "100%" }}>
            <CardContent
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Typography variant="subtitle2" gutterBottom>
                  Selected products
                </Typography>
                <Typography variant="body1">
                  {activeStep >= 2 ? "$144.97" : "$134.98"}
                </Typography>
              </div>
              <InfoMobile
                totalPrice={activeStep >= 2 ? "$144.97" : "$134.98"}
              />
            </CardContent>
          </Card>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              width: "100%",
              maxWidth: { sm: "100%", md: 600 },
              maxHeight: "720px",
              gap: { xs: 5, md: "none" },
            }}
          >
            <Stepper
              id="mobile-stepper"
              activeStep={activeStep}
              alternativeLabel
              sx={{ display: { sm: "flex", md: "none" } }}
            >
              {steps.map((label) => (
                <Step
                  sx={{
                    ":first-child": { pl: 0 },
                    ":last-child": { pr: 0 },
                    "& .MuiStepConnector-root": { top: { xs: 6, sm: 12 } },
                  }}
                  key={label}
                >
                  <StepLabel
                    sx={{
                      ".MuiStepLabel-labelContainer": { maxWidth: "70px" },
                    }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <Stack spacing={2} useFlexGap>
                <Typography variant="h5">Дякуємо за Ваше звернення!</Typography>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  Вашу Заявку зареєстровано та передено на розгляд відповідному
                  працівнику, який найближчим часом з Вами зв'яжеться.
                </Typography>
                <Button
                  component={RouterLink}
                  to="/"
                  variant="contained"
                  sx={{ alignSelf: "start", width: { xs: "100%", sm: "auto" } }}
                >
                  До головної
                </Button>
              </Stack>
            ) : (
              <React.Fragment>
                {getStepContent({
                  step: activeStep,
                  memberRequest: memberRequest,
                  memberRequestError: memberRequestError,
                  onChange: handleChange,
                })}
                <Box
                  sx={[
                    {
                      display: "flex",
                      flexDirection: { xs: "column-reverse", sm: "row" },
                      alignItems: "end",
                      flexGrow: 1,
                      gap: 1,
                      pb: { xs: 12, sm: 0 },
                      mt: { xs: 2, sm: 0 },
                      mb: "60px",
                    },
                    activeStep !== 0
                      ? { justifyContent: "space-between" }
                      : { justifyContent: "flex-end" },
                  ]}
                >
                  {activeStep !== 0 && (
                    <Button
                      startIcon={<ChevronLeftRoundedIcon />}
                      onClick={handleBack}
                      variant="text"
                      sx={{ display: { xs: "none", sm: "flex" } }}
                    >
                      Попередня
                    </Button>
                  )}
                  {activeStep !== 0 && (
                    <Button
                      startIcon={<ChevronLeftRoundedIcon />}
                      onClick={handleBack}
                      variant="outlined"
                      fullWidth
                      sx={{ display: { xs: "flex", sm: "none" } }}
                    >
                      Попередня
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    endIcon={<ChevronRightRoundedIcon />}
                    onClick={handleNext}
                    disabled={request.saving}
                    sx={{ width: { xs: "100%", sm: "fit-content" } }}
                  >
                    {activeStep === steps.length - 1
                      ? "Подати заявку"
                      : "Наступна"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const mapStateToProps = (state: ApplicationState) => {
  return {
    request: state.memberRequest,
  };
};

// noinspection JSUnusedGlobalSymbols
const mapDispatchToProps = {
  createMemberRequestRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplyPage);

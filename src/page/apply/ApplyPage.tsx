import * as React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import AddressForm from './AddressForm';
import Info from './Info';
import InfoMobile from './InfoMobile';
import InformationForm from './InformationForm';
import Review from './Review';
import {authenticationRequest} from "../../redux/actions/authenticationActions";
import {connect} from "react-redux";

const steps = ['Контактні дані', 'Загальна інформація', 'Перегляд'];

interface ApplicationProps {
    step: number,
    emailError: boolean,
    emailErrorMessage: string,
    firstNameError: boolean,
    firstNameErrorMessage: string,
    lastNameError: boolean,
    lastNameErrorMessage: string,
    cityError: boolean,
    cityErrorMessage: string,
    addressError: boolean,
    addressErrorMessage: string,
    phoneError: boolean,
    phoneErrorMessage: string
}

const getStepContent = ({
                            step,
                            emailError,
                            emailErrorMessage,
                            firstNameError,
                            firstNameErrorMessage,
                            lastNameError,
                            lastNameErrorMessage,
                            cityError,
                            cityErrorMessage,
                            addressError,
                            addressErrorMessage,
                            phoneError,
                            phoneErrorMessage
                        }: ApplicationProps) => {
    switch (step) {
        case 0:
            return <AddressForm
                emailError={emailError}
                emailErrorMessage={emailErrorMessage}
                firstNameError={firstNameError}
                firstNameErrorMessage={firstNameErrorMessage}
                lastNameError={lastNameError}
                lastNameErrorMessage={lastNameErrorMessage}
                cityError={cityError}
                cityErrorMessage={cityErrorMessage}
                addressError={addressError}
                addressErrorMessage={addressErrorMessage}
                phoneError={phoneError}
                phoneErrorMessage={phoneErrorMessage}
            />;
        case 1:
            return <InformationForm/>;
        case 2:
            return <Review/>;
        default:
            throw new Error('Unknown step');
    }
}

const ApplyPage = (props: { disableCustomTheme?: boolean }) => {
    const [activeStep, setActiveStep] = React.useState(0);

    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [firstNameError, setFirstNameError] = React.useState(false);
    const [firstNameErrorMessage, setFirstNameErrorMessage] = React.useState('');
    const [lastNameError, setLastNameError] = React.useState(false);
    const [lastNameErrorMessage, setLastNameErrorMessage] = React.useState('');
    const [cityError, setCityError] = React.useState(false);
    const [cityErrorMessage, setCityErrorMessage] = React.useState('');
    const [addressError, setAddressError] = React.useState(false);
    const [addressErrorMessage, setAddressErrorMessage] = React.useState('');
    const [phoneError, setPhoneError] = React.useState(false);
    const [phoneErrorMessage, setPhoneErrorMessage] = React.useState('');

    const handleNext = () => {
        if (validateAddress()) {
            setActiveStep(activeStep + 1);
        }

    };
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    const validateAddress = () => {
        const email = document.getElementById('email') as HTMLInputElement;
        console.log(`email => ${email.value}`);

        setEmailError(true);
        setEmailErrorMessage('Не коректний формат електронної адреси')
        return false;

    };
    const validateInfo = () => {

    };
    const submitApplication = () => {

    }

    return (
        <React.Fragment>
            <Grid
                container
                sx={{
                    height: {
                        xs: '100%',
                        sm: 'calc(100dvh - var(--template-frame-height, 0px))',
                    },
                    mt: {
                        xs: 4,
                        sm: 0,
                    },
                }}
            >
                <Grid
                    size={{xs: 12, sm: 5, lg: 4}}
                    sx={{
                        display: {xs: 'none', md: 'flex'},
                        flexDirection: 'column',
                        backgroundColor: 'background.paper',
                        borderRight: {sm: 'none', md: '1px solid'},
                        borderColor: {sm: 'none', md: 'divider'},
                        alignItems: 'start',
                        pt: 16,
                        px: 10,
                        gap: 4,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexGrow: 1,
                            width: '100%',
                            maxWidth: 500,
                        }}
                    >
                        <Info totalPrice={activeStep >= 2 ? '$144.97' : '$134.98'}/>
                    </Box>
                </Grid>
                <Grid
                    size={{sm: 12, md: 7, lg: 8}}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: '100%',
                        width: '100%',
                        backgroundColor: {xs: 'transparent', sm: 'background.default'},
                        alignItems: 'start',
                        pt: {xs: 0, sm: 16},
                        px: {xs: 2, sm: 10},
                        gap: {xs: 4, md: 8},
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: {sm: 'space-between', md: 'flex-end'},
                            alignItems: 'center',
                            width: '100%',
                            maxWidth: {sm: '100%', md: 600},
                        }}
                    >
                        <Box
                            sx={{
                                display: {xs: 'none', md: 'flex'},
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end',
                                flexGrow: 1,
                            }}
                        >
                            <Stepper
                                id="desktop-stepper"
                                activeStep={activeStep}
                                sx={{width: '100%', height: 40}}
                            >
                                {steps.map((label) => (
                                    <Step
                                        sx={{':first-child': {pl: 0}, ':last-child': {pr: 0}}}
                                        key={label}
                                    >
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                    </Box>
                    <Card sx={{display: {xs: 'flex', md: 'none'}, width: '100%'}}>
                        <CardContent
                            sx={{
                                display: 'flex',
                                width: '100%',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <div>
                                <Typography variant="subtitle2" gutterBottom>
                                    Selected products
                                </Typography>
                                <Typography variant="body1">
                                    {activeStep >= 2 ? '$144.97' : '$134.98'}
                                </Typography>
                            </div>
                            <InfoMobile totalPrice={activeStep >= 2 ? '$144.97' : '$134.98'}/>
                        </CardContent>
                    </Card>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexGrow: 1,
                            width: '100%',
                            maxWidth: {sm: '100%', md: 600},
                            maxHeight: '720px',
                            gap: {xs: 5, md: 'none'},
                        }}
                    >
                        <Stepper
                            id="mobile-stepper"
                            activeStep={activeStep}
                            alternativeLabel
                            sx={{display: {sm: 'flex', md: 'none'}}}
                        >
                            {steps.map((label) => (
                                <Step
                                    sx={{
                                        ':first-child': {pl: 0},
                                        ':last-child': {pr: 0},
                                        '& .MuiStepConnector-root': {top: {xs: 6, sm: 12}},
                                    }}
                                    key={label}
                                >
                                    <StepLabel
                                        sx={{'.MuiStepLabel-labelContainer': {maxWidth: '70px'}}}
                                    >
                                        {label}
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length ? (
                            <Stack spacing={2} useFlexGap>
                                <Typography variant="h5">Дякуємо за Ваше звернення!</Typography>
                                <Typography variant="body1" sx={{color: 'text.secondary'}}>
                                    Вашу Заявку зареєстровано та передено на розгляд відповідному
                                    працівнику, який найближчим часом з Вами зв'яжеться.
                                </Typography>
                                <Button component={RouterLink}
                                        to="/"
                                        variant="contained"
                                        sx={{alignSelf: 'start', width: {xs: '100%', sm: 'auto'}}}
                                >
                                    До головної
                                </Button>
                            </Stack>
                        ) : (
                            <React.Fragment>
                                {getStepContent({
                                    step: activeStep,
                                    emailError,
                                    emailErrorMessage,
                                    firstNameError,
                                    firstNameErrorMessage,
                                    lastNameError,
                                    lastNameErrorMessage,
                                    cityError,
                                    cityErrorMessage,
                                    addressError,
                                    addressErrorMessage,
                                    phoneError,
                                    phoneErrorMessage
                                })}
                                <Box
                                    sx={[
                                        {
                                            display: 'flex',
                                            flexDirection: {xs: 'column-reverse', sm: 'row'},
                                            alignItems: 'end',
                                            flexGrow: 1,
                                            gap: 1,
                                            pb: {xs: 12, sm: 0},
                                            mt: {xs: 2, sm: 0},
                                            mb: '60px',
                                        },
                                        activeStep !== 0
                                            ? {justifyContent: 'space-between'}
                                            : {justifyContent: 'flex-end'},
                                    ]}
                                >
                                    {activeStep !== 0 && (
                                        <Button
                                            startIcon={<ChevronLeftRoundedIcon/>}
                                            onClick={handleBack}
                                            variant="text"
                                            sx={{display: {xs: 'none', sm: 'flex'}}}
                                        >
                                            Попередня
                                        </Button>
                                    )}
                                    {activeStep !== 0 && (
                                        <Button
                                            startIcon={<ChevronLeftRoundedIcon/>}
                                            onClick={handleBack}
                                            variant="outlined"
                                            fullWidth
                                            sx={{display: {xs: 'flex', sm: 'none'}}}
                                        >
                                            Попередня
                                        </Button>
                                    )}
                                    <Button
                                        variant="contained"
                                        endIcon={<ChevronRightRoundedIcon/>}
                                        onClick={handleNext}
                                        sx={{width: {xs: '100%', sm: 'fit-content'}}}
                                    >
                                        {activeStep === steps.length - 1 ? 'Подати заявку' : 'Наступна'}
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
        auth: state.authentication,
    }
};

// noinspection JSUnusedGlobalSymbols
const mapDispatchToProps = {
    authenticationRequest
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ApplyPage);
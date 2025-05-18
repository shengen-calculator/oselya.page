import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import {styled} from '@mui/material/styles';
import TextField from "@mui/material/TextField";

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

interface AddressFormProps {
    emailError: boolean
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

export default function AddressForm({
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
                                    }: AddressFormProps) {
    return (
        <Grid container spacing={3}>
            <FormGrid size={{xs: 12, md: 6}}>
                <FormLabel htmlFor="first-name" required>
                    Ім'я
                </FormLabel>
                <TextField
                    id="first-name"
                    name="first-name"
                    type="name"
                    placeholder="Дарина"
                    autoComplete="Ім'я"
                    required
                    size="small"
                    error={firstNameError}
                    helperText={firstNameErrorMessage}
                    color={firstNameError ? 'error' : 'primary'}
                />
            </FormGrid>
            <FormGrid size={{xs: 12, md: 6}}>
                <FormLabel htmlFor="last-name" required>
                    Прізвище
                </FormLabel>
                <TextField
                    id="last-name"
                    name="last-name"
                    type="last-name"
                    placeholder="Степаненко"
                    autoComplete="Прізвище"
                    required
                    size="small"
                    error={lastNameError}
                    helperText={lastNameErrorMessage}
                    color={lastNameError ? 'error' : 'primary'}
                />
            </FormGrid>
            <FormGrid size={{xs: 12}}>
                <FormLabel htmlFor="city" required>
                    Місто
                </FormLabel>
                <TextField
                    id="city"
                    name="city"
                    type="city"
                    placeholder="Київ"
                    autoComplete="city"
                    required
                    size="small"
                    error={cityError}
                    helperText={cityErrorMessage}
                    color={cityError ? 'error' : 'primary'}
                />
            </FormGrid>
            <FormGrid size={{xs: 12}}>
                <FormLabel htmlFor="address" required>
                    Адреса об'єднання
                </FormLabel>
                <TextField
                    id="address"
                    name="address"
                    type="address"
                    placeholder="Вулиця, Номер будинку"
                    autoComplete="shipping address"
                    required
                    size="small"
                    error={addressError}
                    helperText={addressErrorMessage}
                    color={addressError ? 'error' : 'primary'}
                />
            </FormGrid>
            <FormGrid size={{xs: 6}}>
                <FormLabel htmlFor="phone" required>
                    Телефон
                </FormLabel>
                <TextField
                    id="phone"
                    name="phone"
                    type="phone"
                    placeholder="+380501232323"
                    autoComplete="Телефон"
                    required
                    size="small"
                    error={phoneError}
                    helperText={phoneErrorMessage}
                    color={phoneError ? 'error' : 'primary'}
                />
            </FormGrid>
            <FormGrid size={{xs: 6}}>
                <FormLabel htmlFor="email" required>
                    Е-мейл
                </FormLabel>
                <TextField
                    id="email"
                    name="email"
                    type="email"
                    placeholder="daryna@gmail.com"
                    autoComplete="email"
                    required
                    size="small"
                    error={emailError}
                    helperText={emailErrorMessage}
                    color={emailError ? 'error' : 'primary'}
                />
            </FormGrid>
        </Grid>
    );
}

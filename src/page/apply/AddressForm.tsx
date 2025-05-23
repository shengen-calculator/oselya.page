import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import {styled} from '@mui/material/styles';
import TextInput from "../../component/TextInput";


const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

interface AddressFormProps {
    application: Application,
    applicationError: ApplicationError,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function AddressForm({
                                        application,
                                        applicationError,
                                        onChange
                                    }: AddressFormProps) {
    return (
        <Grid container spacing={3}>
            <FormGrid size={{xs: 12, md: 6}}>
                <FormLabel htmlFor="firstName" required>
                    Ім'я
                </FormLabel>
                <TextInput
                    id="firstName"
                    placeholder="Дарина"
                    autoComplete="Ім'я"
                    error={applicationError.firstNameError}
                    errorMessage={applicationError.firstNameErrorMessage}
                    value={application.firstName}
                    onChange={onChange}
                />
            </FormGrid>
            <FormGrid size={{xs: 12, md: 6}}>
                <FormLabel htmlFor="lastName" required>
                    Прізвище
                </FormLabel>
                <TextInput
                    id="lastName"
                    placeholder="Степаненко"
                    autoComplete="Прізвище"
                    error={applicationError.lastNameError}
                    errorMessage={applicationError.lastNameErrorMessage}
                    value={application.lastName}
                    onChange={onChange}
                />
            </FormGrid>
            <FormGrid size={{xs: 12}}>
                <FormLabel htmlFor="city" required>
                    Місто
                </FormLabel>
                <TextInput
                    id="city"
                    placeholder="Київ"
                    autoComplete="city"
                    error={applicationError.cityError}
                    errorMessage={applicationError.cityErrorMessage}
                    value={application.city}
                    onChange={onChange}
                />
            </FormGrid>
            <FormGrid size={{xs: 12}}>
                <FormLabel htmlFor="address" required>
                    Адреса об'єднання
                </FormLabel>
                <TextInput
                    id="address"
                    placeholder="Вулиця, Номер будинку"
                    autoComplete="shipping address"
                    error={applicationError.addressError}
                    errorMessage={applicationError.addressErrorMessage}
                    value={application.address}
                    onChange={onChange}
                />
            </FormGrid>
            <FormGrid size={{xs: 6}}>
                <FormLabel htmlFor="phone" required>
                    Телефон
                </FormLabel>
                <TextInput
                    id="phone"
                    placeholder="+380501232323"
                    autoComplete="Телефон"
                    error={applicationError.phoneError}
                    errorMessage={applicationError.phoneErrorMessage}
                    value={application.phone}
                    onChange={onChange}
                />
            </FormGrid>
            <FormGrid size={{xs: 6}}>
                <FormLabel htmlFor="email" required>
                    Е-мейл
                </FormLabel>
                <TextInput
                    id="email"
                    placeholder="daryna@gmail.com"
                    autoComplete="email"
                    error={applicationError.emailError}
                    errorMessage={applicationError.emailErrorMessage}
                    value={application.email}
                    onChange={onChange}
                />
            </FormGrid>
        </Grid>
    );
}

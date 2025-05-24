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
    memberRequest: MemberRequest,
    memberRequestError: MemberRequestError,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function AddressForm({
                                        memberRequest,
                                        memberRequestError,
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
                    error={memberRequestError.firstNameError}
                    errorMessage={memberRequestError.firstNameErrorMessage}
                    value={memberRequest.firstName}
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
                    error={memberRequestError.lastNameError}
                    errorMessage={memberRequestError.lastNameErrorMessage}
                    value={memberRequest.lastName}
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
                    error={memberRequestError.cityError}
                    errorMessage={memberRequestError.cityErrorMessage}
                    value={memberRequest.city}
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
                    error={memberRequestError.addressError}
                    errorMessage={memberRequestError.addressErrorMessage}
                    value={memberRequest.address}
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
                    error={memberRequestError.phoneError}
                    errorMessage={memberRequestError.phoneErrorMessage}
                    value={memberRequest.phone}
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
                    error={memberRequestError.emailError}
                    errorMessage={memberRequestError.emailErrorMessage}
                    value={memberRequest.email}
                    onChange={onChange}
                />
            </FormGrid>
        </Grid>
    );
}

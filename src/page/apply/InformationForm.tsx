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
    companyError: boolean
    companyErrorMessage: string,
    quantityError: boolean,
    quantityErrorMessage: string,
    messengerError: boolean,
    messengerErrorMessage: string,
}

export default function InformationForm() {
    return (
        <Grid container spacing={3}>
            <FormGrid size={{xs: 12, md: 6}}>
                <FormLabel htmlFor="name" required>
                    Назва об'єднання
                </FormLabel>
                <TextField
                    id="name"
                    name="name"
                    type="name"
                    placeholder="Добрий Господар"
                    autoComplete="Назва"
                    required
                    size="small"
                />
            </FormGrid>
            <FormGrid size={{xs: 12, md: 6}}>
                <FormLabel htmlFor="quantity" required>
                    Кількість об'єктів (квартир) на утриманні
                </FormLabel>
                <TextField
                    id="quantity"
                    name="quantity"
                    type="quantity"
                    placeholder="120"
                    autoComplete="Кількість"
                    required
                    size="small"
                />
            </FormGrid>
            <FormGrid size={{xs: 12}}>
                <FormLabel htmlFor="messenger" required>
                    Бажаний месенджер
                </FormLabel>
                <TextField
                    id="messenger"
                    name="messenger"
                    type="messenger"
                    placeholder="Вайбер / Телеграм"
                    autoComplete="Месенджер"
                    required
                    size="small"
                />
            </FormGrid>
        </Grid>
    );
}

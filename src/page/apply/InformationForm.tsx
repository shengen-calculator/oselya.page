import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import {styled} from '@mui/material/styles';
import TextInput from "../../component/TextInput";

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

interface InformationFormProps {
    application: Application,
    applicationError: ApplicationError,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InformationForm({
                                            application,
                                            applicationError,
                                            onChange
                                        }: InformationFormProps) {

    return (
        <Grid container spacing={3}>
            <FormGrid size={{xs: 12, md: 6}}>
                <FormLabel htmlFor="company" required>
                    Назва об'єднання
                </FormLabel>
                <TextInput
                    id="company"
                    placeholder="Добрий Господар"
                    autoComplete="Назва"
                    error={applicationError.companyError}
                    errorMessage={applicationError.companyErrorMessage}
                    value={application.company}
                    onChange={onChange}
                />
            </FormGrid>
            <FormGrid size={{xs: 12, md: 6}}>
                <FormLabel htmlFor="quantity" required>
                    Кількість об'єктів (квартир) на утриманні
                </FormLabel>
                <TextInput
                    id="quantity"
                    placeholder="120"
                    autoComplete="Кількість"
                    error={applicationError.quantityError}
                    errorMessage={applicationError.quantityErrorMessage}
                    value={application.quantity}
                    onChange={onChange}
                />
            </FormGrid>
            <FormGrid size={{xs: 12}}>
                <FormLabel htmlFor="messenger" required>
                    Бажаний месенджер
                </FormLabel>
                <TextInput
                    id="messenger"
                    placeholder="Вайбер / Телеграм"
                    autoComplete="Месенджер"
                    error={applicationError.messengerError}
                    errorMessage={applicationError.messengerErrorMessage}
                    value={application.messenger}
                    onChange={onChange}
                />
            </FormGrid>
        </Grid>
    );
}

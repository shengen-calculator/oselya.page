import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function AddressForm() {
  return (
    <Grid container spacing={3}>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="first-name" required>
          Ім'я
        </FormLabel>
        <OutlinedInput
          id="first-name"
          name="first-name"
          type="name"
          placeholder="Дарина"
          autoComplete="Ім'я"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="last-name" required>
          Прізвище
        </FormLabel>
        <OutlinedInput
          id="last-name"
          name="last-name"
          type="last-name"
          placeholder="Степаненко"
          autoComplete="Прізвище"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="address" required>
          Адреса об'єднання
        </FormLabel>
        <OutlinedInput
          id="address"
          name="address"
          type="address"
          placeholder="Область, Місто, Вулиця, Номер будинку"
          autoComplete="shipping address"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="phone" required>
          Телефон
        </FormLabel>
        <OutlinedInput
          id="phone"
          name="phone"
          type="phone"
          placeholder="+380501232323"
          autoComplete="Телефон"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="email" required>
          Е-мейл
        </FormLabel>
        <OutlinedInput
          id="email"
          name="email"
          type="email"
          placeholder="daryna@gmail.com"
          autoComplete="email"
          required
          size="small"
        />
      </FormGrid>
    </Grid>
  );
}

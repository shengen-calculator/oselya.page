import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function SurveyForm() {
  return (
    <Grid container spacing={3}>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="name" required>
          Назва об'єднання
        </FormLabel>
        <OutlinedInput
          id="name"
          name="name"
          type="name"
          placeholder="Добрий Господар"
          autoComplete="Назва"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="quantity" required>
          Кількість об'єктів (квартир) на утриманні
        </FormLabel>
        <OutlinedInput
          id="quantity"
          name="quantity"
          type="quantity"
          placeholder="120"
          autoComplete="Кількість"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="messenger" required>
          Бажаний месенджер
        </FormLabel>
        <OutlinedInput
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

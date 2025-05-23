import * as React from 'react';
import {TextField} from "@mui/material";

interface TextInputProps {
    placeholder: string;
    id: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: "text" | "password";
    autoFocus?: boolean;
    autoComplete?: string;
    value?: string;
    error: boolean;
    errorMessage: string
}
const TextInput = (
    {
        id,
        placeholder,
        type = 'text',
        autoFocus = false,
        autoComplete = id,
        value = '',
        onChange,
        error = false,
        errorMessage = ''
    } : TextInputProps
) => {
    return (
        <TextField
            id={id}
            name={id}
            type={type}
            required
            placeholder={placeholder}
            onChange={onChange}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            value={value}
            size="small"
            error={error}
            helperText={errorMessage}
            color={error ? 'error' : 'primary'}
        />
    )
};

export default TextInput;

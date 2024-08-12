import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';

interface IProps {
    name:string,
    label: string,
    placeholder: string,
    helperText?: string
    fullWidth:boolean
}

export default function CustInput({
    name,
    label,
    placeholder,
    helperText,
    fullWidth
}: IProps) {
    return <FormControl sx={{width:'100%'}}>
        <FormLabel>{label}</FormLabel>
        <Input fullWidth={fullWidth} name={name} placeholder={placeholder} />
        <FormHelperText>{helperText}</FormHelperText>
    </FormControl>

}
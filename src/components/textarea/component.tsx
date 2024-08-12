import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Textarea from '@mui/joy/Textarea';

interface IProps {
    name: string,
    label: string,
    placeholder: string,
    helperText?: string,
    minRows?: number,
    endDecoration?: JSX.Element
}

export default function CustTextarea({
    name,
    label,
    placeholder,
    helperText,
    minRows,
    endDecoration
}: IProps) {
    return (
        <FormControl sx={{ width: "100%" }}>
            <FormLabel>{label}</FormLabel>
            <Textarea
                name={name}
                placeholder={placeholder}
                minRows={minRows}
                endDecorator={endDecoration}
            />
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
    );
}
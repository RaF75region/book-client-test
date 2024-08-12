import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import Slide from "@mui/material/Slide";
import CloseIcon from '@mui/icons-material/Close';
import CustInput from "../../../components/input/component";
import CustTextarea from "../../../components/textarea/component";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Dispatch, SetStateAction } from "react";

interface IProps{
    checked:boolean,
    setChecked: Dispatch<SetStateAction<boolean>>,
    handlerAddService:()=>void
}


export default function SlideMenu({
    checked,
    setChecked,
    handlerAddService
}:IProps){
    return <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
    <Box sx={{
        position: 'fixed', // или 'absolute', в зависимости от контекста
        // top: 0,
        left: 0,
        bottom: 0,
        width: '100vw',
        height: '100%',
        boxShadow: "-1px 13px 20px",
        backgroundColor: "white", // Пример полупрозрачного фона
        zIndex: 9999 // Высокое значение z-index, чтобы быть поверх всех окон
    }} >
        <Box sx={{ width: '100%' }} padding={2} display="flex" justifyContent='end'>
            <IconButton variant="soft" onClick={_ => setChecked(!checked)}>
                <CloseIcon />
            </IconButton>
        </Box>
        <Stack direction="column"
            justifyContent="center"
            alignItems="end"
            spacing={2}
            paddingLeft={2}
            paddingRight={2}
            sx={{ width: '100%' }}>
            <CustInput
                name="name"
                label="Наименование"
                placeholder="Введите Наименование..."
                fullWidth={true}
            />
            <CustTextarea
                name="shortDescription"
                label="Краткое описание"
                placeholder="Введите описание..."
                minRows={6}
            />
            <Stack direction="row"
                justifyContent="space-between"
                spacing={1}
                sx={{ width: "100%" }}>
                <Input
                fullWidth
                    type="number"
                    placeholder="цена"
                    startDecorator='$'
                    slotProps={{
                        input: {
                          min: 1,
                          max: 999,
                          step: 1,
                        },
                      }}
                />
                <Input
                    type="number"
                    fullWidth
                    placeholder="mm"
                    startDecorator=<AccessTimeIcon/>
                    slotProps={{
                        input: {
                          min: 1,
                          max: 999,
                          step: 1,
                        },
                      }}
                />
            </Stack>
            <Button onClick={handlerAddService} variant="solid" color="success">
                Сохранить
            </Button>
        </Stack>


    </Box>
</Slide>
}
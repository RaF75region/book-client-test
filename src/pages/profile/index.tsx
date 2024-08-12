import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Avatar, Box, Button, Divider, Stack, Switch, Typography } from '@mui/joy';
import './style.scss'
import { userData, tg } from '../../services/init';
import { handleSwitch } from '../../states/menu/slice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectValues } from '../../states/menu/slice';
import { selectValues as sliceMenu } from '../../states/menu/slice';
import EventsForBisnessUser from '../../components/profile/bisness-user';
import EventsForUser from '../../components/profile/uset';

function UserProfile() {

    // tg.enableVerticalSwipes();
    // tg.MainButton.show().setParams({
    //     text: "bisness",
    // });

    const values = useAppSelector(selectValues);
    const valuesFromSliceMenu = useAppSelector(sliceMenu);
    const dispatch = useAppDispatch();

    const name: string | undefined = userData?.first_name;
    const username = userData?.username
    return (<>
        <div className='body-profile'>

        </div>
        <Box margin={2}>
            <Box width="100%" display="flex" alignContent="center" justifyContent="center">
                <Avatar size="lg" sx={{ height: 200, width: 200 }}></Avatar>
            </Box>
            <Stack direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                marginTop={2}
            >
                <Stack direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >

                    <Stack direction="column"
                        justifyContent="center"
                        alignItems="start"
                    >
                        <Typography level="title-md">{username}</Typography>
                        <Typography maxWidth="80%" textAlign="start" level="title-sm" color="neutral">{name}</Typography>
                    </Stack>

                </Stack>

                <Switch
                    onChange={e => dispatch(handleSwitch(e.target.checked))}
                    checked={values.isSwitch}
                ></Switch>
            </Stack>
            
            <Typography
                paddingTop={2}
                maxWidth="80%"
                textColor="success.600"
                textAlign="start"
                level="title-sm"
                color="neutral">
                    Роль:
                    {
                        valuesFromSliceMenu.isSwitch
                        ?
                        " бизнес пользователь"
                        :
                        " пользователь"
                    }
            </Typography>
            <Divider sx={{ marginTop: 2 }} inset="context">
                <Typography component="h1">РАСПИСАНИЕ</Typography>
            </Divider>
            {
                valuesFromSliceMenu.isSwitch
                ?
                <EventsForBisnessUser/>
                :
                <EventsForUser/>
            }            
        </Box>
    </>
    );
}

export default UserProfile;

import * as React from 'react';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DeleteIcon from '@mui/icons-material/Delete';
import { TransitionGroup } from 'react-transition-group';
import { Box, ListItemContent, Stack, Typography } from '@mui/joy';
import EditIcon from '@mui/icons-material/Edit';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const FRUITS = [
    '🍏 Apple',
    '🍌 Banana',
    '🍍 Pineapple',
    '🥥 Coconut',
    '🍉 Watermelon',
];

interface RenderItemOptions {
    item: string;
    handleRemoveFruit: (item: string) => void;
}

function renderItem({ item, handleRemoveFruit }: RenderItemOptions) {
    return (
        <ListItem
            secondaryAction={
                <Stack
                    spacing={0.1}
                    direction="row"
                    alignItems="flex-end"
                >
                    <IconButton
                        edge="end"
                        aria-label="edit"
                        title="Edit"
                    // onClick={() => handleRemoveFruit(item)}
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        edge="end"
                        aria-label="delete"
                        title="Delete"
                        onClick={() => handleRemoveFruit(item)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </Stack>
            }
        >
            {/* <ListItemText primary={item} /> */}
            <ListItemContent>
                <Stack spacing={0.1}
                    direction="column"
                    alignItems="start"
                    justifyContent="center"
                >
                    <Typography textAlign='left' level="title-lg" id="card-description">
                        dasda
                    </Typography>
                    <Typography textAlign='left' level="body-sm" aria-describedby="card-description" mb={1}>
                        <Typography
                            sx={{ color: 'text.tertiary' }}
                        >
                            dasda
                        </Typography>
                        </Typography>  
                        <Stack direction="row"
                        justifyContent="start"
                        alignItems="start"
                        spacing={3}
                        marginTop={2}>
                        <Typography color="success" level="body-sm">100$</Typography>
                        <Stack direction="row"
                            justifyContent="center"
                            alignItems="start"
                            spacing={1}>
                            <AccessTimeIcon fontSize="small" />
                            <Typography level="body-sm">45 min</Typography>
                        </Stack>
                    </Stack>                  
                </Stack>
            </ListItemContent>
        </ListItem>
    );
}

export default function ListServices() {
    const [fruitsInBasket, setFruitsInBasket] = React.useState(FRUITS.slice(0, 3));

    const handleAddFruit = () => {
        const nextHiddenItem = FRUITS.find((i) => !fruitsInBasket.includes(i));
        if (nextHiddenItem) {
            setFruitsInBasket((prev) => [nextHiddenItem, ...prev]);
        }
    };

    const handleRemoveFruit = (item: string) => {
        setFruitsInBasket((prev) => [...prev.filter((i) => i !== item)]);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <List
                sx={{ width: "100%" }}
                disablePadding>
                <TransitionGroup>
                    {fruitsInBasket.map((item) => (
                        <Collapse key={item}>{renderItem({ item, handleRemoveFruit })}</Collapse>
                    ))}
                </TransitionGroup>
            </List>
        </Box>
    );
}

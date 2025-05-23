import * as React from 'react';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {ListItem, ListItemText, List} from "@mui/material";

interface PreviewProps {
    application: Application
}

export default function Review({
                                   application
                               }: PreviewProps) {
    return (
        <Stack spacing={2}>


            <Stack
                direction="column"
                divider={<Divider flexItem/>}
                spacing={2}
                sx={{my: 2}}
            >
                <div>
                    <Typography variant="subtitle2" gutterBottom>
                        {application.firstName}&nbsp;{application.lastName}
                    </Typography>
                    <Typography gutterBottom>{application.city}</Typography>
                    <Typography gutterBottom sx={{color: 'text.secondary'}}>
                        {application.address}
                    </Typography>
                </div>

                <List disablePadding>
                    <ListItem sx={{py: 1, px: 0}}>
                        <ListItemText primary="Емейл адреса" secondary=""/>
                        <Typography variant="body2">{application.email}</Typography>
                    </ListItem>
                    <ListItem sx={{py: 1, px: 0}}>
                        <ListItemText primary="Телефон"/>
                        <Typography variant="subtitle1" sx={{fontWeight: 700}}>
                            {application.phone}
                        </Typography>
                    </ListItem>
                </List>

                <div>
                    <Typography variant="subtitle2" gutterBottom>
                        Додаткова інформація
                    </Typography>
                    <Grid container>
                        <React.Fragment key="company">
                            <Stack
                                direction="row"
                                spacing={1}
                                useFlexGap
                                sx={{width: '100%', mb: 1}}
                            >
                                <Typography variant="body1" sx={{color: 'text.secondary'}}>
                                    Назва об'єднання:
                                </Typography>
                                <Typography variant="body2">{application.company}</Typography>
                            </Stack>
                        </React.Fragment>
                        <React.Fragment key="quantity">
                            <Stack
                                direction="row"
                                spacing={1}
                                useFlexGap
                                sx={{width: '100%', mb: 1}}
                            >
                                <Typography variant="body1" sx={{color: 'text.secondary'}}>
                                    Кількість об'єктів (квартир) на утриманні:
                                </Typography>
                                <Typography variant="body2">{application.quantity}</Typography>
                            </Stack>
                        </React.Fragment>
                        <React.Fragment key="messenger">
                            <Stack
                                direction="row"
                                spacing={1}
                                useFlexGap
                                sx={{width: '100%', mb: 1}}
                            >
                                <Typography variant="body1" sx={{color: 'text.secondary'}}>
                                    Бажаний месенджер:
                                </Typography>
                                <Typography variant="body2">{application.messenger}</Typography>
                            </Stack>
                        </React.Fragment>
                    </Grid>
                </div>
            </Stack>
        </Stack>
    );
}

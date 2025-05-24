import * as React from 'react';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {ListItem, ListItemText, List} from "@mui/material";

interface PreviewProps {
    memberRequest: MemberRequest
}

export default function Review({
                                   memberRequest
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
                        {memberRequest.firstName}&nbsp;{memberRequest.lastName}
                    </Typography>
                    <Typography gutterBottom>{memberRequest.city}</Typography>
                    <Typography gutterBottom sx={{color: 'text.secondary'}}>
                        {memberRequest.address}
                    </Typography>
                </div>

                <List disablePadding>
                    <ListItem sx={{py: 1, px: 0}}>
                        <ListItemText primary="Емейл адреса" secondary=""/>
                        <Typography variant="body2">{memberRequest.email}</Typography>
                    </ListItem>
                    <ListItem sx={{py: 1, px: 0}}>
                        <ListItemText primary="Телефон"/>
                        <Typography variant="subtitle1" sx={{fontWeight: 700}}>
                            {memberRequest.phone}
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
                                <Typography variant="body2">{memberRequest.company}</Typography>
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
                                <Typography variant="body2">{memberRequest.quantity}</Typography>
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
                                <Typography variant="body2">{memberRequest.messenger}</Typography>
                            </Stack>
                        </React.Fragment>
                    </Grid>
                </div>
            </Stack>
        </Stack>
    );
}

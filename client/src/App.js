import React from 'react';
import { Container, AppBar, Typography, Grow } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/fitness.jpg';
import useStyles from './styles';

const App = () => { // an arrow function that return JSX
    const classes = useStyles();

    return (
        // this container will make sure to center everything
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <div style={{display: 'flex', alignItems:'center'}}>
                    <Typography className={classes.heading} variant="h2" align="center">movemates</Typography>
                    <img className={classes.image} src={memories} alt="memories" height="60" />
                </div>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;

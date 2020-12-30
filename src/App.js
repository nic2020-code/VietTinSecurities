import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
// import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import './App.css';
import NavBar from './components/navbar'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createMuiTheme, ThemeProvider, useTheme } from '@material-ui/core/styles';
import FALLBACK_IMAGE from './assets/img/anh1.jpg';
import Box from '@material-ui/core/Box';
// import Link from '@material-ui/core/Link';
// import PropTypes from 'prop-types';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 0),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  // cardMedia: {
  //   paddingTop: '56.25%', // 16:9
  // },
  cardContent: {
    flexGrow: 1,
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop:'30'
  }
}));

const themeCard = createMuiTheme({
  typography: {
    subtitle1: {
      fontSize: 16,
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 400,
    },
  },
});

const onMediaFallback = event => event.target.src = FALLBACK_IMAGE;

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            {/* <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              News
            </Typography> */}
            {/* <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div> */}
            <Paper className={classes.root}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab label="Tin VTSS" {...a11yProps(0)} />
                <Tab label="Tin Doanh Nghiệp" {...a11yProps(1)} />
                <Tab label="Tin UBCK" {...a11yProps(2)} />
              </Tabs>
            </Paper>
          </Container>
        </div>
        <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      component="img"
                      className={classes.cardMedia}
                      image="./assets/img/anh1.jpg"
                      title="Image title"
                      onError={onMediaFallback}
                    />
                    <CardContent className={classes.cardContent}>
                    <ThemeProvider theme={themeCard}>
                      <Typography gutterBottom variant="subtitle1">
                      Công ty cổ phần chứng khoán Việt Tín xin công bố thông tin BCTC Q3/2020 và giải trình biến động lợi nhuận Q3/2020
                      </Typography>
                      <Typography variant="subtitle2">
                      09:14 19/10/2020
                      </Typography>
                    </ThemeProvider>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary">
                        Xem
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      component="img"
                      className={classes.cardMedia}
                      image="./assets/img/anh1.jpg"
                      title="Image title"
                      onError={onMediaFallback}
                    />
                    <CardContent className={classes.cardContent}>
                    <ThemeProvider theme={themeCard}>
                      <Typography gutterBottom variant="subtitle1">
                      Công ty cổ phần chứng khoán Việt Tín xin công bố thông tin BCTC Q3/2020 và giải trình biến động lợi nhuận Q3/2020
                      </Typography>
                      <Typography variant="subtitle2">
                      09:14 19/10/2020
                      </Typography>
                    </ThemeProvider>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary">
                        Xem
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      component="img"
                      className={classes.cardMedia}
                      image="./assets/img/anh1.jpg"
                      title="Image title"
                      onError={onMediaFallback}
                    />
                    <CardContent className={classes.cardContent}>
                    <ThemeProvider theme={themeCard}>
                      <Typography gutterBottom variant="subtitle1">
                      Công ty cổ phần chứng khoán Việt Tín xin công bố thông tin BCTC Q3/2020 và giải trình biến động lợi nhuận Q3/2020
                      </Typography>
                      <Typography variant="subtitle2">
                      09:14 19/10/2020
                      </Typography>
                    </ThemeProvider>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary">
                        Xem
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </TabPanel>
        </SwipeableViews>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        {/* <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography> */}
        {/* <Copyright /> */}
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}



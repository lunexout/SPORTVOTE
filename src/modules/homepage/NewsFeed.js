import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import './NewsFeed.css'
import { Container, Grid } from '@material-ui/core';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export const NewsFeed = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <div className='main-newsfeed-cont'>
      <div style={{backgroundColor: '#000 !important;'}}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="სიახლეები" {...a11yProps(0)} />
          <Tab label="ტრანსფერები" {...a11yProps(1)} />
          <Tab label="სხვა" {...a11yProps(2)} />
        </Tabs>
      </div>

    </div>
          <div style={{marginTop: '100px',marginLeft:'auto', position:'relative'}}>
          <TabPanel value={value} index={0} >
                {/* <div className='newsfeed-inside-cont'> */}
                <Container style={{marginTop: 20}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} lg={4}>
                        <div className="newsimg">
                        <div className='newsimg-div'>
                            <img alt='img' className='newsimg-styles' src='https://www.teahub.io/photos/full/320-3204960_real-madrid-vs-arsenal-international-champions-cup.jpg'/>
                        </div>
                        <p className='news-txt'>
                                'მასთან ერთად ვითამაშებდი' - რონალდომ <br/>სასურველი თანაგუნდელი დაასახელა
                            </p>
                        </div>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                        <div className="newsimg">
                        <div className='newsimg-div'>
                            <img alt='img' className='newsimg-styles' src='https://www.teahub.io/photos/full/320-3204960_real-madrid-vs-arsenal-international-champions-cup.jpg'/>
                        </div>
                        <p className='news-txt'>
                                'მასთან ერთად ვითამაშებდი' - რონალდომ2 <br/>სასურველი თანაგუნდელი დაასახელა
                            </p>
                        </div>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                        <div className="newsimg">
                        <div className='newsimg-div'>
                            <img alt='img' className='newsimg-styles' src='https://www.teahub.io/photos/full/320-3204960_real-madrid-vs-arsenal-international-champions-cup.jpg'/>
                        </div>
                        <p className='news-txt'>
                                'მასთან ერთად ვითამაშებდი' - რონალდომ3 <br/>სასურველი თანაგუნდელი დაასახელა
                            </p>
                        </div>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                        <div className="newsimg">
                        <div className='newsimg-div'>
                            <img alt='img' className='newsimg-styles' src='https://www.teahub.io/photos/full/320-3204960_real-madrid-vs-arsenal-international-champions-cup.jpg'/>
                        </div>
                        <p className='news-txt'>
                                'მასთან ერთად ვითამაშებდი' - რონალდომ4 <br/>სასურველი თანაგუნდელი დაასახელა
                            </p>
                        </div>
                        </Grid>
                    </Grid>

                    
                </Container>
                {/* </div> */}
          </TabPanel>
          <TabPanel value={value} index={1}>
          <h5 style={{fontFamily: 'geofont', color: '#fff'}}>უახლესი2</h5>
    
          </TabPanel>
          <TabPanel value={value} index={2}>
          <h5 style={{fontFamily: 'geofont', color: '#fff'}}>უახლესი3</h5>
    
          </TabPanel>
          </div>
          </>
  );
}
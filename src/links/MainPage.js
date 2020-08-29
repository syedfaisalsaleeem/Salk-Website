import React from 'react'
import {Grid,Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Top1 from "../assets/Top.png";
import Improve from "../assets/Improve.png"
import Phone from "../components/Phone.js";
import Phone1 from "../components/Phone1.js";
import Footer1 from "../components/Footer1.js";
import Footer2 from "../components/Footer2.js";

export default function MainPage() {


  return (
    <div >
        
        <Grid item md={12}>
            <Grid container justify="center" style={{paddingTop:"20px"}}>
                <Grid item md={11}>
                    <Grid container style={{padding:"10px"}}>
                        <Grid item md={6}>
                                <Grid container >
                                    <Grid item>
                                        Productly
                                    </Grid>
                                </Grid>
                        </Grid>
                        <Grid item md={6}>
                            <Grid container justify="flex-end">
                                <Grid item md={3}>
                                    About
                                </Grid>
                                <Grid item md={2}>
                                    Contact us
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item md={12} >
            <Grid container >
                <Grid item md={3}>
                    <Grid container direction="column" justify="center" style={{width:"30vw",height:"100vh"}}spacing={4}>
                        <Grid item>
                            <Typography>
                                Because You Matter
                            </Typography>
                        
                        </Grid>
                        <Grid item>
                        <Typography>
                                The best interface to personal health
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button>
                                Notify Me
                            </Button>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item md={9} >
                    <Grid container justify="flex-end" style={{width:"70vw",paddingRight:"opx"}} >

                        <Grid item >
                            <img src={Top1} width="1120px" height="900px"/>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Grid>
        <Grid item md={12}>
            <Grid container justify="center">
                <Grid item md={7}>
                    <Typography variant="h2">
                        We design tools to unveil your superpowers
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item md={12}>
            <Grid container justify="center">
                <Grid item md={11}>
                    <Grid container spacing={3}>
                        <Grid item md={3}>
                            <Grid container direction="column">
                                <Grid item>
                                    <img src={Improve}/>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h4"> 
                                        Improve
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>
                                        Take our short questionnaire to get recommended tests for a more personalized experience - whether you want to improve nutritional goals or heart health, our goal is to guide you through this process.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={3}>
                            <Grid container direction="column">
                                <Grid item>
                                    <img src={Improve}/>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h4"> 
                                        Improve
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>
                                        Take our short questionnaire to get recommended tests for a more personalized experience - whether you want to improve nutritional goals or heart health, our goal is to guide you through this process.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={3}>
                            <Grid container direction="column">
                                <Grid item>
                                    <img src={Improve}/>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h4"> 
                                        Improve
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>
                                        Take our short questionnaire to get recommended tests for a more personalized experience - whether you want to improve nutritional goals or heart health, our goal is to guide you through this process.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={3}>
                            <Grid container direction="column">
                                <Grid item>
                                    <img src={Improve}/>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h4"> 
                                        Improve
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>
                                        Take our short questionnaire to get recommended tests for a more personalized experience - whether you want to improve nutritional goals or heart health, our goal is to guide you through this process.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

        </Grid>
        <Phone/>
        <Phone1/>
        <Phone/>
        <Phone1/>
        <Footer1/>
        <Footer2/>
      {/* <AppBar position="static" style={{marginTop:"10px",background:"white",color:"black"}}>
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}

          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}
          {/* <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Typography>
                Sa
            </Typography>
          </div> */}

        {/* </Toolbar>
      </AppBar> */} 
    </div>
  );
}

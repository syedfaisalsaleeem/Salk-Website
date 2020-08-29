import React from"react";
import {Grid,Typography} from "@material-ui/core";
import iphone from "../assets/iphone.png"
export default function Phone1 (){
    return(
        <div>

        
    <Grid item md={12}>
            <Grid container justify="center">
                <Grid item md={11}>
                    <Grid container>
                        <Grid item md={6}>
                            <img src={iphone}/>
                        </Grid>
                        <Grid item md={6} >
                            <Grid container direction="column" justify="center" alignItems="flex-start" style={{height:"100vh"}}>
                                <Grid item>
                                    <Typography>
                                        Design Professionals
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="column" alignItems="flex-start">
                                        <Grid item>
                                            Accessory makers
                                        </Grid>
                                        <Grid item>
                                            While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun
                                        </Grid>
                                    </Grid>

                                </Grid>
                                <Grid item>
                                    <Grid container direction="column" alignItems="flex-start">
                                        <Grid item>
                                            Accessory makers
                                        </Grid>
                                        <Grid item>
                                            While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="column" alignItems="flex-start">
                                        <Grid item>
                                            Accessory makers
                                        </Grid>
                                        <Grid item>
                                            While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>
            </Grid>

        </Grid>

        </div>)}
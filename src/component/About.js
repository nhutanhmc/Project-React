import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import '../css/About.css';
import CarRentalTwoToneIcon from '@mui/icons-material/CarRentalTwoTone';

export default function About() {
    return (
        <>
        <Typography variant="h2" sx={{ color: '#E7B10A', paddingTop: '5rem', textAlign: 'center' }}>Self Driving Car</Typography>
            <CarRentalTwoToneIcon sx={{ fontSize: '70px', paddingLeft: '56rem', color: '#D8D8D8' }} />
        <div className='about-container'>
            
            <Box className='big-block1'>
                <Typography sx={{ marginTop: '80px', marginLeft: '19rem', fontSize: '35px' }}>
                    A Few Words About Us
                </Typography>
                <Box >
                    <Box sx={{ width: '950px' }} className="block1">
                        <div className="col1">
                            <Box
                                className="about-img"
                                width='400px'
                                height='250px'
                                component='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm-Cvgg1wyrIhX7p8-F53vMtApujwQtu0hlQ&usqp=CAU' />
                        </div>
                        <div className="col2">
                            <Stack>
                                <Typography>
                                    Want to know more about the free theme produced by TemplateMonster? Click this link.
                                </Typography><br />
                                <Typography>
                                    One theme is not enough for you to make a choice? Browse the vast variety of car templates at TemplateMonster’s website.
                                </Typography><br />
                            </Stack>

                        </div>

                    </Box>
                    <Box className="block2" sx={{ width: '680px', marginLeft: '18rem' }}>
                        <Typography>
                            Cras er te facilisis, nulla vel viver auctor, leo magna sodales felis, quis malesuad nibh odio ut veliter loki molo. Vivamus at magna non nunc tristique rhoncus. Aliquam nibh ante, egestas id dictum atermolok commodo luctus erito libero.
                        </Typography><br />

                        <Typography>
                            Praesent faucibus malesuada faucibus. Donec laoreet metus id laoreet malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur orci sed nulla facilisis consequatertolomon. Curabitur vel lorem sit amet nulla ullamcorper fermentum.
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box className='big-block2' sx={{marginLeft:'15rem'}}>
                <Typography sx={{ marginTop: '80px', fontSize: '35px' }}>
                    why choose us
                </Typography><br />
                <Box sx={{ width: '400px' }}>
                    <Typography sx={{ fontSize: "22px", color: '#E7B10A' }}>
                        1. Econsecteturpiscinger elit
                    </Typography>
                    <Typography>
                        Sit meter ultricies erat rutrum. Cras er te facilisis, nulla vel viver auctor, leo magna sodales felis, quis malesuad nibh odio ut
                    </Typography><br />
                    <Typography sx={{ fontSize: "22px", color: '#E7B10A' }}>
                        2. Fconsecteturpiscingerelite
                    </Typography>
                    <Typography>
                        Git meter ultricies erat rutrum. Cras er te facilisis, nulla vel viver auctor, leo magna sodales felis, quis malesuad nibh odio
                    </Typography><br />
                    <Typography sx={{ fontSize: "22px", color: '#E7B10A' }}>
                        3. Hconsecteturpiscingeliter
                    </Typography>
                    <Typography>
                        Hit meter ultricies erat rutrum. Cras er te facilisis, nulla vel viver auctor, leo magna sodales felis, quis malesuad nibut velit.
                    </Typography><br />
                    <Typography sx={{ fontSize: "22px", color: '#E7B10A' }}>
                        4. Mconsecteturpiscinr elitwert
                    </Typography>
                    <Typography>
                        Kit meter ultricies erat rutrum. Cras er te facilisis, nulla vel viver auctor, leo magna sodales felis, quis malesuabh odio uter
                    </Typography><br />
                </Box>
            </Box>
        </div></>
    )
}
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Divider, Button } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Stack } from "@mui/system";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deleteApplication } from '../context/SendApplication';
import '../css/HistoryApplication.css';

export default function History() {
    const dispatch = useDispatch();
    const listApplication = useSelector((state) => state.applications.value)
    console.log(listApplication)
    const reversed = [...listApplication].reverse();

    return (
        <div className="all">
            {reversed.map((application) => (
                <Box key={application.id}>
                    <Accordion sx={{width: 800, backgroundColor: "#F5F5F5", boxShadow: "none", borderRadius: "10px", overflow: "hidden", border: "1px solid #E5E5E5", "&:not(:last-child)": {marginBottom: "20px"}}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{backgroundColor: "#FFFFFF", borderBottom: "1px solid #E5E5E5", padding: "20px", minHeight: "60px", display: "flex", alignItems: "center", justifyContent: "space-between",}}>
                            <Stack>
                                <Typography sx={{
                                    fontWeight: "bold",
                                    fontSize: "20px",
                                    color: "#00bcd4",
                                    marginRight: "10px"
                                }}>{application.fullname}</Typography>
                                <Typography sx={{ color: '#0072B5' }}>Type: {application.typeApplication}</Typography>
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails sx={{
                            padding: "20px",
                            display: "flex",
                            flexDirection: "column",
                        }}>
                            <Stack direction="row" spacing={10}>
                                <Typography sx={{color: '#0072B5'}}>
                                    Email: {application.email}         
                                </Typography>
                                <Typography sx={{color: '#0072B5'}}>           
                                    Phone: {application.phone}
                                </Typography>
                            </Stack>
                            
                            <Typography sx={{
                                marginTop: "10px",
                                fontSize: "16px",
                                lineHeight: "1.5",
                                color: "#555555"
                            }}>
                                Message: {application.text}
                            </Typography>

                            <Button style={{
                                marginTop: "20px",
                                color: 'white',
                                backgroundColor: '#00bcd4',
                                fontWeight: '700',
                                "&:hover": {
                                    backgroundColor: "#FF7F9C"
                                }
                            }}
                                onClick={() => { dispatch(deleteApplication({ id: application.id })) }}
                            >
                                <DeleteForeverIcon sx={{ marginRight: "5px" }} /> Delete
                            </Button>
                        </AccordionDetails>
                    </Accordion>
                    <Divider sx={{ width: 800 }} />
                </Box>
            ))}
        </div>
    )
}
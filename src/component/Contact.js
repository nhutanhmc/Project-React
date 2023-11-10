import React from "react";
import { UserAuth } from "../context/AuthContext";
import { useFormik } from "formik";
import * as Yup from 'yup'
import '../css/ContactCSS.css'
import { Box, Typography } from "@mui/material";
import { Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Link } from "react-router-dom";
import CarRentalTwoToneIcon from '@mui/icons-material/CarRentalTwoTone';
import SendIcon from '@mui/icons-material/Send';
import { addApplication } from "../context/SendApplication";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

export default function Contact() {
    const dispatch = useDispatch();
    const listApplication = useSelector((state) => state.applications.value)
    const { user } = UserAuth();

    const listOfType =
        [
            'About time',
            'About location',
            'About service',
            'About car',
        ]

    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            phone: '',
            typeApplication: '',
            text: ''
        },

        onSubmit: (values) => {
            dispatch(addApplication(values));
            console.log(values);
        },

        validationSchema: Yup.object({
            fullname: Yup.string().required('Fullname is required').min(5, 'At least 5 characters').max(50, 'Fullname is too long!'),
            email: Yup.string().required('Email required').email('Invalid email address').min(11, 'At least 5 characters').max(70, 'Email is too long!'),
            phone: Yup.number().required('Phone is required').integer('Invalid phone!').min(10000, 'Min 5 digits!').max(999999999999, 'Max 12 digits!'),
            typeApplication: Yup.string().oneOf(listOfType, "Invalid! Please try again."),
            text: Yup.string().required('Text is required').min(10, 'At least 10 characters').max(250, 'Text is too long!'),
        })
    })

    const checkDisabled = (fullname, email, phone, typeApplication, text) => {
        console.log(fullname, email, phone, typeApplication, text)
        if (fullname !== '' && email !== '' && phone !== '' && typeApplication!== '' && text !== '') {
            return false;
        } else {
            return true;
        }
    }


    return (
        <div className="contact">
            <Typography variant="h2" sx={{ color: '#E7B10A', paddingTop: '8rem', textAlign: 'center' }}>Self Driving Car</Typography>
            <CarRentalTwoToneIcon sx={{ fontSize: '70px', paddingLeft: '56rem', color: '#D8D8D8' }} />
            <Typography sx={{ color: '#525252', paddingTop: '10px', textAlign: 'center' }}>Hãy cho chúng tôi biết ý kiến của bạn bằng cách phản hồi hoặc liên hệ qua các thông tin của chúng tôi để giúp chúng tôi phát triển hơn trong tương lai</Typography>
            <Box
                className="contact-img"
                width='100vw'
                height='60vh'
                component='img' src='https://thuexehcm.vn/wp-content/uploads/2019/06/banner-image1-1024x554.jpg' />
            <div className="container">

                {/* thông tin liên hệ */}
                <div className="contactInfo">
                    <Typography variant="h4">Contact Info</Typography><br />

                    <Typography variant="h5">Address:</Typography>
                    <Typography sx={{ color: '#B4A5A5' }}>99 Nguyễn Huệ, phường Bến Nghé, Quận 1, TP. Hồ Chí Minh</Typography><br />

                    <Typography variant="h5">Phone:</Typography>
                    <Typography sx={{ color: '#B4A5A5' }}>0123-456-789</Typography><br />

                    <Typography variant="h5">Email:</Typography>
                    <Typography sx={{ color: '#B4A5A5' }}>RentCar@gmail.com</Typography><br />

                </div>


                {/* Form gửi đơn liên hệ  */}
                <div className="contactForm">
                    <form onSubmit={formik.handleSubmit}>
                        <Typography sx={{ textAlign: 'center', paddingBottom: '20px' }} variant="h4">Contact Form</Typography>

                        <div className="inputBox">
                            <TextField
                                sx={{ width: '30rem' }}
                                name="fullname"
                                value={formik.values.fullname}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                label="Full Name"
                                error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                                helperText={formik.touched.fullname && formik.errors.fullname}
                            />
                        </div><br />
                        <div className="inputBox">
                            <TextField
                                sx={{ width: '30rem' }}
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                label="Email"
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                        </div><br />
                        <div className="inputBox">
                            <TextField
                                sx={{ width: '30rem' }}
                                name="phone"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                label="Phone"
                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                helperText={formik.touched.phone && formik.errors.phone}
                            />
                        </div><br />
                        <div className="inputBox">
                            <FormControl fullWidth>
                                <InputLabel sx={{paddingRight:'22rem'}} id="format-label">Choose one</InputLabel>
                                <Select

                                    style={{ width: '30rem' }}
                                    multiple={false}
                                    placeholder="type application"
                                    label="Choose type application"
                                    name="typeApplication"
                                    value={formik.values.typeApplication}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}

                                >
                                    <MenuItem
                                        disabled
                                        value='0'
                                        
                                    >
                                        Please select
                                    </MenuItem>
                                    {listOfType.map((typeApplication, index) =>
                                        <MenuItem key={index} value={typeApplication} >{typeApplication}</MenuItem>
                                    )}
                                </Select>
                                {formik.errors.typeApplication && (
                                    <p className='contact-error'>{formik.errors.typeApplication}</p>
                                )}
                            </FormControl>
                        </div><br />
                        <div className="inputBox">
                            <TextField
                                sx={{ width: '30rem' }}
                                name="text"
                                value={formik.values.text}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                label="Type your Message"
                                multiline
                                rows={4}
                                error={formik.touched.text && Boolean(formik.errors.text)}
                                helperText={formik.touched.text && formik.errors.text}
                            />
                        </div><br />

                        {
                            user?.displayName ? <Button sx={{  marginBottom: '80px', background: '#E7B10A', color: 'white' }} type="button"
                            disabled={checkDisabled(
                                formik.values.fullname,
                                formik.values.email,
                                formik.values.phone,
                                formik.values.typeApplication,
                                formik.values.text )}
                                onClick={() => {
                                    dispatch(addApplication({
                                        id: listApplication.length,
                                        fullname: formik.values.fullname,
                                        email: formik.values.email,
                                        phone: formik.values.phone,
                                        typeApplication: formik.values.typeApplication,
                                        text: formik.values.text,
                                    }));
                                }} ><SendIcon sx={{ paddingRight: '4px' }} />Send</Button>
                                :
                                <Button sx={{  marginBottom: '80px', background: '#E7B10A', color: 'white' }}><Link to='/loginpage' style={{ textDecoration: 'none' }}><SendIcon sx={{ paddingRight: '4px' }} />Send</Link></Button>
                        }

                    </form>
                </div>
            </div>
        </div>

    )
}
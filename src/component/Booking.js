import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { object, string, bool } from "yup";
import styles from "../css/car.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { NotificationManager } from "react-notifications";


function Booking() {
  const navigate = useNavigate();

  const [users, setUsers] = useState({
    name: "",
    email: "",
    from: "",
    to: "",
    time: "",
    date: "",
    comfort: false,
    adults: "",
    children: "",
    message: "",
    status: "save",
  });

const {CarId} = useParams();
console.log(CarId)
  const handleSubmit = (values, formikHelpers) => {
    navigate(`/payment/${CarId}`);
    NotificationManager.success("Submit success");
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.register}
        style={{ marginTop: "100px", marginBottom: "20px" }}
      >
        <div className={styles.formRegisterEmail}>
          <div className={styles.title}>
            <Typography variant="h3" sx={{textAlign:'center'}}>Booking Form</Typography>

          </div>
          <div className="MaterialForm">
            <Formik
              initialValues={users}
              enableReinitialize
              validationSchema={object({
                name: string()
                  .required("Please enter name")
                  .min(2, "Name too short"),
                from: string().required("Please enter from"),
                to: string().required("Please enter to"),
                time: string().required("Please enter time"),
                date: string().required("Please enter date"),
                email: string().required("Please enter email"),
                adults: string().required("Please enter adults"),
                children: string().required("Please enter children"),
                message: string().required("Please enter message"),
                nation: string().required("Please enter nation"),
                comfort: bool().oneOf([true], "You need to accept the famous"),
                status: string(),
              })}
              onSubmit={(values, formikHelpers) => {
                handleSubmit(values, formikHelpers);
              }}
            >
              {({ errors, isValid, touched, dirty }) => (
                <Form>
                  <div style={{ display: "flex" }}>
                    <Field
                      name="name"
                      type="name"
                      as={TextField}
                      variant="outlined"
                      color="primary"
                      label="Name"
                      fullWidth
                      style={{ marginBottom: "20px" }}
                      error={Boolean(errors.name) && Boolean(touched.name)}
                      helperText={Boolean(touched.name) && errors.name}
                    />
                    <div style={{ padding: "10px" }}></div>
                    <Field
                      name="email"
                      type="email"
                      as={TextField}
                      variant="outlined"
                      color="primary"
                      label="Email"
                      fullWidth
                      style={{ marginBottom: "20px" }}
                      error={Boolean(errors.email) && Boolean(touched.email)}
                      helperText={Boolean(touched.email) && errors.email}
                    />
                  </div>
                  <div style={{ display: "flex" }}>
                    <Field
                      name="from"
                      type="text"
                      as={TextField}
                      variant="outlined"
                      color="primary"
                      label="From"
                      fullWidth
                      style={{ marginBottom: "20px" }}
                      error={Boolean(errors.from) && Boolean(touched.from)}
                      helperText={Boolean(touched.from) && errors.from}
                    />
                    <div style={{ padding: "10px" }}></div>
                    <Field
                      name="to"
                      type="text"
                      as={TextField}
                      variant="outlined"
                      color="primary"
                      label="To"
                      fullWidth
                      style={{ marginBottom: "20px" }}
                      error={Boolean(errors.to) && Boolean(touched.to)}
                      helperText={Boolean(touched.to) && errors.to}
                    />
                  </div>
                  <Field
                    name="time"
                    type="time"
                    as={TextField}
                    variant="outlined"
                    color="primary"
                    fullWidth
                    style={{ marginBottom: "20px" }}
                    error={Boolean(errors.time) && Boolean(touched.time)}
                    helperText={Boolean(touched.time) && errors.time}
                  />
                  <Field
                    name="date"
                    type="date"
                    as={TextField}
                    variant="outlined"
                    color="primary"
                    fullWidth
                    style={{ marginBottom: "20px" }}
                    error={Boolean(errors.date) && Boolean(touched.date)}
                    helperText={Boolean(touched.date) && errors.date}
                  />
                  <Field
                    name="nation"
                    type="name"
                    as={TextField}
                    variant="outlined"
                    color="primary"
                    label="Nation"
                    fullWidth
                    style={{ marginBottom: "20px" }}
                    error={Boolean(errors.nation) && Boolean(touched.nation)}
                    helperText={Boolean(touched.nation) && errors.nation}
                  />
                  <div style={{ display: "flex" }}>
                    <Field
                      name="adults"
                      type="number"
                      as={TextField}
                      variant="outlined"
                      color="primary"
                      label="Adults"
                      fullWidth
                      style={{ marginBottom: "20px" }}
                      error={Boolean(errors.adults) && Boolean(touched.adults)}
                      helperText={Boolean(touched.adults) && errors.adults}
                    />
                    <div style={{ padding: "10px" }}></div>
                    <Field
                      name="children"
                      type="number"
                      as={TextField}
                      variant="outlined"
                      color="primary"
                      label="Children"
                      fullWidth
                      style={{ marginBottom: "20px" }}
                      error={
                        Boolean(errors.children) && Boolean(touched.children)
                      }
                      helperText={Boolean(touched.children) && errors.children}
                    />
                  </div>
                  <Field
                    name="message"
                    type="name"
                    as={TextField}
                    variant="outlined"
                    color="primary"
                    label="Message"
                    fullWidth
                    style={{ marginBottom: "20px" }}
                    error={Boolean(errors.message) && Boolean(touched.message)}
                    helperText={Boolean(touched.message) && errors.message}
                  />
                  <div className={styles.recap} style={{ display: "flex" }}>
                    <Field
                      name="comfort"
                      type="checkbox"
                      color="primary"
                      style={{
                        zIndex: "10",
                        pointerEvents: "all",
                        width: "155px",
                        height: "23px",
                      }}
                    />
                    <Typography>I agree</Typography>
                  </div>
                  <div style={{ display: "flex", color: " #f44336" }}>
                    {errors.comfort && <span>{errors.comfort}</span>}
                  </div>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={!isValid || !dirty}
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
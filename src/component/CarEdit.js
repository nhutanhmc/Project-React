import * as React from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import { Button, TextField, Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import * as Yup from "yup";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const carTypes = ["Luxury", "Standard", "Economy"];

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Vui lòng điền trường này"),
  type: Yup.string().required("Vui lòng điền trường này"),
  img: Yup.string().required("Vui lòng điền trường này"),
  cost: Yup.string().required("Vui lòng điền trường này"),
  infor: Yup.string().required("Vui lòng điền trường này"),
});

export default function EditCar() {
  const { id } = useParams();
  const handleSubmit = async (values) => {
    try {
      const response = await fetch(
        `https://65424fa4f0b8287df1ffe5b9.mockapi.io/test2/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            type: values.type,
            img: values.img,
            cost: values.cost,
            infor: values.infor,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Dữ liệu đã được gửi thành công:", data);
      handleClickOpen();
    } catch (error) {
      console.error("Lỗi khi gửi dữ liệu:", error);
      handleClose();
    }
  };

  const CustomAutocomplete = (props) => {
    const formik = useFormikContext();

    return (
      <Autocomplete
        {...props}
        options={carTypes}
        getOptionLabel={(option) => option}
        onChange={(event, value) => formik.setFieldValue("type", value)}
        onBlur={() => formik.setFieldTouched("type", true)}
        renderInput={(params) => (
          <TextField {...params} label="Type" fullWidth variant="outlined" />
        )}
      />
    );
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          name: "",
          type: "",
          img: "",
          cost: "",
          infor: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form style={{ marginTop: "80px" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Field
                name="name"
                as={TextField}
                label="Name"
                fullWidth
                variant="outlined"
              />
              <ErrorMessage name="name" component="div" className="error" />
            </Grid>
            <Grid item xs={6}>
              <Field name="type" as={CustomAutocomplete} />
              <ErrorMessage name="type" component="div" className="error" />
            </Grid>
            <Grid item xs={6}>
              <Field
                name="img"
                as={TextField}
                label="Image"
                fullWidth
                variant="outlined"
              />
              <ErrorMessage name="img" component="div" className="error" />
            </Grid>
            <Grid item xs={6}>
              <Field
                name="cost"
                as={TextField}
                label="Cost"
                fullWidth
                variant="outlined"
              />
              <ErrorMessage name="cost" component="div" className="error" />
            </Grid>
            <Grid item xs={6}>
              <Field
                name="infor"
                as={TextField}
                label="Information"
                fullWidth
                variant="outlined"
              />
              <ErrorMessage name="infor" component="div" className="error" />
            </Grid>
          </Grid>

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Formik>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Thêm mới thành công!!!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn có muốn trở về trang chọn xe không
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        
          <Button onClick={handleClose}>Disagree</Button>
          <Link to="/car">
          <Button onClick={handleClose} autoFocus>Agree</Button>
          </Link>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

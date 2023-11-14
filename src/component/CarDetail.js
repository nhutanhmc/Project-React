import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useCart } from "./CartContext";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
export default function CarDetail() {
  const { id } = useParams();
  const [carDetail, setCarDetail] = useState(null);
  const { addToCart } = useCart();
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  useEffect(() => {
    const getCarDetail = async () => {
      try {
        const response = await axios.get(
          `https://65424fa4f0b8287df1ffe5b9.mockapi.io/test2/${id}`
        );
        setCarDetail(response.data);
      } catch (error) {
        console.error("Error fetching car detail: ", error);
      }
    };

    getCarDetail();
  }, [id]);

  const handleAddToCart = () => {
    if (carDetail) {
      addToCart(carDetail.id, carDetail.name, carDetail.cost);
    }
  };

  if (!carDetail) {
    return <div>Loading...</div>;
  }

  const handleDeleteCar = async () => {
    const confirmed = window.confirm("Bạn có chắc muốn xóa xe này?");
    if (confirmed) {
      try {
        await axios.delete(`https://65424fa4f0b8287df1ffe5b9.mockapi.io/test2/${id}`);
        setShowSuccessDialog(true);
      } catch (error) {
        console.error("Error deleting car: ", error);
        alert('Lỗi khi xóa xe!');
      }
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "95vh",
      }}
    >
      <Card sx={{ width: 1000, maxHeight: 800 }}>
        <CardMedia
          component="img"
          height="400"
          image={carDetail.img}
          alt={carDetail.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {carDetail.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Nguồn: {carDetail.infor}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Thể loại: {carDetail.type}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Gía: {carDetail.cost}$
          </Typography>
          <Fab color="primary" aria-label="add" onClick={handleAddToCart}>
            <AddIcon />
          </Fab>
          <Link to={`/caredit/${id}`}>
          <Fab color="secondary"  aria-label="edit">
                <EditIcon />
              </Fab>
              </Link>
              <Fab aria-label="delete" onClick={handleDeleteCar}>
          <DeleteIcon />
        </Fab>
        </CardContent>
        <Dialog
        open={showSuccessDialog}
        onClose={() => setShowSuccessDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Xóa thành công"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Sẽ quay lại trang chính.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/">
            <button onClick={() => setShowSuccessDialog(false)}>
              Ok
            </button>
          </Link>
        </DialogActions>
      </Dialog>
      </Card>
    </div>
  );
}

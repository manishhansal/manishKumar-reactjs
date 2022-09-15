import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";
import { TOKEN } from "../constants/constants";

const CreateProduct = () => {
  const [open, setOpen] = React.useState(false);
  const [avatar, setAvatar] = useState(null);
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    developerEmail: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({
      ...form,
      [id]: value,
    });
  };

  const validateImg = (e) => {
    const file = e.target.files[0];
    if (file.size >= 1048576) {
      return alert("Max file size is 1MB.");
    } else {
      setAvatar(file);
    }
  };

  async function uploadImage() {
    const data = new FormData();
    data.append("file", avatar);

    data.append("upload_preset", "h41kkssr");
    try {
      let res = await fetch(
        `https://api.cloudinary.com/v1_1/djfgbivby/image/upload`,
        {
          method: "post",
          body: data,
        }
      );
      const urlData = await res.json();

      return urlData.url;
    } catch (error) {
      console.log(error);
    }
  }

  const handleCreate = async () => {
    const url = await uploadImage(avatar);
    form.avatar = url;
    const payloadjson = JSON.stringify(form);
    const res = await fetch(
      "https://upayments-studycase-api.herokuapp.com/api/products",
      {
        method: "POST",
        body: payloadjson,
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "content-type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
    if (data.message === "Success") {
      alert("Product is created successfully.");
      setOpen(false);
      window.location.reload();
    } else {
      alert("Something error occured.");
    }
  };

  const { name, price, category, description, developerEmail } = form;

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create Product
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Product</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Price"
            type="number"
            fullWidth
            variant="standard"
            value={price}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Category"
            type="text"
            fullWidth
            variant="standard"
            value={category}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            value={description}
            onChange={(e) => handleChange(e)}
          />
          <div className="mt-5">
            <label htmlFor="image-upload">
              <ImageRoundedIcon fontSize="large" style={{ color: "#5D20D2" }} />
              &nbsp; Avatar
            </label>
            <input
              type="file"
              id="image-upload"
              hidden
              accept="image/png, image/jpeg"
              onChange={validateImg}
            />
          </div>
          <TextField
            autoFocus
            margin="dense"
            id="developerEmail"
            label="Developer Email"
            type="email"
            fullWidth
            variant="standard"
            value={developerEmail}
            onChange={(e) => handleChange(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreate}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateProduct;

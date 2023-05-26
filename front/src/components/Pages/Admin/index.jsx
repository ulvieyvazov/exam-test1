import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddProduct } from "../../../Schema/AddProduct";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";

const Admin = () => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddProduct),
  });

  const onPost = async () => {
    const values = getValues();
    await axios.post("http://localhost:5050/business", {
      img: values.img,
      category: values.category,
      title: values.title,
    });
  };

  return (
    <form action="" onSubmit={handleSubmit(onPost)}>
      <Box
        sx={{
          "& > :not(style)": { m: 1, width: "35ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="img"
          variant="outlined"
          {...register("img")}
        />
        {errors.img?.message && <p style={{color: 'red'}}>{errors.img?.message}</p>}

        <TextField
          id="filled-basic"
          label="category"
          variant="filled"
          {...register("category")}
        />
        {errors.category?.message && <p style={{color: 'red'}}>{errors.category?.message}</p>}
        <TextField
          id="standard-basic"
          label="title"
          variant="standard"
          {...register("title")}
        />
        {errors.title?.message && <p style={{color: 'red'}}>{errors.title?.message}</p>}
      </Box>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Admin;

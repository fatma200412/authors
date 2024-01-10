"use client";

import Navbar from "@/app/layout/navbar/page";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import app from "@/app/firebase/config";
import { useState, useEffect } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

type Props = {};
const gender = [
  {
    value: "GENDER",
    label: "GENDER",
  },
  {
    value: "FEMALE",
    label: "FEMALE",
  },
  {
    value: "MALE",
    label: "MALE",
  },
];

const AddAuthors = (props: Props) => {
  const [name, setName] = useState("");
  const [birtYear, setBirtYear] = useState<number>(0);
  const [genre, setGenre] = useState("");
  const [isDead, setIsDeads] = useState("");
  const [selectGender, setSelectGender] = useState("");
  const [image, setimage] = useState("");

  return (
    <>
      <Navbar />
      <h1 className="mt-20 font-bold text-center text-3xl mb-5">Add Authors</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="flex-col flex items-center ">
          <TextField
            value={name}
            required
            id="standard-required"
            label="Required"
            defaultValue={name}
            variant="standard"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            value={birtYear}
            required
            id="standard-required"
            label="Required"
            defaultValue={birtYear}
            variant="standard"
            onChange={(e) => {
              console.log(e.target.value);
              setBirtYear(parseInt(e.target.value));
            }}
          />
          <TextField
            value={genre}
            required
            id="standard-required"
            label="Required"
            defaultValue={genre}
            variant="standard"
            onChange={(e) => {
              setGenre(e.target.value);
            }}
          />
          <FormControl style={{ width: "250px" }}>
            <InputLabel id="demo-simple-select-label">Is Dead</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={isDead}
              label="is Dead"
              onChange={(e) => {
                console.log(e.target.value);
                setIsDeads(e.target.value);
              }}
            >
              <MenuItem value="">is Dead</MenuItem>
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
          <br />

          <FormControl style={{ width: "250px" }}>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectGender}
              label="is Dead"
              onChange={(e) => {
                console.log(e.target.value);
                setSelectGender(e.target.value);
              }}
            >
              <MenuItem value="">Gender</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Male">Male</MenuItem>
            </Select>
          </FormControl>
          <TextField
            value={image}
            required
            id="standard-required"
            label="Required"
            defaultValue={image}
            variant="standard"
            onChange={(e) => {
              setimage(e.target.value);
            }}
          />
          <button>Add</button>
        </div>
      </Box>
    </>
  );
};

export default AddAuthors;

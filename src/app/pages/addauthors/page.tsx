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
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

type Props = {};

const AddAuthors = (props: Props) => {
  const [name, setName] = useState("");
  const [birtYear, setBirtYear] = useState<number>(0);

  const [genre, setGenre] = useState("");
  const [isDead, setIsDeads] = useState("");
  const [selectGender, setSelectGender] = useState("");
  const [image, setimage] = useState("");

  const addAuthor = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const db = getFirestore(app);
    let newAuthor = {
      name: name,
      birthyear: birtYear,
      genre: genre,
      gender: selectGender,
      isDead: isDead,
      image: image,
    };
    const newCityRef = doc(collection(db, "authors"));
    await setDoc(newCityRef, newAuthor);
    console.log(newAuthor);
  };

  return (
    <>
      <Navbar />
      <h1 className="mt-20 font-bold text-center text-3xl mb-5">Add Authors</h1>
      <Box
        component="div"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        <form
          className="flex-col flex items-center "
          onSubmit={(e) => {
            addAuthor(e);
          }}
        >
          <TextField
            value={name}
            required
            id="standard-required"
            label="Required"
            // defaultValue=""
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
            // defaultValue=""
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
            // defaultValue=""
            variant="standard"
            onChange={(e) => {
              setGenre(e.target.value);
            }}
          />

          <InputLabel id="demo-simple-select-label">Is Dead</InputLabel>
          <Select
            style={{ width: "250px" }}
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

          <br />

          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            style={{ width: "250px" }}
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

          <TextField
            value={image}
            required
            id="standard-required"
            label="Required"
            // defaultValue=""
            variant="standard"
            onChange={(e) => {
              setimage(e.target.value);
            }}
          />
          <button type="submit">Add</button>
        </form>
      </Box>
    </>
  );
};

export default AddAuthors;

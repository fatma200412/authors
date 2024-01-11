"use client";

import Navbar from "@/app/layout/navbar/page";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import app from "@/app/firebase/config";
import Grid from "@mui/material/Grid";

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

interface Authors {
  id: string;
  name: string;
  birthyear: number;
  gender: string;
  genre: string;
  image: string;
}

const Authors = (props: Props) => {
  const [authorsData, setAuthorsData] = useState<Authors[]>([]);
  const getData = async () => {
    const db = getFirestore(app);

    const querySnapshot = await getDocs(collection(db, "authors"));

    let authors: Authors[] = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());

      let obj: Authors = {
        id: doc.id,
        name: doc.data().name,
        birthyear: doc.data().birthyear,
        gender: doc.data().gender,
        genre: doc.data().genre,
        image: doc.data().image,
      };

      authors.push(obj);
      setAuthorsData(authors);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  //  export getData()

  return (
    <>
      <Navbar />
      <Box
        className="m-20 flex"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Search Author"
          variant="outlined"
        />
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="GENDER"
          >
            {gender.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>
      <Box className="m-20 flex">
        <Grid container spacing={2}>
          {authorsData &&
            authorsData.map((author, i) => {
              return (
                <Grid key={i} item xs={4}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea href={`/pages/authors/${author.id}`}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={author.image}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {author.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {2023 - author.birthyear} years age <br />
                          Genre: {author.genre} <br />
                          Gender: {author.gender}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <div className="text-center mb-5">
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                          const deleteUserData = async () => {
                            const db = getFirestore(app);

                            await deleteDoc(doc(db, "authors", author.id));
                          };
                          deleteUserData();
                          setAuthorsData(
                            authorsData.filter((elem) => elem.id != author.id)
                          );
                        }}
                      >
                        DELETE
                      </button>
                    </div>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </>
  );
};
export default Authors;

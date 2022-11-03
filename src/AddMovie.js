import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik"
import * as yup from "yup";
import { API } from "./global";

const movieValidationSchema = yup.object({
  name: yup.
    string().
    min(5,"Need bigger name").
    required("why not fill this name"),
  poster: yup.
    string().
    min(5,"Need bigger poster").
   required("why not fill this poster"),
  rating: yup.
   number().
   min(1,"Need bigger rating").
   max(10,"too much rating").
   required("why not fill this rating"),
  summary: yup.
   string().
   min(20,"Need bigger summary").
   required("why not fill this summary"),
  trailer: yup.
   string().
   min(5,"Need bigger trailer").
   required("why not fill this trailer"),

  
})
export function AddMovie() {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");

  const navigate = useNavigate();

  const addMovie = (newMovie) => {
    // const newMovie = {
    //   name: name,
    //   poster: poster,
    //   rating: rating,
    //   summary: summary,
    //   trailer: trailer,
    // };

    fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: { "Content-Type": "application/json" },
    }).then(navigate("/MovieList"));

    // setMovieList([...movieList, newMovie]);
    console.log(newMovie);
  };
  const {handleSubmit,values,handleChange,handleBlur,errors,touched} = useFormik({
    initialValues: {
      name: "",
      poster: "",
      rating: "",
      summary: "",
      trailer: "",
    },
    validationSchema : movieValidationSchema,
    onSubmit:(newMovie)=>{
      console.log('onSubmit',newMovie)
      addMovie(newMovie)
    }
})
  return (
    <form onSubmit={handleSubmit}>
      <div className="add-movie-form">
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && errors.name}
          helperText={touched.name && errors.name ? errors.name : ""}


          // onChange={(event) => { setName(event.target.value); }}
        />
      
        <TextField
          id="standard-basic"
          label="Poster"
          variant="standard"
          name="poster"
          value={values.poster}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.poster && errors.poster}
          helperText={touched.poster && errors.poster ? errors.poster : ""}
            

          // onChange={(event) => { setPoster(event.target.value); }}
        />
            {/* {touched.poster && errors.poster ? errors.poster : ""} */}
  
        <TextField
          id="standard-basic"
          label="Rating"
          variant="standard"
          name="rating"
          value={values.rating}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.rating && errors.rating}
          helperText={touched.rating && errors.rating ? errors.rating : ""}
          
          // onChange={(event) => { setRating(event.target.value); }}
          />
          {/* {touched.rating && errors.rating ? errors.rating : ""} */}

        <TextField
          id="standard-basic"
          label="Summary"
          variant="standard"
          name="summary"
          value={values.summary}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.summary && errors.summary}
          helperText={touched.summary && errors.summary ? errors.summary : ""}
          // onChange={(event) => { setSummary(event.target.value); }}
        />
          

        <TextField
          id="standard-basic"
          label="trailer"
          variant="standard"
          name="trailer"
          value={values.trailer}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.trailer && errors.trailer}
          helperText={touched.trailer && errors.trailer ? errors.trailer : ""}
          // onChange={(event) => { setTrailer(event.target.value); }}
        />
          

        {/* <button onClick={addMovie}>Add Movie</button> */}
        <Button
          type="submit"
          // onClick={addMovie}
          variant="outlined"
        >
          Add Movie
        </Button>

        {/* <p>Name:{name}</p>
      <p>Poster:{poster}</p>
      <p>rating:{rating}</p>
      <p>summary:{summary}</p> */}
      </div>
    </form>
  );
}

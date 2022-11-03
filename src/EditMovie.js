import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import { API } from "./global";

const movieValidationSchema = yup.object({
  name: yup
    .string()
    .min(5, "Need bigger name")
    .required("why not fill this name"),
  poster: yup
    .string()
    .min(5, "Need bigger poster")
    .required("why not fill this poster"),
  rating: yup
    .number()
    .min(1, "Need bigger rating")
    .max(10, "too much rating")
    .required("why not fill this rating"),
  summary: yup
    .string()
    .min(20, "Need bigger summary")
    .required("why not fill this summary"),
  trailer: yup
    .string()
    .min(5, "Need bigger trailer")
    .required("why not fill this trailer"),
});

export function EditMovie() {
  const { id } = useParams();
  console.log(id);

  // const movie = movieList[id];

  const [movie, setMovie] = useState(null);

  const getMovie = () => {
    fetch(`${API}/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  };

  useEffect(() => getMovie(), []);

  return movie ? <EditMovieForm movie={movie} /> : "Loading";
}

function EditMovieForm({ movie }) {
  // const [name, setName] = useState(movie.name);
  // const [poster, setPoster] = useState(movie.poster);
  // const [rating, setRating] = useState(movie.rating);
  // const [summary, setSummary] = useState(movie.summary);
  // const [trailer, setTrailer] = useState(movie.trailer);

  const navigate = useNavigate();

  const editMovie = (updatedMovie) => {
    // const updatedMovie = {
    //   name: name,
    //   poster: poster,
    //   rating: rating,
    //   summary: summary,
    //   trailer: trailer,
    // };

    fetch(`${API}/movies/${movie._id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: { "Content-Type": "application/json" },
    }).then(() => navigate("/MovieList"));

    // setMovieList([...movieList, newMovie]);
    console.log(updatedMovie,movie._id);
  };
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: movie.name,
        poster: movie.poster,
        rating: movie.rating,
        summary: movie.summary,
        trailer: movie.trailer,
      },
      validationSchema: movieValidationSchema,
      onSubmit: (updatedMovie) => {
        console.log("onSubmit", updatedMovie);
        editMovie(updatedMovie);
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="add-movie-form">
        <TextField
          // value={name}
          id="standard-basic"
          label="Name"
          variant="standard"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && errors.name}
          helperText={touched.name && errors.name ? errors.name : ""}
          // onChange={(event) => {setName(event.target.value)}}
        />

        <TextField
          // value={poster}
          id="standard-basic"
          label="Poster"
          variant="standard"
          name="poster"
          value={values.poster}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.poster && errors.poster}
          helperText={touched.poster && errors.poster ? errors.poster : ""}
          // onChange={(event) => {setPoster(event.target.value);}}
        />

        <TextField
          // value={rating}
          id="standard-basic"
          label="Rating"
          variant="standard"
          name="rating"
          value={values.rating}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.rating && errors.rating}
          helperText={touched.rating && errors.rating ? errors.rating : ""}

          // onChange={(event) => {setRating(event.target.value);}}
        />

        <TextField
          // value={summary}
          id="standard-basic"
          label="Summary"
          variant="standard"
          name="summary"
          value={values.summary}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.summary && errors.summary}
          helperText={touched.summary && errors.summary ? errors.summary : ""}

          // onChange={(event) => {setSummary(event.target.value);}}
        />

        <TextField
          // value={trailer}
          id="standard-basic"
          label="trailer"
          variant="standard"
          // onChange={(event) => {setTrailer(event.target.value);}}
          name="trailer"
          value={values.trailer}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.trailer && errors.trailer}
          helperText={touched.trailer && errors.trailer ? errors.trailer : ""}
        />

        {/* <button onClick={addMovie}>Add Movie</button> */}
        <Button
          // onClick={editMovie}
          type="submit"
          variant="outlined"
          color="success"
        >
          Save
        </Button>

        {/* <p>Name:{name}</p>
      <p>Poster:{poster}</p>
      <p>rating:{rating}</p>
      <p>summary:{summary}</p> */}
      </div>
    </form>
  );
}

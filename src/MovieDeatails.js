import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { API } from "./global";
export function MovieDeatails() {
  const { id } = useParams();
  console.log(id);
  
  // const movie = movieList[id];

  const [movie,setMovie] = useState({});


  const getMovie = () =>{
    fetch(`${API}/${id}`, 
          {method:"GET"})
    .then((data)=>data.json())
    .then((mv)=>setMovie(mv));
  }

  
  useEffect(()=>getMovie(),[])



  // const movie={
  //   poster:"https://static.toiimg.com/thumb/87456032.cms?width=137&height=195&imgsize=",
  //   name:"Jai Bhim",
  //   rating:"8.8",
  //   summary:"A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
  //   trailer:"https://www.youtube.com/embed/nnXpbTFrqXA"
  // }
  const styles = {
    color: movie.rating > 8 ? "green" : "red"
  };
  const navigate = useNavigate();

  return (
    <div>
      <iframe width="100%"
        height="650"
        src={movie.trailer}
        title="Jai Bhim - Official Hindi Trailer | Suriya | Amazon Prime Video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className='movie-detail-container'>
        <div className='movie-spec'>
          <h2 className='movie-name'>{movie.name}</h2>
          <p style={styles} className='movie-rating'>⭐{movie.rating}</p>
        </div>
        <p className='movie-summay'>{movie.summary}</p>
        <Button variant="outlined" onClick={() => navigate(-1)} startIcon={<ArrowBackIosIcon/>}>Back</Button>



        {/* <button onClick={() => navigate(-1)}>Back</button> */}
       {/* <Button onClick={() => navigate(-1)} 
                variant="outlined"
                startIcon={ArrowBackIosIcon}
        >
                  Outlined
        </Button>
                 */}
      </div>
    </div>
  );
}

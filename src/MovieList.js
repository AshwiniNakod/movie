import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "./Movie";


export function MovieList() {
  const [movieList,setMovieList] = useState([]);


  const getMovies = () =>{
    fetch("https://6341893e16ffb7e275d36add.mockapi.io/movie", 
          {method:"GET"})
    .then((data)=>data.json())
    .then((mvs)=>setMovieList(mvs));
  }

  const navigate = useNavigate()
  
  useEffect(()=>getMovies(),[])

  const deleteMovie = (id) =>{ 
    fetch(`https://6341893e16ffb7e275d36add.mockapi.io/movie/${id}`, 
    {method:"DELETE"})
    .then(()=>getMovies())

  }  

   
  return (
    <div>

      <div className='movie-list'>
        {movieList.map((mv, index) => (
        <Movie key={mv.id} 
               movie={mv} 
               id={mv.id}
               deleteButton={<button onClick={()=>deleteMovie(mv.id)}>Delete</button>}
               editButton={<button onClick={()=>navigate(`/MovieList/Edit/${mv.id}`)}>Edit</button>}
               
               />))}
      </div>
    </div>

  );
}

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "./Movie";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import IconButton from '@mui/material/IconButton';
import { API } from "./global";



export function MovieList() {
  const [movieList,setMovieList] = useState([]);


  const getMovies = () =>{
    fetch(`${API}/movies`, 
          {method:"GET"})
    .then((data)=>data.json())
    .then((mvs)=>setMovieList(mvs));
  }

  const navigate = useNavigate()
  
  useEffect(()=>getMovies(),[])

  const deleteMovie = (id) =>{ 
    fetch(`${API}/${id}`, 
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
               deleteButton={
                              <IconButton 
                              style={{marginLeft:"auto"}}
                              onClick={() => deleteMovie(mv.id)} 
                              aria-label="Movie details" 
                              color="error">
                                <DeleteIcon />
                            </IconButton>
                            }
               editButton=
                {
                  <IconButton 
                  onClick={() => navigate(`/MovieList/Edit/${mv.id}`)} 
                  aria-label="Movie details" 
                  color="secondary">
                    <EditIcon />
                </IconButton>
                }
              //  <button onClick={()=>navigate(`/MovieList/Edit/${mv.id}`)}>Edit</button>}
               
               />))}
      </div>
    </div>

  );
}

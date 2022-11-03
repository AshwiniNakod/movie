import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Counter } from './Counter';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export function Movie({ movie, id, deleteButton,editButton}) {

  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const styles = {
    color: movie.rating > 8 ? "green" : "red"
  };
  const paraStyle = {
    display: show ? 'block' : 'none'
  };
  return (
    <Card className='movie_container' sx={{height:"min-content"}}>
    <div >
      <img src={movie.poster} alt={movie.name} className="poster" />
      <CardContent>

      <div className='movie-spec'>
        <h2 className='movie-name'>{movie.name}</h2>
        <IconButton 
              onClick={() => { setShow(!show); }} 
              aria-label="Movie summary" 
              color="primary">
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>

        <IconButton 
              onClick={() => navigate(`/Movie/${id}`)} 
              aria-label="Movie details" 
              color="primary">
          <InfoIcon />
        </IconButton>

        <p style={styles} className='movie-rating'>⭐{movie.rating}</p>
      </div>
      {/* <button onClick={()=>{setShow(!show)}}>Toggle Summary</button> */}
      {/* <Link to={`Movie/${id}`}>info</Link> */}
      {/* <button onClick={()=>navigate(`/Movie/${id}`)}>info</button> */}


      <p style={paraStyle} className='movie-summay'>{movie.summary}</p>
      </CardContent>
      <CardActions>
      <Counter /> {deleteButton} {editButton}
      </CardActions>

    </div>
  </Card>
  );
}

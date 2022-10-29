import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Routes, Route, Link,Navigate, useNavigate } from "react-router-dom";
import AddColor from './AddColor';
// import AddMovie from './AddMovie';
import UseEffectEx from './UseEffectEx'
import { createContext } from 'react';
import ComA from './ComA';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { AddMovie } from './AddMovie';
import { MovieList } from './MovieList';
import { Welcome } from './Welcome';
import { MovieDeatails } from './MovieDeatails';
import { NotFound}  from './NotFound';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { TicTacToe } from './TicTacToe';
import { EditMovie } from './EditMovie';
import { BasicForm } from './BasicForm';



const FirstName=createContext();
function App() {

  const colorss=["red","blue","green","yellow"]
  const names=["Ashwini","Vishal","Mayuri"]
  const students=[
    {
      name:"Ashwini" ,
       img:"https://bestprofilepictures.com/wp-content/uploads/2021/04/Cute-DP.jpg"
    },
    {
    name:"Vishal" ,
    img:"https://1.bp.blogspot.com/-W_7SWMP5Rag/YTuyV5XvtUI/AAAAAAAAuUQ/hm6bYcvlFgQqgv1uosog6K8y0dC9eglTQCLcBGAsYHQ/s880/Best-Profile-Pic-For-Boys%2B%25281%2529.jpg"
    }
  ]
  // const url="https://6288f82b10e93797c1612260.mockapi.io/movie";
  const Initial_Movie_list=[
        { 
          poster:"https://www.filmibeat.com/ph-big/2021/06/rrr_16249644106.jpg",
          name:"RRR",
          rating:"7.3",
          summary:"A tale of two legendary revolutionaries and their journey far away from home. After their journey they return home to start fighting back against British colonialists in the 1920s.",
          trailer:"https://www.youtube.com/embed/NgBoMJy386M"
        },
        { 
          poster:"https://assets.gadgets360cdn.com/pricee/assets/product/202202/Prithviraj_Movie-_Poster_1644608993.jpg",
          name:"Samrat Prithviraj",
          rating:"8.8",
          summary:"The heroism of the fearless King Prithviraj Chauhan as he faces off against Muhammad of Ghor.",
          trailer:"https://www.youtube.com/embed/33-CQdPHyjw"
        },
        {
          poster:"https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
          name:"Iron Man 2",
          rating:"6.3",
          summary:"Tony Stark is under pressure from various sources, including the government, to share his technology with the world. He must find a way to fight them while also tackling his other enemies.",
          trailer:"https://www.youtube.com/embed/wKtcmiifycU"
        },
        {
          poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN9nPaLnJ5w4jtPUfG7lGy9GHyCrunJn20R_1_537kvrKbU5v1zzJbpeHxBdkOG74DLaY&usqp=CAU",
          name:"Attack",
          rating:"9.0",
          summary:"A cyber soldier who has lost everything puts his life on the line to serve his nation, willing to make the ultimate sacrifice.",
          trailer:"https://www.youtube.com/embed/Ma3Y-qekYos"
        },
        {
          poster:"https://static.toiimg.com/thumb/87456032.cms?width=137&height=195&imgsize=",
          name:"Jai Bhim",
          rating:"8.8",
          summary:"A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
          trailer:"https://www.youtube.com/embed/nnXpbTFrqXA"

        },
        { 
          poster:"https://www.filmibeat.com/ph-big/2021/06/rrr_16249644106.jpg",
          name:"RRR",
          rating:"7.3",
          summary:"A tale of two legendary revolutionaries and their journey far away from home. After their journey they return home to start fighting back against British colonialists in the 1920s.",
          trailer:"https://www.youtube.com/embed/NgBoMJy386M"

        },
        { 
          poster:"https://assets.gadgets360cdn.com/pricee/assets/product/202202/Prithviraj_Movie-_Poster_1644608993.jpg",
          name:"Samrat Prithviraj",
          rating:"8.5",
          summary:"The heroism of the fearless King Prithviraj Chauhan as he faces off against Muhammad of Ghor.",
          trailer:"https://www.youtube.com/embed/33-CQdPHyjw"

        },

  ]
  
  const [movieList,setMovieList] = useState(Initial_Movie_list)
  const navigate= useNavigate();
  const[mode,setMode] = useState("dark")

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper elevation={0} style={{minHeight:"100vh",borderRadius:"0px"}}>
    <div className="App">
      {/* {colorss.map(c=>
        <li>{c}</li>
      )} */}
      {/* <Message name="Ashwini"  img="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cute-DP.jpg"/>
      <Message name="Vishal" img="https://1.bp.blogspot.com/-W_7SWMP5Rag/YTuyV5XvtUI/AAAAAAAAuUQ/hm6bYcvlFgQqgv1uosog6K8y0dC9eglTQCLcBGAsYHQ/s880/Best-Profile-Pic-For-Boys%2B%25281%2529.jpg"/> */}
      
      {/* {names.map(nm => <Welcome name={nm }/>)}
            <Number/> */}
            {/* <Toggle/> */}
      

      {/* {students.map(student=><Message name={student.name} img={student.img}/>)} */}
            
          {/* <FirstName.Provider value={"Vishal"}>
            <ComA/>
          </FirstName.Provider> */}


          <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={()=>navigate('/')} >HOME</Button>
          <Button color="inherit" onClick={()=>navigate('/BasicForm')} >BasicForm</Button>

          <Button color="inherit" onClick={()=>navigate('/AddColor')} >ADDCOLOR</Button>
          <Button color="inherit" onClick={()=>navigate('/MovieList')} >MovieList</Button>
          <Button color="inherit" onClick={()=>navigate('/MovieList/AddMovie')} >AddMovie</Button>
          <Button color="inherit" onClick={()=>navigate('/Tic-Tac-toe')} >Tic Tac Toe </Button>
          <Button color="inherit"
            startIcon = {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />} 
            onClick={()=>setMode(mode === "light" ? "dark" : "light")} >
            
              {mode === 'dark' ? 'light' : 'dark'} mode</Button>

        </Toolbar>
           </AppBar>


        {/* <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li><Link to ='/AddColor'>AddColor</Link></li>
            <li>
              <Link to='/MovieList'>MoviesList</Link>
            </li>
            <li>
              <Link to="/AddMovie">AddMovie</Link>
            </li>
            <li>
              <Link to ="/UseEffectEx">UseEffecteEx</Link>
            </li>
          </ul>
        </nav> */}

        <section className='route-container'>

        <Routes>
          <Route path="/" element={names.map(nm => <Welcome name={nm }/>)} />
          <Route path="/AddColor" element={<AddColor/>} />
          <Route path="/Tic-Tac-toe" element={<TicTacToe/>} />
          <Route path="/MovieList" element={<MovieList />} />
          <Route path="/Movie/:id" element={<MovieDeatails movieList={movieList}/>}/>
          <Route path="/films" element={<Navigate replace to="/MovieList"/>}/>
          <Route path="/MovieList/AddMovie" element={<AddMovie />} />
          <Route path="/MovieList/Edit/:id" element={<EditMovie/>} />
          <Route path="/BasicForm" element={<BasicForm/>} />


          <Route path="/404" element={<NotFound/>} />
          {/* <Route path="*" element={<NotFound/>} /> */}
          
          {/* <Route path="/UseEffectEx" element={<UseEffectEx/>} />           */}
        </Routes>
        </section>

            {/* <UseEffectEx /> */}
    </div>
    </Paper>
    </ThemeProvider>

  );
}



 


export default App;
export {FirstName};
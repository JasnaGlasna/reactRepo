// import {Movies} from './components/Movies';
import {useState,useEffect} from 'react'; 
import { SignUp } from './components/SignUp';
// import {LifecycleExample} from './components/LifecycleExample';

// const filmovi = [
//   {name:"The Dark Knight",date:2008,genre:"Crime,Drama,Action", plot:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",imdbLink:"https://www.imdb.com/title/tt0468569/?ref_=nv_sr_srsg_0_tt_7_nm_1_q_the%2520dark",imgUrl:'https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080'},
//   {name:"Back to the Future",date:1985,genre:"Adventure,Comedy,Sci-Fi",plot:"Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",imdbLink:"https://www.imdb.com/title/tt0088763/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_back%2520to%2520the",imgUrl:"https://resizing.flixster.com/kMGZUDCcLHWMZHJKwKwNqbVZev8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZiZmZkNjJhLTg3YzktNGEzZC05Zjg3LTE3NzhhODM4NTMwNi5qcGc="},
//   {name: "Pulp Fiction",date:1994,genre:"Crime,Drama",plot:"The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",imdbLink:"https://www.imdb.com/title/tt0110912/?ref_=nv_sr_srsg_0_tt_6_nm_2_q_pulp",imgUrl:"https://www.usatoday.com/gcdn/presto/2019/10/11/USAT/b2aa1633-544e-436a-a325-10aac31f11b6-D01_UMA_PULP_17_LLINE.JPG"}
// ];

export function App(){

  const [promenliva,setPromenliva] = useState("Vrednost 1");
  const [inputValue,setInputValue] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [brojac,setBrojac] = useState(0);

  // function changeValue(){
  //   setPromenliva("Nova Vrednost 2")
  // }

  function handleChangedValue(event){
      setInputValue(event.target.value)
  }


  useEffect(()=>{
    console.log("Username:",username)
    console.log("Password:",password)
  },[username,password]) // [] -> dependency array ako e prazen ova ke bide componentDidMount, za componentDidUpdate dodavame elementi(promelnivi) od state za koi ke se prati nivnata vrednost

  return(
    <div id="app">
        <h2>App</h2>
        {/* <Movies filmovi={filmovi}/> */}
      {/* <LifecycleExample/> */}
      <SignUp/>
      <p>State: {promenliva}</p>
      <button onClick={()=>{setPromenliva("Nova Vrednost 3")}}>Change Me !</button>
      <br/>
      <br/>
      <input
        type="text"
        placeholder='Enter something here'
        value={inputValue}
        onChange={handleChangedValue}
      />
      <h3>{inputValue}</h3>
      <br/>
      <input
        type="text"
        placeholder='Enter Username'
        value={username}
        onChange={(event)=>{setUsername(event.target.value)}}
      />
      <br/>
      <br/>
      <input
        type="password"
        placeholder='Enter Password'
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
      />
      <h2>Counter: {brojac}</h2>
      <img
      src={"https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"}
      alt="Batman"
      onClick={()=>{setBrojac(brojac + 1)}}
      />
    </div>
  )
}
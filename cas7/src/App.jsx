import React , {useEffect, useState} from 'react';
import { Navigation } from './components/Navigation';
import {Posts} from './components/Posts';
import {Todos} from './components/Todos'
import {Routes, Route} from 'react-router-dom';
export function App(){
  const [posts,setPosts] = useState([]);
  function getPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(json=>setPosts(json))
    .catch((err)=>alert(err))
  };
  useEffect(()=>{
    getPosts();
  },[]);
  return(
    <div id="app">
      <Navigation/>
      <Todos/>
      <Routes>
        <Route path="/posts" element={<Posts postsList={posts}/>}/>
        <Route path="/todos" element ={<Todos/>}/>
      </Routes>

    </div>
  )
}
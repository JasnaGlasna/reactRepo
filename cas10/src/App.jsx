// import  Hello  from "./components/Hello"
import { HelloFunc } from "./components/HelloFunc";
import {sayGoodbay} from './actions/SayHelloActions'
export function App() {

  return(
    <div id="app">
      <h1>App</h1>
      <HelloFunc/>
    </div>
  )
}
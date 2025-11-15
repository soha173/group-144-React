import { createContext, useEffect, useReducer, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes , Route , Link } from 'react-router-dom'
import { Header } from './header'
import { Footer } from './footer'
import { Error } from './error'
import { Details } from './postDetails'
import { Home } from './home'

function reducer (state , action){
  switch (action){
  case "plus":
    return state +1;
    
  case "minus":
    return state -1;
  case "reset":
    return 0;

    default: state;
}
}

function App() {
const [state , dispatch ] = useReducer(reducer , 0)

    return(
    <>

    <nav>

      <Link to= '/header'>header</Link> || 
      <Link to= '/footer'>footer</Link> ||
      <Link to= '/home'>home</Link> ||
      <Link to= '/post/details/:id'>post</Link>
    </nav>
    <Routes> 
      <Route path='/header' element={<Header />}/>
      <Route path='/footer' element={<Footer />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='*' element={<Error />}/>

      <Route path='/post'>
      <Route path='details/:id' element={<Details />}/>
      </Route>
   
      </Routes>
      
    <div>
      <button onClick={()=>dispatch("plus")}>+</button>
      <button onClick={()=>dispatch("minus")}>-</button>
      <button onClick={()=>dispatch("reset")}>Reset</button>
      <p>{state}</p>
      
    </div>

    </>
  )

}

export default App

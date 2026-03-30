import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import './App.css'
import stikers from "./stikerpak/stikers.json"
import Mogo from "./mogo/Mogo";
import Golden from "./golden/Golden";
import Eats from './eats/Eats';
import StickerList from './stikerpak/StikerList';
function App() {
  return (
    <>
      {/* <Mogo/> */}
      {/* <Golden/> */}
      {/* <Eats/> */}
      <StickerList stikers={stikers}/>
    </>
  )
}

export default App

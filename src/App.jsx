import React from "react";
import "./App.css";
import GetPokemon from "./components/GetPokemon";
import CardRender from "./components/CardRender";
import { DndProvider } from "react-dnd";
import { MultiBackend } from 'react-dnd-multi-backend'
import { HTML5toTouch } from 'rdndmb-html5-to-touch' // or any other pipeline
import Test from "./components/test";

function App() {
  return (
      <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <div className="font-pokeFont">
        <CardRender />
        {/* <Test /> */}
      </div>
      </DndProvider>
    
  );
}

export default App;

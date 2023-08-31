import React from "react";
import "./App.css";
import { DndProvider } from "react-dnd";
import { MultiBackend } from 'react-dnd-multi-backend'
import { HTML5toTouch } from 'rdndmb-html5-to-touch' // or any other pipeline
import {Route,Routes} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardRender from "./components/CardRender";
import EnterPage from "./components/EnterPage";



function App() {
  return (
      <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <div className="font-pokeFont">
      <ToastContainer autoClose={2000} 
        position = {toast.POSITION.BOTTOM_CENTER}/>
        <Routes>
        <Route path="/" element={<EnterPage />} />
        <Route path="/home" element={<CardRender />} />
        </Routes>
      </div>
      </DndProvider>
  );
}

export default App;

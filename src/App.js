import React from "react"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./component/Home/Home"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/whatsapp-react/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Playnigvideo from "./components/Playingvideo";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import youtubecontex from "./contex/youtubecontex";
function App() {
  const [togSidebar, settogSidebar] = useState(false);
  const [click, setclick] = useState("New");

  return (
    <youtubecontex.Provider value={{ click, setclick, togSidebar }}>
      <BrowserRouter>
        <Navbar toggle={{ togSidebar, settogSidebar }} />
        <Routes>
          <Route
            path="/"
            element={<Home toggle={{ togSidebar, settogSidebar }} />}
          />
          <Route path="/search/:searchQuery" element={<Search />} />
          <Route path="/video/:id" element={<Playnigvideo />} />
        </Routes>
      </BrowserRouter>
    </youtubecontex.Provider>
  );
}

export default App;

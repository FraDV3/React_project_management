import Header from "./components/Header.jsx";
import ListOfProjects from "./components/ListOfProjects.jsx";
import { useState } from "react";

function App() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-800">
      <Header />     
      <main>
        <div className="text-center">
          <p className="text-stone-600">No project selected.</p>
        </div>
        <ListOfProjects />
      </main>
    </div>
  );
}

export default App;

import React from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Notes from "./components/Notes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=''>
      <Navbar />
      <body className='h-[200px] w-full flex flex-row justify-center items-center'>
        <Sidebar />
        <Notes />
      </body>
      <Footer />
    </div>
  );
};

export default App;

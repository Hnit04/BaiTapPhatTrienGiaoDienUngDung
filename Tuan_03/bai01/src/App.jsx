import React, { useState } from "react";
import FiltersSidebar from "../../bai01/src/components/FiltersSidebar";
import NoResults from "../../bai01/src/components/NoResults";
import Header from "../../bai01/src/components/Header"; 
import "./App.css";

function App() {
  const [searchTerm] = useState("");

  return (
    <div>
      <Header /> 
      <div className="app-container">
        <FiltersSidebar />
        <div className="content-area">
          <NoResults searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  );
}

export default App;

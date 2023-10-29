import React from 'react';
import NewsList from "./components/NewList";
import Footer from  './components/footer';
import Header from  './components/header';


function App() {
  return (
    <div className="App">
        <Header />
      <NewsList />
      <Footer/>
    
     
    </div>
  );
}

export default App;

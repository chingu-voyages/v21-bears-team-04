import React, {useEffect} from 'react';
import Nav from '../../components/Nav/Nav';
import { Footer } from '../../components';
import Homepage from '../../components/Homepage/Homepage';
// import {getDashboard} from "../../api/api"


function App() {
  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJ1c2VyMSIsImVtYWlsIjoidXNlcjFAZ21haWwuY29tIiwiaWF0IjoxNTk1NDg2Mzk1LCJleHAiOjE1OTU1MDc5OTV9.K017NZcNh3AcAhnVPV6_cK0gLVnNJlR-WPaqfMKviYA"
  // useEffect( ()=> {
    

  //     getDashboard(2, token).then(data => console.log("data", data["myActivities"][0])).catch(err => console.log(err))
      

    
    
  // }, [])
  

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Homepage />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import {Home} from "./Pages/Home";
import {About} from "./Pages/About";


 function App() {
     return (
         <Router>
             <div className='container pt-5'>
                     <Routes>
                         <Route exact path={"/"} component={Home}/>
                         <Route path={"/about"} component={About}/>
                     </Routes>
             </div>
         </Router>)
 }
export default App;
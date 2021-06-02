import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Router } from "./router.Router";
import {Page1} from "./Page1";
import {Page1DetailA} from "./Page1DetailA";
import {Page1DetailB} from "./Page1DetailB";
import { Page2 } from "./Page2";
import { Home } from "./Home";


import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/Page1">Page1</Link>
        <br />
        <Link to="/Page2">Page2</Link>
        <br />
      </div>
      <Router />

      <Switch>
      <Route exact path="/">
           <Home />
         </Route>
         <Route 
         path="/page1"
         render={({ match: { url }}) => (
           <Switch>
             <Page1 />
           </Switch>
         )
         } />
           <Page1 />
         </Route>
         <Route path="/page1/detailA">
           <Page1DetailA />
         </Route>
         <Route path="/page1/detailB">
           <Page1DetailB />
         </Route>
         </Switch>
         <Route path="/page2">
           <Page2/>
         </Route>
      </Switch>
   </BrowserRouter>
  );
}

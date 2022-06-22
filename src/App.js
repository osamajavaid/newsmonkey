// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
// import NewsItem from './components/NewsItem';
import News from "./components/News";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
            <Routes>
             <Route exact path="/" element={<News key='1' pageSize={6} country='in' category='general'/>} />
             <Route exact path="/business" element={<News key='2' pageSize={6} country='in' category='business'/>} />
             <Route exact path="/sports" element={<News key='3' pageSize={6} country='in' category='sports'/>} />
             <Route exact path="/technology" element={<News key='4' pageSize={6} country='in' category='technology'/>} />
             <Route exact path="/science" element={<News key='5' pageSize={6} country='in' category='science'/>} />
             <Route exact path="/entertainment" element={<News key='6' pageSize={6} country='in' category='entertainment'/>} />
             <Route exact path="/health" element={<News key='7' pageSize={6} country='in' category='health'/>} />
            </Routes>
        </div>
      </Router>
    );
  }
}

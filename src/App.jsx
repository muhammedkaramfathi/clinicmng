import { useState } from 'react'
import { Container } from "react-bootstrap";
import * as BooksApi from "./BooksAPI";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Addnewpatient from './components/Addnewpatient';
import Search from './components/Search';
import ForgotPassword from './components/ForgotPassword';
import { useEffect } from "react";
import Profile from './components/Profile';
import '@fortawesome/fontawesome-svg-core/styles.css';

function App() {
  const [boks, setBoks] = useState([]);
  //  get all books from api
    useEffect(() => {
      BooksApi.getAll().then((res) => {
        setBoks(res);
        console.log(res);
      });
    }, []);
    // update shelf state 
    const shelfUpdater = (book, shelf) => {
      book.shelf = shelf;
      setBoks((allbooks) => {
        return allbooks.filter(
          (bok) => bok.id !== book.id
          ).concat([book]);
      });
      BooksApi.update(book, shelf);
    };
  return (
    <>
              <div className="w-100 App" >
                <Router>
                  <Routes>
                      <Route path="/" element={<Login />} />
                      <Route path="/addnewpatient" element={<Addnewpatient  />}  />
                      <Route path='/search' element={<Search boks={boks} shelfUpdater={shelfUpdater} />}/>
                      <Route path='/profile' element={<Profile />}/>
                      <Route path="/forgotpassword" element={<ForgotPassword />} style={{ maxWidth: "800px" }}/>
                  </Routes>
                </Router>
              </div>
    </>
  )
}

export default App

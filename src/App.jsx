import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Page1 from './Page1';
import Page2 from './Page2';

const App = () => {
    return (
        <div className="App">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/page1">Page 1</Link>
                    </li>
                    <li>
                        <Link to="/page2">Page 2</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/page1" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
            </Routes>
        </div>
    );
};

const Home = () => (
    <div>
        <h1>Home Page</h1>
        <p>Welcome to the home page!</p>
    </div>
);

export default App;

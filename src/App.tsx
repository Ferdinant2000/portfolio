import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Works from './components/Works';
import Blogs from './components/Blogs';
import Contact from './components/Contact';

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <About />
            <Resume />
            <Works />
            <Blogs />
            <Contact />
        </div>
    );
};

export default App;
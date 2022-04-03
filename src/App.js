import React from 'react';
import './App.css';
import './components/TopNavBar';
import TopNavBar from './components/TopNavBar';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className='app'>
            <TopNavBar />
            <MainSection />
            <hr style={{color: '#6b6a6a', margin: 0, height: '0.5px'}}/>
            <Footer />
        </div>
    )
}

export default App;
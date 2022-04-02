import React from 'react';
import BottomNavBar from './BottomNavBar';
import SearchArea from './SearchArea';

const MainSection = () => {
    return (
        <div className='main-section'>
            <BottomNavBar />
            <SearchArea />
        </div>
    );
}

export default MainSection;
import React from 'react';

const BottomNavBar = () => {
    return (
        <div className='bottomNavBar'>
            <div className='bottomNavBarLeft'>
                <a href="../index.js"><p>TODAY</p></a>
                <a href="../index.js"><p>TAGS</p></a>
                <a href="../index.js"><p>STATS</p></a>
                <a href="../index.js"><p>ANALYSIS</p></a>
                <a href="../index.js"><p>ALERTS</p></a>
            </div>
            <div className='bottomNavBarRight'>
                <a href="../index.js"><p>LOG IN</p></a>
                <div className="signUpButton">
                    <a href="../index.js"><p>&gt; SIGN UP</p></a>
                </div>
            </div>
        </div>


    );
}

export default BottomNavBar;
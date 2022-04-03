import React from "react";
import greyNoiseImage from '../images/greynoise-logo.png';
import SearchBar from "./SearchBar";

const SearchArea = () => {
    return (
        <div className="search-area">
            <img className='main-img' src={greyNoiseImage} alt="grey-noise logo" />
            <SearchBar />
            <div className="under-search">
                <p><em>Today's Top Anomalies:</em></p>
                <a style={{padding: 0}} href="../index.js"><p className="explore-btn">&gt; Explore<br className="trends-break"/> Trends</p></a>
            </div>
        </div>
    );
}

export default SearchArea;
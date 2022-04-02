import React from "react";
import greyNoiseImage from '../images/greynoise-logo.png';
import SearchBar from "./SearchBar";

const SearchArea = () => {
    return (
        <div className="search-area">
            <img height='100px' width='100px' src={greyNoiseImage} alt="grey-noise logo" />
            <SearchBar />
            <div className="under-search">
                <p>Today's Top Anomalies:</p>
                <a><p>&gt; Explore Trends</p></a>
            </div>
        </div>
    );
}

export default SearchArea;
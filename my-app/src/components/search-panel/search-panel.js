import React from 'react';
import './search-panel.css';
const SearchPanel = () => {
    return(
        <input
            className="from-control search-input"
            type="text"
            placeholder="Поиск по записям"
        />
    )
    
}

export default SearchPanel;
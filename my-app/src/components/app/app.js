import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel/';
import PostStatusPanel from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {

    const data = [
        {label:"Going to learn React", important: true, id: 'wee'},
        {label:"That is good", important: false, id: 'qwe'},
        {label:"I nead a break...", important: false, id: 'eqwdd'}
    ];

    return (
        <div className="app">
            <AppHeader/>
            <div className='search-panel d-flex'>
                <SearchPanel/>
                <PostStatusPanel/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}

export default App; 
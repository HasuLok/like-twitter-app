import React from 'react';
import styled from 'styled-components';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel/';
import PostStatusPanel from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
        

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

// const StyledAppBlock = styled(AppBlock)`
//     background-color:grey;
// `;


const App = () => {

    const data = [
        {label:"Going to learn React", important: true, id: 'wee'},
        {label:"That is good", important: false, id: 'qwe'},
        {label:"I nead a break...", important: false, id: 'eqwdd'}
    ];

    return (
        <AppBlock>
            <AppHeader/>
            <div className='search-panel d-flex'>
                <SearchPanel/>
                <PostStatusPanel/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </AppBlock>
    )
}

export default App; 



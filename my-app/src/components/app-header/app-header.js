import React from 'react';
import styled from 'styled-components';

import './app-header.css';

const Header = styled.div`
    display:flex;
    align-items: flex-end;
    justify-content: space-between;
    h1{
        font-size: 26px;
        color: ${props => props.colored ? 'red' : 'black'}
        :hover {
            color:blue;
        }
    }
    h2{
        font-size: 1.2rem;
        color: grey;
    }
`;
// передам сюда props = {liked, allPosts} что бы динам-ки отрисовывать лайки посты
const AppHeader = ({liked, allPosts}) => {
    return(
        <Header as='a'>
            <h1>Maksim Oreshkevich</h1>
            <h2>{allPosts} Записей, из них понравилось {liked}</h2>
        </Header>
    )
}

export default AppHeader;
import React from 'react';
import './post-status-filter.css';
import { Button } from 'reactstrap';

const PostStatusPanel = () => {
    return(
        <div className="btn-group">
            <Button outline color='info'>Все</Button>
            
            <button type="button" className="btn btn-outline-secondary">Понравилось</button>
        </div>
    )
}

export default PostStatusPanel;
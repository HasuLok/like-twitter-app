import React, { Component } from 'react';
import './post-status-filter.css';
// import { Button } from 'reactstrap';

// рефакторим ф-ю в класс 

export default class PostStatusPanel extends Component{
    constructor(props){
        super(props);
        this.buttons =[
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'}
        ]
    }
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            // деструктуризируем  проппсы
            const {filter, onFilterSelect} = this.props;

            const active = filter === name;//  будем сравнивать пар-р name  с тем фильтром что пришел сверху 
            const clazz = active ? 'btn-info' : 'btn-outline-secondary'; 
            return(
                <button 
                    key={name} 
                    type="button"
                    className={`btn ${clazz}`}
                    onClick={() => onFilterSelect(name)}  // запускает онфильтр селект и получает имя нейм (уникальный ключ) либо алл либо лайк
                    >{label}
                </button>
            )
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }   

        
}


// старая ф-ия

// const PostStatusPanel = () => {
//     return(
//         <div className="btn-group">
//             <Button outline color='info'>Все</Button>
            
//             <button type="button" className="btn btn-outline-secondary">Понравилось</button>
//         </div>
//     )
// }

// export default PostStatusPanel;
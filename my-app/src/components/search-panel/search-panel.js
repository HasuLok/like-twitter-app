import React, { Component } from 'react';
import './search-panel.css';

// данный модуль будет сод-ть стейт который ввел пользватель по этому переделаем его в класс 

export default class SearchPanel extends Component{
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
        // привязываем нашу ф-ю 
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }
    onUpdateSearch(e){
        // созадм переменную куда получу вэлью из инпута
        const term = e.target.value;
        // запишем в стейт то что ввел пользватель 
        this.setState({term:term});
        //передам в виде пропс  в апп т.к. нужно обновить стейт в апп жс 
        this.props.onUpdateSearch(term);
    }
    render(){
        return(
            <input
                className="from-control search-input"
                type="text"
                placeholder="Поиск по записям"
                onChange={this.onUpdateSearch}  // добавил стандартный обработчик с кастомной ф-ей которую выше опишу 
            />
        )
    }
}










// const SearchPanel = () => {
//     return(
//         <input
//             className="from-control search-input"
//             type="text"
//             placeholder="Поиск по записям"
//         />
//     )
    
// }

// export default SearchPanel;
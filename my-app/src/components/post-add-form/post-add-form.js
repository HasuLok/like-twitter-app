import React, { Component } from 'react';
import './post-add-form.css';

// user ввел что то  в инпут 
// нажал бтн сабмит => отправил данные на сервер 
//  отрисовать пост 

// поскольку будет внутреннее состояние переделаем ф-ю в класс 

export default class PostAddForm extends Component{
    constructor(props){
        super(props);
        // я хочу записывать то что вводит юзер - в стейт нашего компанента 
        this.state ={
            text: ''
        }
        //биндим наши осбытия
        this.onValueChange =  this.onValueChange.bind(this);
        this.onSubmit =  this.onSubmit.bind(this);

    }
    onValueChange(e) {  // передам event что бы юзать e.target
        this.setState({
            text: e.target.value
        })

    }
    // 
    onSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state.text);
        // добавим очистку инпута  (обязательно должен быть контролируемым эл-м ) 
        // добавим импуту это св-во value={this.state.text}  
        this.setState({    
            text: ''
        });
        
    }

    render(){
        return(
            <form 
            // вешаем событие онсабмит не на кнопку а на ФОРМУ <form></form>!!!! 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>   
                <input
                    type ="text"
                    placeholder="О чем вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange} // добавили обр-к с-ий с какой-то ф-й которую пропишем внутри класса
                    value={this.state.text}  // контролируемый элимент  = связь между стейтом и эл-том
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    Добавить
                </button>
            </form>
        )
    }
}

// старый  метод через ф-ю

// const PostAddForm = ({onAdd}) => {
//     return(
//         <form className="bottom-panel d-flex">
//             <input
//                 type ="text"
//                 placeholder="О чем вы думаете сейчас?"
//                 className="form-control new-post-label"
//             />
//             <button
//                 type="submit"
//                 className="btn btn-outline-secondary"
//                 onClick={() => onAdd('hello')}>
//                 Добавить
//             </button>
//         </form>
//     )
// }

 
// export default PostAddForm; 
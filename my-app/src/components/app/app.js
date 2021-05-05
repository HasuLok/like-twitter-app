import React, { Component } from 'react';
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
//  наследование стилей
// const StyledAppBlock = styled(AppBlock)`
//     background-color:grey;
// `;


export default class App extends Component  {

    constructor(props){
        super(props);
        this.state = {
            data : [
                {label:"Going to learn React", important: true, like: false, id: 1},
                {label:"That is good", important: false, like: false, id: 2},
                {label:"I nead a break...", important: false, like: false, id: 3}
            ],
            term: '',    //это состояние будет сообщать пр-ю какю  инфу ищет юзр
            filter: 'all'   //это состояние будет сообщать пр-ю как именно отфильровать посты  по дефолту будет показывать все посты 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);

        this.onUpdateSearch = this.onUpdateSearch.bind(this);

        this.onFilterSelect = this.onFilterSelect.bind(this);

        this.maxId = 4;
    }
    deleteItem(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
                //не изменяя стейт создаем новый массив и возвращаем его из ф-и
                // используем промежуточные переменные 
            const before = data.slice(0, index);  
            const after = data.slice(index + 1);
                // можно и без const newArr =[...data.slice(0, index), ...data.slice(index + 1)];
            const newArr =[...before, ...after];
            return{
                data: newArr
            }

        });
    }
    addItem(body){
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return{
                data:newArr
            }
        });
    }
    onToggleImportant(id){
        this.setState(({data}) => {
            // тоже самое что и с лайками только меняем important : !old.important
           const index = data.findIndex(elem => elem.id === id);
           
           const old = data[index];
           
           const newItem = {...old, important: !old.important}
           
           const newArr =[...data.slice(0, index), newItem, ...data.slice(index + 1)];
           //Возвращаем новый объект
           return{
               data: newArr
           }

       });
    }
    onToggleLiked(id){
       this.setState(({data}) => {
             // находим номер  поста
            // сравниваем каждый элемент в нашем массиве и если ид совпадает с ид переданной функцией то это и есть наш объект
            const index = data.findIndex(elem => elem.id === id);
            // получаем этот элемент по индексу 
            const old = data[index];
            // ...old, like:!old.like запишит в newItem старый объект и перепишет св-во like( если было false станет !false = true)
            const newItem = {...old, like: !old.like}
            // неоходим сформировать новый массив (что бы не менять стейт)
            // старый массив data разрезали(slice) до нашего поста, вставили наш пост newItema с измененным св-м LIKE
            // и добавили кусок того что осталось после (...before,пост с измененным стейтом ,...after)(являеться новым обьектом)
            const newArr =[...data.slice(0, index), newItem, ...data.slice(index + 1)];
            //Возвращаем новый объект
            return{
                data: newArr
            }

        });
    }
    // напишу ф-ю которая исчет посты получая данные items в которых мы будем искать посты и строка поиска term
    serachPost(items, term){
            // через эту функцию нужно прогнать всю data и найти совпадения в этих данных 
            // если пользователь ничего ещё не ввел мы ничего не делаем 
        if(term.length === 0){
            return items;
        } 
        // если юзер что то ввел 
        //  в каждом эл-те будем находить св-во label и внутри этого св-ва будем находить то что ввел юзер
        // если мы этого не нашли то мы получим -1 
        // функция будет возвращать те посты в которых будет  то что ввел юзр
        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        });

             

    }
    // ф-я апдейтит term 
    onUpdateSearch (term){
        this.setState({term})
    }
    // ф-я принимает массив данных которые мы хотим фильтр-ть items 
    // и filter - это то правила по которому мы будем фильтровать 
    filterPost(items, filter){
        if (filter === 'like'){
            return items.filter(item => item.like ) // получим все эл-ты у которых лайк=тру
        }else{
            return items; // filter = all будем возвращать все э-ты 
        }

    }
    onFilterSelect(filter){
        this.setState({filter})
    }

    render(){
        // создадим переменные что бы посчитать общее кол-во постов и для счетчика liked posts (счетчик в AppHeader)

        // нужно отфильтровать  стейт.дата и получить кол-во постов у которых liked = true  
        // filter отдает новый массив со всеми эл-ми у который св-во лайк=тру  кл-во постов = arr.length
    // const liked = this.state.data.filter(item => item.like).length;
        // кол-во всех постов это длинна массива 
    // const allPosts = this.state.data.length;
        // Теперь можно передать их в AppHeader для исп-вания

        // сократим немного запись сделав диструкт-е присв-е
        const  {data, term, filter} = this.state; 

        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        // создам п-ю с видимыми постами на основании того что ввел юзр
        // сформируем все посты которые прошли 2ую фильтрацию 
        // 1 фильтруються по строке которую юзер ввел или не ввел
        // 2 фильтруються по нашему фильтру (лайков, лайк тру )
        const visiblePosts = this.filterPost(this.serachPost(data, term), filter);


        return (
            <AppBlock>
                <AppHeader
                liked={liked}
                allPosts={allPosts}/>
                <div className='search-panel d-flex'>
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}   // ф-я следит за стейтом и меняет его 
                    />        
                    <PostStatusPanel
                    filter={filter}
                    onFilterSelect={this.onFilterSelect }/> 
                </div>
                <PostList posts={visiblePosts}             // вместо всех  постов {this.state.data} будет отображать только те которые ищет юзр  
                onDelete={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleLiked={this.onToggleLiked}/>
                <PostAddForm
                onAdd={this.addItem}/>
            </AppBlock>
        )
    }
    

    
}

 



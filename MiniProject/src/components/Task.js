import React, {useState} from 'react';
import { StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import PropTypes from 'prop-types';

import IconButton from './IconButton';
import { images } from '../Images';
import Input from './Input';

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: ${({theme}) => theme.itemBackground};
    border-radius: 10px;
    padding: 5px;
    margin: 3px 0px;
`;

const Contents = styled.Text`
    flex: 1;
    font-size: 20px;
    color: ${({theme, completed}) => completed? theme.done :  theme.text};
    text-decoration-line: ${({completed}) => completed? 'line-through' : 'none'} ;
`;

const Task = ({item, deleteTask, toggleTask, updateTask}) => {
    console.log('Task, Task, deleteTask = ' , deleteTask);

    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(item.title);

    const _updateButtonPress = () => {
        setIsEditing(true);
    };

    const _onSubmitEditing = () => {
        if(isEditing == true)
        {
            // isEditing => false;
            // task에서 해당 task를 수정한다.

            setIsEditing(false);
            const currentTask = Object.assign({}, item, {title});
            updateTask(currentTask);
        }
    };

    const _onBlur = () => {
        // edit false
        // 값, ==> item.title
        if(isEditing)
        {
            setIsEditing(false);
            setTitle(item.title);
        }
    };

    return isEditing ? (

            <Input
                value={title}
                onChangeText={ title => setTitle(title) }
                onSubmitEditing={_onSubmitEditing}
                onBlur={_onBlur}
            />

        
    ) :   
    (
        <Container>
            <IconButton 
                type={item.completed ? images.completed : images.uncompleted}
                id={item.id}
                onPressOut={toggleTask}
            />
            <Contents completed={item.completed}>{item.title} </Contents>

            {item.completed || ( 
                <IconButton 
                    type={images.update} 
                    onPressOut={_updateButtonPress}
                />
            )}
       
       

            <IconButton 
                type={images.delete} 
                id={item.id} 
                onPressOut={deleteTask}  
            />
        </Container>
    );


};

Task.propTypes = { 
    item: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
};

                                            // id={props.item.id}
export default Task;
import React, {useState} from 'react';
import { StatusBar, Dimensions } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';

import Input from './components/Input';
import IconButton from './components/IconButton';
import { images } from './Images';
import Task from './components/Task';

import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from 'expo-app-loading';



const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({theme}) => theme.background };
    align-items: center;
    justify-content: flex-start;
`;

const Title = styled.Text`
    font-size: 40px;
    font-weight: 600;
    color: ${({theme}) => theme.main };
    align-self: flex-start;
    margin:0px 20px;

`;

const List = styled.ScrollView`
    flex:1;
    width:${({width}) => width -40}px;
`;


const App = () => {
    //console.log("App Start2");

    const width = Dimensions.get('window').width;
    const [ newTask, setNewTask] = useState('');
    const [ tasks , setTasks ] = useState({ });

    const [ isReady, setIsReady ] = useState(false);


    const _onChangeText = text => {
        //console.log('change !!! ', text);
        setNewTask(text);
        
    };


    const _saveTask = async tasks => {
        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
            setTasks(tasks);
        } catch (error) {
            console.log('error ' , e);
        }
    };

    const _loadTask = async ()  => {
        // 저장된 데이터 이름 : "tasks"
        console.log('loadTask');
        const loadTasks = await AsyncStorage.getItem('tasks');
        console.log('load Tasks = ', loadTasks);
        setTasks(JSON.parse(loadTasks || '{}'));
    };

    const _addTask = () => {
        console.log('add task!!!');
        alert(`스케쥴이 등록되었습니다. : ${newTask}`);

        const ID = Date.now().toString();
        console.log('ID ' , ID);
        const newTaskObject = {
            [ID] : { id: ID, title: newTask, completed: false  },
        };

        setNewTask('');  // 입력창 비우기
        //setTasks({ ...tasks, ...newTaskObject } );
        _saveTask({ ...tasks, ...newTaskObject } );
        

    };

    const _deleteTask = id => {
        console.log('App, _deleteTask, id = ' , id);
        const cloneTasks = Object.assign({}, tasks);
        delete cloneTasks[id];

        // setTasks(cloneTasks); 
        _saveTask(cloneTasks); 

    };

    const _toggleTask = id => {
        console.log('App, _toggleTask, id = ' , id);
        const cloneTasks = Object.assign({}, tasks);
        cloneTasks[id]['completed'] = !cloneTasks[id]['completed'];

        // setTasks(cloneTasks);
        _saveTask(cloneTasks);
    };

    const _updateTask = item => {
        console.log('App, _updateTask, item.title = ', item.title);
        const cloneTasks = Object.assign({}, tasks);
        cloneTasks[item.id] = item;
        
        // setTasks(cloneTasks);
        _saveTask(cloneTasks);
    };

    // 포커스를 잃으면 하던 입력 중지
    const _onBlur = () => { 
        setNewTask('');
    };

    /*
        test(target, ...source)
    */


    return isReady ? (  
        <ThemeProvider theme={theme}>
            <Container>
                <StatusBar 
                    barStyle='light-content'
                    backgroundColor={ theme.background }
                />
                <Title>My Schedule(S)</Title>

                <Input 
                    placeholder="+ Add Schedule "
                    value={newTask}
                    onChangeText={_onChangeText}
                    onSubmitEditing={_addTask}
                    onBlur={_onBlur}
                />

                <List width={width}>
                    { 
                        Object.values(tasks).reverse().map( item => (
                            <Task 
                                key={item.id} 
                                item={item} 

                                toggleTask={_toggleTask}
                                updateTask={_updateTask}
                                deleteTask={_deleteTask} 

                            />
                        ))
                    }                   

                </List>
            </Container> 
        </ThemeProvider>


    ) : (
        
        <AppLoading 
            startAsync ={_loadTask}
            onFinish={() => setIsReady(true)}
            onError={console.log('error')}

    />
    );
};

export default App;


/*
    {
        1 : { },
        2 : {"id":2 ,  "title": "hello", "completed": true },
        3 : 
        4 : { "title": "hello", "completed": true },

    }
*/
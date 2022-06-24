import React,{ useState } from 'react';
import { Text, View, Switch } from 'react-native';
import styled , { ThemeProvider } from 'styled-components/native';

import Button from './components/Button';
import Input from './components/Input';
import { lightTheme, darkTheme } from './theme';

const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.background};
    align-items: center;
    justify-content: center;
`;

const App = () => {
    const [isDark, setIsDark] = useState(false);
    const _toggleTheme = () =>setIsDark(!isDark);

    return (
        <ThemeProvider theme={isDark? darkTheme : lightTheme}>
            <Container>
                <Switch value={isDark} onValueChange={_toggleTheme}></Switch>
                <Button title="React"/>
                <Button title="Native"/> 
                <Input borderColor="#3499dd"/>
                <Input borderColor="#9a60b5"/>
            </Container>
        </ThemeProvider>

    );
}; 

export default App;
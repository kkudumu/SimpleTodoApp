//import stuff
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

//create stuff
class App extends React.Component{
  state = {
    text: "This is our message on screen",
    todo: []
  }
  addTodo = () => {
    this.setState({todo: this.state.text})
  }
  renderTodos= () => {
    return this.state.todo.map(t=>{
      return (
        <Text>{t}</Text>
      )
    })
  }
  render(){
    return(
      <View style={styles.viewStyle}>
        <Text> Hello World This App Is Great </Text>
        <TextInput 
        style = {styles.inputStyle}
        onChangeText={(text)=>this.setState({text})}
        />
        <Button 
        title="Add Todo"
        onPress={this.addTodo}
        />
        {this.renderTodos()}
        </View>

    )
  }
}

const styles = {
  viewStyle: {
  flex: 1,
  alignItems: 'center', 
  justifyContent: 'center'
},
  inputStyle:{
  height: 40,
  borderColor: "green",
  borderWidth: 1
  }
}



//export stuff
export default App;
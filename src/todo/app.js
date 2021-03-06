import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Todo from './todo.js';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      input: "",
      todos:[],
      time: new Date(),
      intervalId: ""
    } 
    this.addToDo = this.addToDo.bind(this)
    this.tick = this.tick.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  } 
  addToDo(){
    let { todos, input } = this.state
    todos = todos.concat(input) 
    this. setState({ todos: todos, input: ""})
  }
  removeTodo(i){
    console.log(i)
    let {todos} = this.state
    todos = todos.slice(0, i).concat(todos.slice(i+1))
    this.setState({todos: todos, input: ""})
  }
  tick() {
    let {time} = this.state
    time.setSeconds(time.getSeconds() + 1)
    this.setState({time: time})
  }
  componentDidMount() {
    let id = setInterval(this.tick, 1000)
    this.setState({intervalId: id})
  }
  componentWillUnmount(){
    clearInterval(this.state.intervalId)
  }
  render() {
    return (
      <div>
        <p>現在の時間</p>
        <span>{this.state.time.toLocaleTimeString()}</span>
        <h1>新しい タスク </h1>
        <Input type="text" onChange ={ e => this.setState({ input: e.target.value})} value ={this.state.input}/>
        <Button onClick ={this.addToDo} variant='contained' color='primary'>追加</Button>
        <h2>ToDo:</h2>
        <Todo todos={this.state.todos} removeTodo={this.removeTodo} />
      </div> 
    ) 
  } 
} 
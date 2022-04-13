import { Component } from 'react';
// import { AppBar } from './AppBar/AppBar';
// import { ColorPicker } from './ColorPicker/ColorPicker';
// import { Counter } from './Counter/Counter';
// import { Dropdown } from './Dropdown/Dropdown';

// import options from '../components/ColorPicker/options.json';

import { TodoBoard, TodoTotalAmount } from './App.styled';
import { TodoList } from '../components/TodoList';
import initialTodos from './TodoList/todos.json';
export class App extends Component {
  state = {
    todos: initialTodos,
  };
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
    return (
      <>
        {/* // <AppBar
      //   user={{
      //     username: 'Mango',
      //     isOnline: true,
      //     points: { total: 700, required: 200 },
      //   }}
      // />
      // <Counter />

      // <Dropdown />

      // <ColorPicker options={options} />
    */}
        <TodoBoard>
          <p>
            Общее количество:
            <TodoTotalAmount> {totalTodoCount}</TodoTotalAmount>
          </p>
          <p>
            Количество выполненных:
            <TodoTotalAmount>{completedTodoCount}</TodoTotalAmount>
          </p>
        </TodoBoard>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

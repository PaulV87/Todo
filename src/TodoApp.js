import React from 'react';
import useTodoState from './hooks/useTodoState';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Appbar from "@material-ui/core/Appbar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

function TodoApp() {
  const initialTodos = [{ id: 1, task: "Pet a monkey", completed: false}]
  JSON.parse(window.localStorage.getItem("todos") || "[]");
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(initialTodos);
  
  return(
    <Paper 
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <Appbar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Todos with hooks</Typography>
        </Toolbar>
      </Appbar>  
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
        <TodoForm  addTodo={addTodo} />
        <TodoList  
          todos={todos} 
          removeTodo={removeTodo} 
          toggleTodo={toggleTodo} 
          editTodo={editTodo}
        />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp;
import React, { useState } from "react";
import { Container, Typography, Paper, Button, Stack } from "@mui/material";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const toggleTaskCompletion = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const updateTask = (index, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, text: newText } : task
      )
    );
  };

  const removeTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  return (
    <Container maxWidth="sm">
      <Paper
        sx={{ padding: 3, marginTop: 5, textAlign: "center", boxShadow: 3 }}
      >
        <Typography variant="h5" mb={2}>
          To-Do List 📝
        </Typography>

        <TaskInput addTask={addTask} />

        <TaskList
          tasks={tasks}
          toggleTaskCompletion={toggleTaskCompletion}
          updateTask={updateTask}
          removeTask={removeTask}
        />
      </Paper>
      {tasks.length > 0 && (
        <Stack direction="row" justifyContent="space-between" sx={{ mt: 2 }}>
          <Button variant="contained" color="error" onClick={clearAllTasks}>
            Clear All
          </Button>
        </Stack>
      )}
    </Container>
  );
};

export default App;

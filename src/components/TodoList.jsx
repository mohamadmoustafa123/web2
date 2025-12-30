import {
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import axios from "axios";
import { Task } from "@mui/icons-material";

export default function TodoList() {
  const [displayedTodosType, setDispledTodosType] = useState("all");
  const [titleInput, setTiteInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [dialogTodo, setDialogTodo] = useState(null);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);

  // fill students on component load
  useEffect(() => {
    getTasks();
  }, []);

  // CRUD Operations
  const getTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/tasks");
      if (response.status === 200) {
        setTodos(response.data);
        console.log(response.data);
      }
      if (response.status === 204) {
        setTodos([]);
      }
    } catch (err) {
      console.log(err.response?.data?.message || "Error deleting student.");
    }
  };
  function handleChange(e) {
    setDispledTodosType(e.target.value);
  }
  //Api Add a Task
  async function handleAddClick() {
    try {
      const response = await axios.post("http://localhost:5000/tasks", {
        title: titleInput,
      });
      if (response.status === 201) {
        setTodos([
          ...todos,
          { id: response.data.id, Task: titleInput, isCompleted: false },
        ]);
        console.log(todos);
        setTiteInput("");
      }
    } catch (err) {
      console.log(err.response?.data?.message || "Error updating Task.");
    }
  }
  //update toggle completed or not

  async function handleToggledCompleted(todoObj) {
    try {
      const response = await axios.put(
        "http://localhost:5000/tasksIscompleted/" + todoObj.ID
      );
      if (response.status === 200) {
        setTodos(
          todos.map((t) => {
            if (t.ID === todoObj.ID) {
              return { ...t, isCompleted: !t.isCompleted };
            } else {
              return t;
            }
          })
        );
      }
    } catch (err) {
      console.log(err.response?.data?.message || "Error updating Task.");
    }
  }
  //Delete
  async function handleDelete(todoObj) {
    try {
      const response = await axios.delete(
        "http://localhost:5000/tasks/" + todoObj.ID
      );
      if (response.status === 200) {
        setTodos(
          todos.filter((t) => {
            return t.ID !== todoObj.ID;
          })
        );
      }
    } catch (err) {
      console.log(err.response?.data?.message || "Error updating Task.");
    }
  }
  //update title of task
  function openUpdateDialog(todoObj) {
    setDialogTodo(todoObj);
    setShowUpdateDialog(true);
  }
  async function handleUpdateConfirm() {
    try {
      const response = await axios.put(
        "http://localhost:5000/tasks/" + dialogTodo.ID,
        { newtitle: dialogTodo.Task }
      );
      if (response.status === 200) {
        setTodos(
          todos.map((t) => {
            if (t.ID === dialogTodo.ID) {
              return {
                ...t,
                Task: dialogTodo.Task,
              };
            } else return t;
          })
        );
      }
    } catch (err) {
      console.log(err.response?.data?.message || "Error updating Task.");
    }

    setShowUpdateDialog(false);
  }
  let todosToBeRendered = todos;
  if (displayedTodosType === "non-completed") {
    todosToBeRendered = todos.filter((t) => {
      return !t.isCompleted;
    });
  }
  if (displayedTodosType === "completed") {
    todosToBeRendered = todos.filter((t) => {
      return t.isCompleted;
    });
  }
  if (displayedTodosType === "all") {
    todosToBeRendered = todos;
  }
  const todoJSX = todosToBeRendered.map((t) => {
    return (
      <Todo
        key={t.id}
        todo={t}
        Delete={handleDelete}
        Update={openUpdateDialog}
        toggledCompleted={handleToggledCompleted}
      />
    );
  });
  return (
    <>
      {/*UPDATE DIALOG*/}
      {dialogTodo && (
        <Dialog
          style={{ direction: "rtl" }}
          onClose={() => {
            setShowUpdateDialog(false);
          }}
          open={showUpdateDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"edit task"}</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="Title of Task"
              fullWidth
              variant="standard"
              value={dialogTodo.Task}
              onChange={(e) => {
                setDialogTodo({ ...dialogTodo, Task: e.target.value });
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setShowUpdateDialog(false);
              }}
            >
              close
            </Button>
            <Button autoFocus onClick={handleUpdateConfirm}>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      )}
      <Container maxWidth="sm">
        <Card
          sx={{ minWidth: 275 }}
          style={{ maxHeight: "80vh", overflow: "scroll" }}
        >
          <CardContent>
            <Typography variant="h2" style={{ fontWeight: "normal" }}>
              My Tasks
            </Typography>
            <Divider />
            <ToggleButtonGroup
              className="mt-4"
              color="primary"
              value={displayedTodosType}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton value="all">All</ToggleButton>
              <ToggleButton value="completed">Completed</ToggleButton>
              <ToggleButton value="non-completed">Non-Completed</ToggleButton>
            </ToggleButtonGroup>
            {todoJSX}

            <Grid container style={{ marginTop: "20px" }} spacing={2}>
              <Grid
                size={8}
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              >
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="title of Task"
                  variant="outlined"
                  value={titleInput}
                  onChange={(e) => {
                    setTiteInput(e.target.value);
                  }}
                />
              </Grid>

              <Grid
                size={4}
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              >
                <Button
                  style={{ width: "100%", height: "100%" }}
                  variant="contained"
                  onClick={() => {
                    handleAddClick();
                  }}
                  disabled={titleInput <= 0}
                >
                  Add Task
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

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
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
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
  function handleChange(e) {
    setDispledTodosType(e.target.value);
  }

  function handleAddClick() {
    setTodos([
      ...todos,
      { id: uuidv4(), title: titleInput, isCompleted: false },
    ]);
    console.log(todos);
    setTiteInput("");
  }

  function handleToggledCompleted(todoObj) {
    setTodos(
      todos.map((t) => {
        if (t.id == todoObj.id) {
          return { ...t, isCompleted: !t.isCompleted };
        } else {
          return t;
        }
      })
    );
  }

  function handleDelete(todoObj) {
    setTodos(
      todos.filter((t) => {
        return t.id != todoObj.id;
      })
    );
  }
  // Alert states
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  // Auto-clear success alert after 2.5 seconds
  useEffect(() => {
    if (!isSuccess) return;

    const timer = setTimeout(() => {
      clearAlerts();
    }, 2500);

    return () => clearTimeout(timer);
  }, [isSuccess]);

  // clear errors and success messages
  const clearAlerts = () => {
    setIsSuccess(false);
    setIsError(false);
    setSuccessMessage("");
    setErrorMessage("");
  };

  // show success message
  const showSuccess = (message) => {
    clearAlerts();
    setSuccessMessage(message);
    setIsSuccess(true);
  };

  // show error message
  const showError = (message) => {
    clearAlerts();
    setErrorMessage(message);
    setIsError(true);
  };

  // fill students on component load
  useEffect(() => {
    getTasks();
  }, []);

  // CRUD Operations
  const getTasks = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:5000/tasks");
      if (response.status === 200) {
        setTodos(response.data);
        console.log(response.data);
      }
      if (response.status === 204) {
        setTodos([]);
        showSuccess(response.data.message);
      }
    } catch (err) {
      console.log(err.response?.data?.message || "Error deleting student.");
    } finally {
      setIsLoading(false);
    }
  };
  function handleChange(e) {
    setDispledTodosType(e.target.value);
  }
  //Api Add a Task
  async function handleAddClick() {
    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:5000/tasks", {
        title: titleInput,
      });
      if (response.status === 201) {
        setTodos([
          ...todos,
          { ID: response.data.id, Task: titleInput, isCompleted: false },
        ]);
        console.log(todos);
        setTiteInput("");
        showSuccess(response.data.message);
      }
    } catch (err) {
      showError(err.response?.data?.message || "Error added Task.");
    } finally {
      setIsLoading(false);
    }
  }
  //update toggle completed or not

  async function handleToggledCompleted(todoObj) {
    try {
      setIsLoading(true);
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
        showSuccess(response.data.message);
      }
    } catch (err) {
      showError(err.response?.data?.message || "Error updating Task.");
    } finally {
      setIsLoading(false);
    }
  }
  //Delete
  async function handleDelete(todoObj) {
    setIsLoading(true);
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
        showSuccess(response.data.message);
      }
    } catch (err) {
      showError(err.response?.data?.message || "Error deleting Task.");
    } finally {
      setIsLoading(false);
    }
  }
  //update title of task
  function openUpdateDialog(todoObj) {
    setDialogTodo(todoObj);
    setShowUpdateDialog(true);
  }
  function handleUpdateConfirm() {
    setTodos(
      todos.map((t) => {
        if (t.id == dialogTodo.id) {
          return {
            ...t,
            title: dialogTodo.title,
          };
        } else return t;
      })
    );
    setShowUpdateDialog(false);
  }
  let todosToBeRendered = todos;
  if (displayedTodosType == "non-completed") {
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
          showSuccess(response.data.message);
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
    if (displayedTodosType == "completed") {
      todosToBeRendered = todos.filter((t) => {
        return t.isCompleted;
      });
    }
    if (displayedTodosType == "all") {
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
        <div style={{ position: "absolute" }} className="mb-6 space-y-3">
          {isLoading && (
            <div className="rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-700">
              Loading...
            </div>
          )}
          {isSuccess && (
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
              {successMessage}
            </div>
          )}
          {isError && (
            <div className="rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-800">
              {errorMessage}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3"></div>
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
            <DialogTitle id="alert-dialog-title">{"تعديل مهمه"}</DialogTitle>
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
                value={dialogTodo.title}
                onChange={(e) => {
                  setDialogTodo({ ...dialogTodo, title: e.target.value });
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
}

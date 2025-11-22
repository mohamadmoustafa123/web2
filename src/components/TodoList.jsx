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
    todos.map((t) => {
      if (t.id == todoObj.id) {
        return { ...t, isCompleted: !t.isCompleted };
      } else {
        return t;
      }
    });
  }

  function handleDelete(todoObj){
    todos.filter((t) => {
        return t.id != todoObj.id;
      });

  }
  function openUpdateDialog(todoObj) {
    setDialogTodo(todoObj);
    setShowUpdateDialog(true);
  }
  function handleUpdateConfirm(){
   todos.map((t) => {
        if (t.id == dialogTodo.id) {
          return {
            ...t,
            title: dialogTodo.title,
          
          };
        } else return t;
      });
    setShowUpdateDialog(false);
  }
  let todosToBeRendered = todos;
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
          onClose={
            ()=>{
                setShowUpdateDialog(false)
            }
          }
          open={showUpdateDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"تعديل مهمه"}</DialogTitle>
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
            <Button onClick={()=>{
                setShowUpdateDialog(false)
            }}>close</Button>
            <Button autoFocus onClick={handleUpdateConfirm}>
              cofirrm
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

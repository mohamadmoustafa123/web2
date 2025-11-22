import {
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [displayedTodosType, setDispledTodosType] = useState("all");
  const [titleInput, setTiteInput] = useState("");
  const [todos, setTodos] = useState([]);
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
  return (
    <>
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

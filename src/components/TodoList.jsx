import {
  Card,
  CardContent,
  Container,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function TodoList() {
    const [displayedTodosType,setDispledTodosType]=useState("all")
    function handleChange(e){
        setDispledTodosType(e.target.value)
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
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

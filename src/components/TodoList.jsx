import {
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

export default function TodoList() {
  const [displayedTodosType, setDispledTodosType] = useState("all");
   const [titleInput, setTiteInput] = useState("");
  function handleChange(e) {
    setDispledTodosType(e.target.value);
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
            justifyContent="space-arround"
            alignItems="center"
          >
            <TextField style={{ width: "100%" }}
                  id="outlined-basic"
                  label= "title of Task"
                  variant="outlined"
                  value={titleInput}
                  onChange={(e)=>{
                    setTiteInput(e.target.value)
                  }}
                  />
                
           
          </Grid>
        </Grid>
          </CardContent>
        </Card>
        
      </Container>
    </>
  );
}

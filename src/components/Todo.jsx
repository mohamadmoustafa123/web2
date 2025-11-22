import { Card, CardContent, Grid, IconButton, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function Todo({todo, Delete, Update, toggledCompleted}) {
    const { id, title,  isCompleted } = todo;

  return (
    
    <>
      <Card
        sx={{
          minWidth: 275,
          background: "#283593",
          color: "white",
          textAlign: "right",
          marginTop: 5,
        }}   
        className="todoCard"
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={8}>
              <Typography>
                {title}
              </Typography>
            </Grid>
            <Grid
              size={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
                <IconButton
                className="iconButton"
                aria-label="delete"
                style={{
                  color: isCompleted ? "white" : "#8bc34a",
                  background: isCompleted ? "#8bc34a" : "white",
                  border: "solid #8bc34a 3px",
                }}
                onClick={() => {
                  toggledCompleted(todo)
                }}
              >
                <CheckIcon />
              </IconButton>
            
              <IconButton
                className="iconButton"
                aria-label="delete"
                style={{
                  color: "#1769aa",
                  background: "white",
                  border: "solid #1769aa 3px",
                }}
                onClick={()=>{
                    Update(todo)
                }}
              >
                <ModeEditOutlineOutlinedIcon />
              </IconButton>
              <IconButton
                className="iconButton"
                aria-label="delete"
                style={{
                  color: "#b23c17",
                  background: "white",
                  border: "solid #b23c17 3px",
                }}
                onClick={()=>{
                  Delete(todo)

                }}
              >
                <DeleteOutlineOutlinedIcon />
              </IconButton>

            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

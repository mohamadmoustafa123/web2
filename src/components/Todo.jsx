import { Card, CardContent, Grid, Typography } from "@mui/material";

export default function Todo(todo, Delete, Update, toggledCompleted) {
    const { id, title, details, isCompleted } = todo;
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
              <Typography></Typography>
            </Grid>
            <Grid
              size={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >

            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

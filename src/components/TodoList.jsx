import { Card, CardContent, Container, Divider, Typography } from "@mui/material";

export default function TodoList(){
    return(
       <>
       <Container maxWidth="sm">
        <Card sx={{minWidth:275} }style={{maxHeight:"80vh",overflow:"scroll"}}>
            <CardContent>
                <Typography variant="h2" style={{ fontWeight: "normal" }}>My Tasks</Typography>
                <Divider/>
                
            </CardContent>

        </Card>

       </Container>
       </>
    )
}
import { Card, Container } from "@mui/material";

export default function TodoList(){
    return(
       <>
       <Container maxWidth="sm">
        <Card sx={{minWidth:275} }style={{maxHeight:"80vh",overflow:"scroll"}}>

        </Card>

       </Container>
       </>
    )
}
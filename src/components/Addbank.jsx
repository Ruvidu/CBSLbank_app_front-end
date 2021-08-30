import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper ,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));



export default function Addbank() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' }
    const classes = useStyles();
    const [name,setname] = useState('')

    const addbank=(e)=>{
        e.preventDefault()
        const bank={name}
        console.log(bank)
        fetch('http://localhost:8080/api/bank/addbank',{
            method : "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(bank)
        }).then(()=>{
            alert("new user added successfully")
        })   
    }

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1>Add Bank</h1>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Bank Name" variant="outlined" fullWidth
                    value={name} onChange={(e)=>setname(e.target.value)} />
                    <Button variant="contained" color="secondary" onClick={addbank}>Add</Button>
                </form>
            </Paper>
        </Container>
    );
}

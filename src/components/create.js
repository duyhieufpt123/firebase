import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FormControl, TextField, Checkbox, Button, Input } from '@mui/material';
import { Label } from '@mui/icons-material';

export default function Create() {
    const [id, setid] = useState('');
    const [name, setname] = useState('');
    const [username, setusername] = useState('');
    const [phone, setphone] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    console.log(checkbox)


    const postData = () => {
        axios.post(`https://63b6ffdc4f17e3a931c78f96.mockapi.io/user`, {
            id,
            name,
            username,
            phone,
            checkbox
        })
        alert("Create successfully!");
    }
    return (
        <div className="create_form">
            <FormControl>
                <TextField label='Name' placeholder='Name' onChange={(e) => setname(e.target.value)} />
                <TextField label='Username' placeholder='Username' onChange={(e) => setusername(e.target.value)} />
                <TextField label='Phone' placeholder='Phone' onChange={(e) => setphone(e.target.value)} />
                <Input type='checkbox' onChange={(e) => setCheckbox(!checkbox)}>Male</Input>
                <Button onClick={postData} type='submit'>Submit</Button>
            </FormControl>
        </div>
    )
}
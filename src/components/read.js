import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableHead, TableRow, TableBody, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://63b6ffdc4f17e3a931c78f96.mockapi.io/user`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { id, name, username, phone, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('Username', username);
        localStorage.setItem('Phone', phone);
        localStorage.setItem('Checkbox Value', checkbox)
    }

    const getData = () => {
        axios.get(`https://63b6ffdc4f17e3a931c78f96.mockapi.io/user`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://63b6ffdc4f17e3a931c78f96.mockapi.io/users/${id}`)
            .then(() => {
                getData();
            })
           alert('You have deleted!') 
    }

    return (
        <div>
            <Button>
                <Link to='/create'>Create a new user</Link>
            </Button>
            <Table singleLine>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>UserName</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>Update</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {APIData.map((data) => {
                        return (
                            <TableRow>
                                <TableCell>{data.id}</TableCell>
                                <TableCell>{data.name}</TableCell>
                                <TableCell>{data.username}</TableCell>
                                <TableCell>{data.phone}</TableCell>
                                <TableCell>{data.checkbox ? 'Male' : 'Female'}</TableCell>
                                <TableCell>
                                    
                                    <Button onClick={() => setData(data)}><Link to='/update' style={{textDecoration:'none'}}>Update</Link></Button>
                                </TableCell>
                                <TableCell>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}
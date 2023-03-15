import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    Table,
    TableCell,
    TableHead,
    TableRow,
    TableBody,
    Button,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    useEffect(() => {
        axios
            .get(`https://63b6ffdc4f17e3a931c78f96.mockapi.io/user`)
            .then((response) => {
                console.log(response.data);
                setAPIData(response.data);
            });
    }, []);

    const setData = (data) => {
        let { id, name, username, phone, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('Username', username);
        localStorage.setItem('Phone', phone);
        localStorage.setItem('Checkbox Value', checkbox);
    };

    const getData = () => {
        axios
            .get(`https://63b6ffdc4f17e3a931c78f96.mockapi.io/user`)
            .then((getData) => {
                setAPIData(getData.data);
            });
    };

    const onDelete = (id) => {
        axios
            .delete(`https://63b6ffdc4f17e3a931c78f96.mockapi.io/user/${id}`)
            .then(() => {
                getData();
            })
            .catch((error) => {
                console.log(error);
            });
        alert('You have deleted!');
    };

    const showdetail = (data) => {
        console.log(data)
        navigate(`update/${data.id}`)
    }
    const totalPages = Math.ceil(APIData.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = APIData.slice(indexOfFirstItem, indexOfLastItem);
    const navigate = useNavigate()
    const renderTableData = () => {
        return currentItems.map((data) => {
            return (
                <TableRow key={data.id}>
                    <TableCell>{data.id}</TableCell>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>{data.username}</TableCell>
                    <TableCell>{data.phone}</TableCell>
                    <TableCell>{data.checkbox ? 'Male' : 'Female'}</TableCell>
                    <TableCell>
                        <Button onClick={() => setData(data)}>
                            <Link style={{ textDecoration: 'none' }}>
                                Update
                            </Link>
                        </Button>
                    </TableCell>
                    <TableCell>
                        <Button onClick={() => onDelete(data.id)}>Delete</Button>
                    </TableCell>
                </TableRow>
            );
        });
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
        return (
            <div>
                {pageNumbers.map((number) => (
                    <Button
                        key={number}
                        variant={currentPage === number ? 'contained' : 'outlined'}
                        onClick={() => setCurrentPage(number)}
                        style={{ margin: '5px' }}
                    >
                        {number}
                    </Button>
                ))}
            </div>
        );
    };

    return (
        <div>
            <Button>
                <Link to="/create">Create a new user</Link>
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
                    {currentItems.map((data) => {
                        return (
                            <TableRow key={data.id}>
                                <TableCell>{data.id}</TableCell>
                                <TableCell>{data.name}</TableCell>
                                <TableCell>{data.username}</TableCell>
                                <TableCell>{data.phone}</TableCell>
                                <TableCell>{data.checkbox ? 'Male' : 'Female'}</TableCell>
                                <TableCell>
                                    <Button onClick={() => showdetail(data)} >
                                        Update
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>

            {/* Render pagination controls */}
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                {totalPages > 1 &&
                    Array.from(Array(totalPages), (el, index) => index + 1).map((pageNumber) => (
                        <Button
                            key={pageNumber}
                            variant={pageNumber === currentPage ? 'contained' : 'outlined'}
                            onClick={() => setCurrentPage(pageNumber)}
                        >
                            {pageNumber}
                        </Button>
                    ))}
            </div>
        </div>
    );
}
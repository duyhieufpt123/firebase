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
            .get(`https://6417ca17cc5fd8ffb17699b8.mockapi.io/product`)
            .then((response) => {
                console.log(response.data);
                setAPIData(response.data);
            });
    }, []);

    const setData = (data) => {
        let { id, description, price, image } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Title', description);
        localStorage.setItem('price', price);
        localStorage.setItem('image', image);
    };

    const getData = () => {
        axios
            .get(`https://6417ca17cc5fd8ffb17699b8.mockapi.io/product`)
            .then((getData) => {
                setAPIData(getData.data);
            });
    };

    const onDelete = (id) => {
        axios
            .delete(`https://6417ca17cc5fd8ffb17699b8.mockapi.io/product/${id}`)
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
        navigate(`detail/${data.id}`)
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
                    <TableCell><Link>{data.description}</Link></TableCell>
                    <TableCell>{data.price}</TableCell>
                    <TableCell>{data.image}</TableCell>
                    <TableCell>
                        <Button >
                            <Link style={{ textDecoration: 'none' }}>
                                Update
                            </Link>
                        </Button>
                    </TableCell>
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
                        <TableCell>Title</TableCell>
                        <TableCell>price</TableCell>
                        <TableCell>image</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {currentItems.map((data) => {
                        return (
                            <TableRow key={data.id}>
                                <TableCell>{data.id}</TableCell>
                                <TableCell><Link>{data.description}</Link></TableCell>
                                <TableCell>{data.price}</TableCell>
                                <TableCell>{data.image}</TableCell>
                                <TableCell>
                                    <Button onClick={() => showdetail(data)} >
                                        Detail
                                    </Button>
                                </TableCell>
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
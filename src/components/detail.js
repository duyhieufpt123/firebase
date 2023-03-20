import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Detail(props) {
    const [description, setDescription] = useState('');

    useEffect(() => {
        const id = props.match.params.id;
        axios
            .get(`https://6417ca17cc5fd8ffb17699b8.mockapi.io/product/${id}`)
            .then((response) => {
                setDescription(response.data.description);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [props.match.params.id]);

    return (
        <div>
            <h1>Product Description:</h1>
            <p>{description}</p>
        </div>
    );
}

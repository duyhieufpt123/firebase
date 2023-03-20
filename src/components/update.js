import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FormControl, TextField, Checkbox, Button, Input } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function Update() {
    const [data, setData] = useState({
        id: '',
        description: "",
        price: "",
        image: "",
    })
    const params = useParams()
    useEffect(() => {
        var data = '';
        var config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://6417ca17cc5fd8ffb17699b8.mockapi.io/product/${params.id}`,
            headers: {},
            data: data
        };

        axios(config)
            .then(function (response) {
                if (response.status === 200) {
                    setData(response.data)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [params.id])

    const updateData = () => {
        console.log("asdasd")
        const config = {
          method: 'put',
          maxBodyLength: Infinity,
          url: `https://6417ca17cc5fd8ffb17699b8.mockapi.io/product/${data.id}`,
          headers: {},
          data: data
        };
      
        axios(config)
          .then(function (response) {
            alert('Update Successfully!')
          })
          .catch(function (error) {

            alert('Update Failed!')
          });
      };
      

    return (
        <div className="update_form">
            <FormControl>
                <TextField label="ID" placeholder="ID" value={data?.id} onChange={(e) => setData((prev) => {
                    return {
                        ...prev,
                        id: e.target.value
                    }
                })} />
                <TextField label="Title" placeholder="Name" value={data.description}
                    onChange={(e) => setData((prev) => {
                        return {
                            ...prev,
                            name: e.target.value
                        }
                    })

                    } />
                <TextField label="Price" placeholder="Username" value={data.price}


                    onChange={(e) => setData((prev) => {
                        return {
                            ...prev,
                            username: e.target.value
                        }
                    })
                    } />
                <TextField label="Image" placeholder="Phone" value={data.image}
                    onChange={(e) => setData((prev) => {
                        return {
                            ...prev,
                            phone: e.target.value
                        }
                    })
                    } />
                <Button type="submit" onClick={updateData}>Update</Button>
            </FormControl>
        </div>
    );
}

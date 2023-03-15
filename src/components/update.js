import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FormControl, TextField, Checkbox, Button, Input } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function Update() {
    const [data, setData] = useState({
        checkbox: false,
        gender: false,
        id: '',
        name: "",
        phone: "",
        username: "",
    })
    const params = useParams()
    useEffect(() => {
        var data = '';
        var config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://63b6ffdc4f17e3a931c78f96.mockapi.io/user/${params.id}`,
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
          url: `https://63b6ffdc4f17e3a931c78f96.mockapi.io/user/${data.id}`,
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
                <TextField label="Name" placeholder="Name" value={data.name}
                    onChange={(e) => setData((prev) => {
                        return {
                            ...prev,
                            name: e.target.value
                        }
                    })

                    } />
                <TextField label="Username" placeholder="Username" value={data.username}


                    onChange={(e) => setData((prev) => {
                        return {
                            ...prev,
                            username: e.target.value
                        }
                    })
                    } />
                <TextField label="Phone" placeholder="Phone" value={data.phone}
                    onChange={(e) => setData((prev) => {
                        return {
                            ...prev,
                            phone: e.target.value
                        }
                    })
                    } />
                <Checkbox checked={data.checked}
                    onChange={(e) => setData((prev) => {
                        return {
                            ...prev,
                            checked: e.target.value
                        }
                    })
                    } />
                <Button type="submit" onClick={updateData}>Update</Button>
            </FormControl>
        </div>
    );
}

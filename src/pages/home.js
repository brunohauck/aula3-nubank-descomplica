import Header from "../components/header";
import {useEffect, useState} from 'react';
import { getAllUsers } from "../service/api";
import Table from 'react-bootstrap/Table';
export default function Home() {
    const name = "Professor Bruno Hauck";
    const [user, setUser] = useState([]);
    useEffect(()=>{
        getUsers();
    },[])

    const getUsers = async () => {
        const response = await getAllUsers();
        setUser(response.data);
        console.log(user);
    }

    return (
        <>
        <Header  name={name} />
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {
            user.map((data)=>(        
                <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
               
              </tr>
            ) )
        }
       
      </tbody>
    </Table>

        </>
    );
  }
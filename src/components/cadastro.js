
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { addUser } from '../service/api';
const initialValue = {
  name: "",
  email: "", 
  phone: "5531988724779",
}
function Cadastro() {
  const [user, setUser] = useState(initialValue);
  const {name, email, phone} = user;

  const onValueChange = (e) => { setUser({...user, [e.target.name]: e.target.value}); }
  const addUserDetails = async () => {
    await addUser(user);

  }

    return (
        <>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Favor informar seu nome 2"
          onChange={(e) => onValueChange(e)} name="name" value={name} 
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="Enter email"
          onChange={(e) => onValueChange(e)} name="email" value={email} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Favor informar seu nome 2"
          onChange={(e) => onValueChange(e)} name="phone" value={phone} 
          />
        </Form.Group>

        <Button onClick={() => addUserDetails() } variant="primary" >
          Salvar
        </Button>
      </>
    );
  }
  
  export default Cadastro;
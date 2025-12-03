import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import ApiClient from "../../../../utils/ApiClient";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { NavLink } from "react-router";

interface SignInForm {
    email : string,
    password : string
}

function SignIn() {
    const [form, setForm] = useState<SignInForm> ({
            email: "",
            password: ""
        })

    const onHandleChange = (event : ChangeEvent<HTMLInputElement>) => {
            const {name, value} = event.target
        
            setForm({
                ...form,
                [name] : value
            })
        }
    
    const onSubmit = async (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await ApiClient.post('/signin', form)
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    }
    
   return <div className="container mx-auto">
   <h1> Sign In </h1> <br></br> 
    <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formJudul">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        value={form.email}
                        onChange={onHandleChange}
                        name="email" 
                        type="email" 
                        placeholder="email"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formJudul">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={form.password}
                        onChange={onHandleChange}                     
                        name="password" 
                        type="password" 
                        placeholder="password"
                    />
                </Form.Group>
                <br></br>
                <Button type="submit" variant="primary">Sign In</Button>        
                <NavLink to = "/signIn">  Sign In </NavLink>        
            </Form>
    </div>
}

export default SignIn
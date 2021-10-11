import React, { useRef } from 'react'
import { addDoc } from 'firebase/firestore';
import { Card, Form, Button } from 'react-bootstrap';


const CreateUser = ({ collectionRef }) => {

    const nameRef = useRef();
    const ageRef = useRef();

    const createUser = async (e) => {
        e.preventDefault();
        await addDoc(collectionRef, { name: nameRef.current.value, age: parseInt(ageRef.current.value) })
    }

    return (
        <Card className="w-50 p-3 mb-5 mt-5">
            <Card.Body>
                <h2 className="text-center mb-4">Create User</h2>
                <Form onSubmit={createUser}>
                    <Form.Group id="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" ref={nameRef} required />
                    </Form.Group>
                    <Form.Group id="age">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" ref={ageRef} required />
                    </Form.Group>
                    <Button className="w-100 mt-3" type="submit" >Create</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default CreateUser;

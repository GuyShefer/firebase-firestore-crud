import React, { useEffect, useState } from 'react';
import { getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { Button, Table } from 'react-bootstrap';

const UsersTable = ({ collectionRef, db }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(collectionRef);
            const extractUsersData = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setUsers(extractUsersData);
        }

        getUsers();
    }, [collectionRef]);


    const updateUser = async (id, age) => {
        const userDoc = doc(db, "users", id);
        const newFields = { age: age + 1 }
        await updateDoc(userDoc, newFields);
    }

    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
    }

    return (
        <Table bordered hover className="w-75" >
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, idx) => (
                    <tr key={user.id}>
                        <td>{idx + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td><Button onClick={() => updateUser(user.id, user.age)}>action</Button></td>
                        <td><Button className="btn-danger" onClick={() => deleteUser(user.id)}>delete</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default UsersTable;

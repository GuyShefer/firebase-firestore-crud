import React from 'react';
import { db } from './firebase';
import { collection } from 'firebase/firestore';
import CreateUser from './components/createUser';
import UsersTable from './components/usersTable';

const App = () => {

  const usersCollectionRef = collection(db, "users");

  return (
    <div className="d-flex flex-column align-items-center p-2 bd-highlight">
      <h1>Users Table - CRUD</h1>
      <CreateUser collectionRef={usersCollectionRef} />
      <UsersTable collectionRef={usersCollectionRef} db={db}/>
    </div>
  );
}

export default App;

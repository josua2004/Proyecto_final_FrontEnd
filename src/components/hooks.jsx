
import { useEffect, useState } from 'react';
import { getUsers } from '../services/GetUsers';

function CardUser() {


    const [users, setUsers] = useState([]);


    useEffect(() => {
      const fetchUsers = async () => {
        const data = await getUsers();
       
        
        setUsers(data);
   
      };
      fetchUsers();
    }, []);

    console.log(users)



    return (
      <div>
        <h1>Lista de Usuarios</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
export default CardUser
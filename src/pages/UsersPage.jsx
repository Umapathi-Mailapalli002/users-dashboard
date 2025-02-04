"use client"
import React, { useState, useEffect } from 'react'
import { Alert, UserCard } from '@/components';
import { fetchUsers } from '../utils/api';
function UsersPage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        if (data.length === 0) throw new Error("No users found");
        setUsers(data);
      } catch (err) {
        setError("Error on fetching Users data");
      }
    };
    loadUsers();
  }, []);
  return (
    <div className='dark:bg-gray-900 p-11 bg-gray-100'>
      {error && <Alert message={error} alertType="Error"/>}
      <div className='grid sm:grid-cols-2 lg:grid-cols-5 gap-5'>
      {users?.map((user) => (<UserCard key={user.id} data={user}/>))}
      </div>
    </div>
  )
}

export default UsersPage
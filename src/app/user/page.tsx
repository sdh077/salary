'use client'
import React from 'react';
import UserList from './UserList';
import { useAppSelector } from '@/redux/hooks';
import UserForm from './UserForm';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '@/redux/features/userSlice';

const Page = () => {
    const users = useSelector((state) => state.userReducer.userRepository.users);
    console.log(users)
    const dispatch = useDispatch();

    const handleAddUser = (name, email) => {
        dispatch(addUser({ name, email }));
    };
    return (
        <div>
            <h1>User Management</h1>
            <UserForm addUser={handleAddUser} />
            <UserList users={users} />
        </div>
    );
};

export default Page;

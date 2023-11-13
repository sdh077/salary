'use client'
import { openModal } from '@/redux/features/modalSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'flowbite-react';

const Modal = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    const content = (
      <div>
        <p>Are you sure you want to confirm?</p>
      </div>
    );

    const callbackFunction = () => {
      console.log('Confirmed!');
      // 여기에 확인 버튼을 눌렀을 때 실행하고자 하는 함수를 넣으면 됩니다.
    };

    dispatch(openModal({ content, callback: callbackFunction, modalType: 2 }));
  };

  return (
    <div>
      <Button onClick={handleOpenModal}>Open Modal</Button>
    </div>
  );
};

export default Modal;

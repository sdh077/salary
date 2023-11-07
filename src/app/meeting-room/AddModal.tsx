
'use client';

import { Button, Modal } from 'flowbite-react';
import moment from 'moment'
import { useRouter } from 'next/navigation';

export default function AddModal({ info, openModal, setOpenModal }) {
    const router = useRouter()
    const addEvent = async (info) => {
        await fetch('http://localhost:3100/api/events', {
            method: 'POST',
            body: JSON.stringify({
                title: 'name',
                start: moment(info.date).format('yyyy-MM-DD HH:mm:SS')
            })
        })
        setOpenModal(false)
        router.refresh();
    }
    return (
        <>
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Terms of Service</Modal.Header>
                <Modal.Body>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => addEvent(info)}>Add</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

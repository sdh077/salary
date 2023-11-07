
'use client';

import { Button, Modal } from 'flowbite-react';
import { useRouter } from 'next/navigation';

export default function DelModal({ info, openModal, setOpenModal }) {
  const router = useRouter()
  const delEvent = async (info) => {
    await fetch(`http://localhost:3100/api/events/${info.event.id}`, {
      method: 'DELETE',
    })
    setOpenModal(false)
    router.refresh();
  }
  return (
    <>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Sessrvice</Modal.Header>
        <Modal.Body>
          a
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => delEvent(info)}>del</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

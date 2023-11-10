'use client'
import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from '@fullcalendar/timegrid'
import AddModal from './AddModal';
import DelModal from './DelModal';

export default function FC({ events }) {
    const [info, setInfo] = useState(null);
    const [openAddModal, setOpenAddModal] = useState(false);
    const [openDelModal, setOpenDelModal] = useState(false);
    const openEvent = (setModal) => (info) => {
        setInfo(info)
        setModal(true)
    }
    return (
        <>
            <FullCalendar
                plugins={[timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                slotMinTime={"08:00:00"}
                slotMaxTime={"22:00:00"}
                slotDuration={"01:00:00"}

                events={events}
                eventClick={openEvent(setOpenDelModal)}
                dateClick={openEvent(setOpenAddModal)}
            />
            <AddModal info={info} openModal={openAddModal} setOpenModal={setOpenAddModal} />
            <DelModal info={info} openModal={openDelModal} setOpenModal={setOpenDelModal} />
        </>
    )
}
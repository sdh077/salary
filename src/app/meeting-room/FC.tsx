'use client'
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from '@fullcalendar/timegrid'
import moment from 'moment'
import { useRouter } from 'next/navigation';

export default function FC({ events }) {
    const router = useRouter()
    const addEvent = async (info) => {
        await fetch('http://localhost:3100/api/events', {
            method: 'POST',
            body: JSON.stringify({
                title: 'add',
                start: moment(info.date).format('yyyy-MM-DD HH:mm:SS')
            })
        })
        router.refresh();
    }
    const delEvent = async (info) => {
        await fetch(`http://localhost:3100/api/events/${info.event.id}`, {
            method: 'DELETE',
        })
        router.refresh();
    }
    return (
        <FullCalendar
            plugins={[timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            slotMinTime={"08:00:00"}
            slotMaxTime={"22:00:00"}
            slotDuration={"01:00:00"}

            events={events}
            eventClick={delEvent}
            dateClick={addEvent}
        />
    )
}
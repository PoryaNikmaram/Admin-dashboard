import { useTheme } from '@emotion/react'
import { useState } from 'react'
import { appColors } from '../../theme'
import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import FullCalendar from '@fullcalendar/react'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '5px',

  '&:focus': {
    outline: 'none',
  },
}

function UserCalendar() {
  const [openModal, setOpneModal] = useState(false)
  const [selectedDay, setSelectedDay] = useState()
  const [event, setEvent] = useState()
  const [title, setTitle] = useState('')

  const theme = useTheme()
  const colors = appColors(theme.palette.mode)

  function handleOpen() {
    setOpneModal(true)
  }
  function handleClose() {
    setOpneModal(false)
    setEvent('')
  }
  function handleDateClick(day) {
    handleOpen()
    setSelectedDay(day)
  }
  function handleEventClick(event) {
    handleOpen()
    setEvent(event)
  }
  function handleCancelEvent() {
    setEvent('')
    handleClose()
  }

  function handleAddEvent() {
    if (!title) return

    const calenderApi = selectedDay.view.calendar
    calenderApi.unselect()

    const event = {
      id: `${Math.random() * 10000}`,
      title,
      start: selectedDay.startStr,
      end: selectedDay.endStr,
      allDay: selectedDay.allDay,
    }

    calenderApi.addEvent(event)

    let items = JSON.parse(localStorage.getItem('events')) || []
    items.push(event)
    localStorage.setItem('events', JSON.stringify(items))

    handleClose()
  }

  function handleRemoveEvent() {
    event.event.remove()
    let items = JSON.parse(localStorage.getItem('events')) || []
    const filteredEvents = items.filter(
      (item) => item.id !== event.event._def.publicId
    )

    localStorage.setItem('events', JSON.stringify(filteredEvents))
    setEvent('')
    handleClose()
  }

  function handleEventChange(event) {
    const changedEvent = {
      id: event.event._def.publicId,
      title: event.event._def.title,
      allDay: event.event._def.allDay,
      start: event.event._instance.range.start,
      end: event.event._instance.range.end,
    }

    let items = JSON.parse(localStorage.getItem('events')) || []
    const filteredEvents = items.filter(
      (item) => item.id !== event.event._def.publicId
    )
    filteredEvents.push(changedEvent)

    localStorage.setItem('events', JSON.stringify(filteredEvents))
  }

  return (
    <Box m={'50px'}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, listPlugin, timeGridPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
        }}
        initialEvents={JSON.parse(localStorage.getItem('events'))}
        initialView="dayGridMonth"
        select={handleDateClick}
        eventClick={handleEventClick}
        eventChange={handleEventChange}
        selectable
        editable
        dayMaxEvents
        selectMirror
        height="75vh"
      />
      <Modal open={openModal} onClose={handleClose}>
        {event ? (
          <Box sx={style}>
            <Typography>Are you sure you want to delete the event ?</Typography>
            <Button
              variant="contained"
              size="small"
              type="submit"
              onClick={handleRemoveEvent}
              sx={{
                backgroundColor: colors.red[500],

                '&:hover': {
                  backgroundColor: colors.red[600],
                },
                margin: '10px 0',
              }}
            >
              Remove
            </Button>
            <Button
              variant="contained"
              size="small"
              type="submit"
              onClick={handleCancelEvent}
              sx={{
                backgroundColor: colors.grey[500],

                '&:hover': {
                  backgroundColor: colors.grey[600],
                },
                margin: '10px 5px',
              }}
            >
              Cancel
            </Button>
          </Box>
        ) : (
          <Box sx={style}>
            <TextField
              variant="filled"
              label="Enter An Event"
              fullWidth
              onChange={(e) => setTitle(e.target.value)}
            />
            <Button
              variant="contained"
              size="small"
              type="submit"
              onClick={handleAddEvent}
              sx={{
                backgroundColor: colors.indigo[500],

                '&:hover': {
                  backgroundColor: colors.indigo[600],
                },
                margin: '10px 0',
              }}
            >
              Add
            </Button>
          </Box>
        )}
      </Modal>
    </Box>
  )
}

export default UserCalendar

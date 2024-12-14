import FullCalendar from "@fullcalendar/react"; // => request placed at the top
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import timelinePlugin from "@fullcalendar/timeline";
import interactionPlugin from "@fullcalendar/interaction";
//
import { useState, useRef, useEffect } from "react";
// @mui
import { Card, DialogTitle, Grid } from "@mui/material";
// redux
import { useDispatch, useSelector } from "../store";
import {
  getEvents,
  closeModal,
  selectEvent,
  selectRange,
} from "../store/slices/calendar";
// routes
// hooks
import useResponsive from "../hooks/useResponsive";
// components
import { DialogAnimate } from "../component/animate";
// sections
import {
  CompanyCalendarForm,
  CalendarForm,
  CalendarStyle,
  CalendarToolbar,
} from "../containers/Admin/dashboard/calendar";

// ----------------------------------------------------------------------
import { Helmet } from "react-helmet-async";

// ----------------------------------------------------------------------
const selectedEventSelector = (state) => {
  const { events, selectedEventId, selectedEventType } = state.calendar;
  if (selectedEventId && selectedEventType) {
    return events.find(
      (_event) =>
        _event?.id === selectedEventId && _event?.type === selectedEventType
    );
  }
  return null;
};

export default function Calendar() {
  const dispatch = useDispatch();

  const isDesktop = useResponsive("up", "sm");

  const calendarRef = useRef(null);

  const [date, setDate] = useState(new Date());

  const [view, setView] = useState(isDesktop ? "dayGridMonth" : "listWeek");

  const selectedEvent = useSelector(selectedEventSelector);

  const { events, isOpenModal, selectedRange } = useSelector(
    (state) => state.calendar
  );

  const { companyId = null } = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(getEvents(companyId));
  }, [dispatch]);

  useEffect(() => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      const newView = isDesktop ? "dayGridMonth" : "listWeek";
      calendarApi.changeView(newView);
      setView(newView);
    }
  }, [isDesktop]);

  const handleClickToday = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.today();
      setDate(calendarApi.getDate());
    }
  };

  const handleChangeView = (newView) => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.changeView(newView);
      setView(newView);
    }
  };

  const handleClickDatePrev = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.prev();
      setDate(calendarApi.getDate());
    }
  };

  const handleClickDateNext = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.next();
      setDate(calendarApi.getDate());
    }
  };

  const handleSelectRange = (arg) => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.unselect();
    }
    dispatch(selectRange(arg.start, arg.end));
  };

  const handleSelectEvent = (arg) => {
    dispatch(
      selectEvent({
        id: arg.event.id,
        type: arg.event.extendedProps.type,
      })
    );
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <Helmet>
        <title> Dashboard | Scheduling </title>
      </Helmet>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CalendarStyle>
              <CalendarToolbar
                date={date}
                view={view}
                onNextDate={handleClickDateNext}
                onPrevDate={handleClickDatePrev}
                onToday={handleClickToday}
                onChangeView={handleChangeView}
              />
              <FullCalendar
                weekends
                editable
                droppable
                selectable
                events={events}
                // eventColor="red"
                ref={calendarRef}
                rerenderDelay={10}
                initialDate={date}
                initialView={view}
                dayMaxEventRows={3}
                eventDisplay="block"
                headerToolbar={false}
                allDayMaintainDuration
                eventResizableFromStart
                select={handleSelectRange}
                eventClick={handleSelectEvent}
                height={isDesktop ? 720 : "auto"}
                plugins={[
                  listPlugin,
                  dayGridPlugin,
                  timelinePlugin,
                  timeGridPlugin,
                  interactionPlugin,
                ]}
              />
            </CalendarStyle>
          </Card>

          {
            <DialogAnimate open={isOpenModal} onClose={handleCloseModal}>
              {selectedEvent?.type === "compliance_task" && selectedEvent.id ? (
                <>
                  <DialogTitle> Show Compliance Task</DialogTitle>
                  <CompanyCalendarForm
                    event={selectedEvent || {}}
                    range={selectedRange}
                    onCancel={handleCloseModal}
                  />
                </>
              ) : (
                <>
                  <DialogTitle>Show Task</DialogTitle>
                  <CalendarForm
                    event={selectedEvent || {}}
                    range={selectedRange}
                    onCancel={handleCloseModal}
                  />
                </>
             )}

            </DialogAnimate>
          }
        </Grid>
      </Grid>
    </>
  );
}

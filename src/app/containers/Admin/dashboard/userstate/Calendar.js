import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./EventHelper";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Paper, IconButton, Button, ButtonGroup, Box } from "@mui/material";
import { ViewDay, ViewWeek, ViewModule } from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {
  const [eventsData, setEventsData] = useState(events);
  const [view, setView] = useState("month"); // Default view: "month"

  const handleSelect = ({ start, end }) => {
 
    const title = window.prompt("New Event name");
    if (title) setEventsData([...eventsData, { start, end, title }]);
  };

  const CustomToolbar = (toolbar) => {
    const goToBackward = () => {
      toolbar.onNavigate("PREV");
    };

    const goToForward = () => {
      toolbar.onNavigate("NEXT");
    };

    const goToToday = () => {
      toolbar.onNavigate("TODAY");
    };

    const switchToDay = () => {
      setView("day");
    };

    const switchToWeek = () => {
      setView("work_week");
    };

    const switchToMonth = () => {
      setView("month");
    };

    return (
      <Paper
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "5px",
          color: "#3C4256",
     
          "@media (max-width: 600px)": {
            flexDirection: "column",
          },
        }}
      >
        <Box>
          <ButtonGroup size="small" variant="outlined">
            <Button
              onClick={switchToDay}
              color="inherit"
              startIcon={<ViewDay />}
            >
              Day
            </Button>
            <Button
              onClick={switchToWeek}
              color="inherit"
              startIcon={<ViewWeek />}
            >
              Week
            </Button>
            <Button
              onClick={switchToMonth}
              color="inherit"
              startIcon={<ViewModule />}
            >
              Month
            </Button>
          </ButtonGroup>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            size="small"
            color="inherit"
            onClick={goToBackward}
            aria-label="Backward"
          >
            <ChevronLeftIcon />
          </IconButton>
          <span>
            <strong>{toolbar.label}</strong>
          </span>
          <IconButton
            size="small"
            color="inherit"
            onClick={goToForward}
            aria-label="Forward"
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
        <IconButton
          size="small"
          color="rgb(255, 255, 255)"
          onClick={goToToday}
          aria-label="Today"
          sx={{
            background: "rgb(255, 86, 48)",
            borderRadius: "8px",
            padding: "8px 16px",
            color: "white",
            fontSize: "13px",
            fontWeight: "700",
            "&:hover": {
              background: "#cc281d",   
            },
          }}
        >
          Today
        </IconButton>
      </Paper>
    );
  };

  return (
    <Paper elevation={4} sx={{ background: "white" }}>
      <Calendar
        views={["day", "work_week", "month"]}
        view={view}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        style={{
          height: "auto",
          minHeight:'100vh',
          maxHeight:'90vh'
        }}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleSelect}
        components={{
          toolbar: CustomToolbar,
        }}
      />
    </Paper>
  );
}

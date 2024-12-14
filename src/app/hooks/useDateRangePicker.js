import { useState, useEffect } from "react";
import { isSameDay, isSameMonth } from "date-fns";
//
import useToggle from "./useToggle";

// ----------------------------------------------------------------------

export default function useDateRangePicker(date) {
  const {
    toggle: openPicker,
    onOpen: onOpenPicker,
    onClose: onClosePicker,
  } = useToggle();

  const [startTime, setStartTime] = useState(date[0]);

  const [endTime, setEndTime] = useState(date[1]);

  useEffect(() => {
    if (date && date.length && date[0]) {
      setStartTime(new Date(date[0]));
    }
    if (date && date.length && date[1]) {
      setEndTime(new Date(date[1]));
    }
  }, [date[0], date[1]]);

  const isSameDays =
    startTime && endTime
      ? isSameDay(new Date(startTime), new Date(endTime))
      : false;

  const isSameMonths =
    startTime && endTime
      ? isSameMonth(new Date(startTime), new Date(endTime))
      : false;

  const handleChangeStartTime = (newValue) => {
    const pktDate = new Date(newValue);
    const utcTime = new Date(pktDate.getTime() + 5 * 60 * 60 * 1000);
    setStartTime(utcTime);
  };

  const handleChangeEndTime = (newValue) => {
    const pktDate = new Date(newValue);
    const utcTime = new Date(pktDate.getTime() + 5 * 60 * 60 * 1000);
    setEndTime(utcTime);
  };

  return {
    startTime,
    endTime,
    onChangeStartTime: handleChangeStartTime,
    onChangeEndTime: handleChangeEndTime,
    //
    openPicker,
    onOpenPicker,
    onClosePicker,
    //
    setStartTime,
    setEndTime,
    isSameDays,
    isSameMonths,
  };
}

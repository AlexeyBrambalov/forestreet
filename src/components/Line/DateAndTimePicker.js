import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { DataContext } from "../../Context/DataContext";
import { dateFormat } from "../../utilities/functions";

import "react-datepicker/dist/react-datepicker.css";

export default function DateAndTimePicker() {
  const { time, setTime } = useContext(DataContext);

  const [value, setValue] = useState({
    startDate: moment(time.startTime)._d,
    endDate: moment(time.endTime)._d,
  });

  const handleChange = ({ startDate, endDate }) => {
    startDate = startDate || value.startDate;
    endDate = endDate || value.endDate;
    if (moment(startDate).isAfter(moment(endDate))) {
      endDate = startDate;
    }
    setValue({ startDate, endDate });
    setTime({
      startTime: dateFormat(startDate),
      endTime: dateFormat(endDate),
    });
  };

  const handleChangeStart = (startDate) => handleChange({ startDate });

  const handleChangeEnd = (endDate) => handleChange({ endDate });

  return (
    <div className="row">
      <div className="picker">
        <DatePicker
          inline
          selected={value.startDate}
          showTimeSelect
          timeIntervals={30}
          startDate={value.startDate}
          endDate={value.endDate}
          onChange={handleChangeStart}
          selectsStart
          dateFormat="HH:mm"
        />

        <DatePicker
          selected={value.startDate}
          selectsStart
          showTimeSelect
          showTimeSelectOnly
          dateFormat="dd-MM-y HH:mm"
        />
      </div>
      <div>
        <DatePicker
          inline
          selected={value.endDate}
          showTimeSelect
          timeIntervals={30}
          startDate={value.startDate}
          endDate={value.endDate}
          onChange={handleChangeEnd}
          selectsStart
          dateFormat="HH:mm"
          maxDate={new Date()}
        />

        <DatePicker
          selected={value.endDate}
          selectsStart
          showTimeSelect
          showTimeSelectOnly
          dateFormat="dd-MM-y HH:mm"
        />
      </div>
    </div>
  );
}

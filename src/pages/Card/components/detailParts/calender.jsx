
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import dayjs from 'dayjs';




function Calender() {

    const defaultStartDate = dayjs('2024-09-01');
    const defaultEndDate = dayjs('2024-09-06');

    // Manage selected date range
    const [value, setValue] = useState([defaultStartDate, defaultEndDate]);


    // Handle date range changes
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <>

            <div className='md:block hidden px-16 '>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDateRangePicker
                        slotProps={{
                            actionBar: { actions: [] },

                        }}

                        value={value}
                        onChange={handleChange}
                        calendars={2}
                    />
                </LocalizationProvider>
            </div>
            <div className='md:hidden block  '>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDateRangePicker
                        slotProps={{
                            actionBar: { actions: [] },

                        }}

                        value={value}
                        onChange={handleChange}
                        calendars={1}
                    />
                </LocalizationProvider>
            </div>




        </>
    );

}

export default Calender;

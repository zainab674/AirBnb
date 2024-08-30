
import React from 'react';

import Button from '@mui/material/Button';
import useForkRef from '@mui/utils/useForkRef';

import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';


const DateRangeButtonField = React.forwardRef((props, ref) => {
    const {
        setOpen,
        label,
        id,
        disabled,
        InputProps: { ref: containerRef } = {},
        inputProps: { 'aria-label': ariaLabel } = {},
    } = props;

    const handleRef = useForkRef(ref, containerRef);

    return (
        <Button
            variant="underlined"
            id={id}
            disabled={disabled}
            ref={handleRef}
            aria-label={ariaLabel}
            onClick={() => setOpen?.((prev) => !prev)}
            sx={{ textDecoration: 'underline' }}
        >
            {label ? `Edit` : 'Edit'}
        </Button>
    );
});

DateRangeButtonField.fieldType = 'single-input';

const ButtonDateRangePicker = React.forwardRef((props, ref) => {
    const [open, setOpen] = React.useState(false);

    return (
        <DateRangePicker
            slots={{ field: DateRangeButtonField, ...props.slots }}
            slotProps={{ field: { setOpen } }}
            ref={ref}
            {...props}
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        />
    );
});

export default ButtonDateRangePicker;
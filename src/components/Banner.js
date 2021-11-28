import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import { AiOutlineClose } from "react-icons/ai";

export default function TransitionAlerts({open, setOpen, text, isOk}) {
  return (
    <Box sx={{ width: '100%' }} position="absolute" >
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <AiOutlineClose fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
          variant="filled"
          severity={isOk ? "success" : "error"}
        >
          {text}
        </Alert>
      </Collapse>
    </Box>
  );
}
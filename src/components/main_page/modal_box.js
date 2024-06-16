import React from 'react';
import { Modal, Button, Box } from '@mui/material';

const ModalComponent = ({ open, onClose, text }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          height: '50%',
          width: '50%',
          bgcolor: '#fffdf0',
          p: 4,
          borderRadius: 4,
          border: '2px solid #000',
          boxShadow: '0 8px 0px rgba(0, 0, 0, 1)'
        }}
      >
        <h2 id="modal-modal-title">Hi</h2>
        <p id="modal-modal-description">{text}</p>
        {/* <Button onClick={onClose}>Close</Button> */}
      </Box>
    </Modal>
  );
};

export default ModalComponent;
import React from 'react';
import Modal from 'react-modal';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  IconButton,
  MenuItem,
  Select,
  TextField
} from '@mui/material';
import { Container } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';

import { TodoAssigneeList, TodoStatus } from '../constants';
import { useStore } from '../stores';

Modal.setAppElement('#root');

function Form() {
  const addTodo = useStore(state => state.addTodo);
  const toggleModal = useStore(state => state.toggleModal);
  const isModalOpen = useStore(state => state.isModalOpen);
  const updateTodo = useStore(state => state.updateTodo);
  const editTodoId = useStore(state => state.editTodoId);
  const formState = useStore(state => state.formState);
  const setFormState = useStore(state => state.setFormState);

  return (
    <Modal
      className="noop"
      style={{
        content: {
          width: '100%',
          height: '100%',
          background: '#e4e4e7',
          outline: 'none'
        }
      }}
      isOpen={isModalOpen}
      onRequestClose={() => toggleModal(false)}
    >
      <IconButton
        sx={{ position: 'absolute', top: '10px', right: '10px' }}
        onClick={() => toggleModal(false)}
      >
        <CloseIcon />
      </IconButton>
      <Container sx={{ maxWidth: '80%', paddingTop: 2 }}>
        <FormControl fullWidth>
          <FormLabel htmlFor="title">Title</FormLabel>
          <TextField
            id="title"
            sx={{
              marginBottom: '16px'
            }}
            placeholder="Ne yapılması gerekiyor?"
            value={formState.title}
            onChange={e => setFormState(e, 'title')}
          />

          <FormLabel htmlFor="comment">Comment</FormLabel>
          <TextField
            id="comment"
            sx={{
              marginBottom: '16px'
            }}
            placeholder="Biraz daha detaylandir"
            value={formState.comment}
            onChange={e => setFormState(e, 'comment')}
          />

          <FormLabel id="assignee-label" htmlFor="assignee">
            Assignee
          </FormLabel>
          <Select
            labelId="assignee-label"
            id="assignee"
            value={formState.assignee}
            onChange={e => setFormState(e, 'assignee')}
            sx={{
              marginBottom: '16px'
            }}
          >
            <MenuItem value="" disabled hidden>
              Lütfen seçiniz
            </MenuItem>
            {Object.values(TodoAssigneeList).map(i => {
              return (
                <MenuItem key={i.id} value={i.id}>
                  {i.name}
                </MenuItem>
              );
            })}
          </Select>

          <FormLabel id="status-label" htmlFor="status">
            Status
          </FormLabel>
          <Select
            labelId="status-label"
            id="status"
            value={formState.status}
            onChange={e => setFormState(e, 'status')}
            sx={{
              marginBottom: '16px'
            }}
          >
            {Object.values(TodoStatus).map(s => {
              return (
                <MenuItem key={s.value} value={s.value}>
                  {s.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <Box textAlign="center">
          <Button
            size="large"
            variant="contained"
            onClick={editTodoId ? updateTodo : addTodo}
          >
            {editTodoId ? 'Kaydet' : 'Ekle'}
          </Button>
        </Box>
      </Container>
    </Modal>
  );
}

export default Form;

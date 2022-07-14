import * as React from 'react';
import Modal from 'react-modal';
import { useForm, Controller } from 'react-hook-form';
import {
  Box,
  Button,
  FormGroup,
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

const formFieldDefaultValues = {
  title: '',
  comment: '',
  assignee: '',
  status: ''
};

function Form() {
  const addTodo = useStore(state => state.addTodo);
  const toggleModal = useStore(state => state.toggleModal);
  const isModalOpen = useStore(state => state.isModalOpen);
  const updateTodo = useStore(state => state.updateTodo);
  const editTodoId = useStore(state => state.editTodoId);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: formFieldDefaultValues
  });

  React.useEffect(() => {
    if (editTodoId) {
      const todo = useStore.getState().todos.find(todo => todo.id === editTodoId);

      reset(todo);
    }
  }, [editTodoId, reset]);

  const onSubmit = data => {
    if (editTodoId) {
      updateTodo(data);
      reset(formFieldDefaultValues);
    } else {
      addTodo(data);
      reset(formFieldDefaultValues);
    }
  };

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
        <FormGroup fullwidth="true">
          <FormLabel htmlFor="title">Title</FormLabel>
          <Controller
            name="title"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                id="title"
                sx={{
                  marginBottom: '16px'
                }}
                error={!!errors.title}
                placeholder="Ne yapılması gerekiyor?"
                {...field}
              />
            )}
          />

          <FormLabel htmlFor="comment">Comment</FormLabel>
          <Controller
            name="comment"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                id="comment"
                sx={{
                  marginBottom: '16px'
                }}
                error={!!errors.comment}
                placeholder="Biraz daha detaylandır"
                {...field}
              />
            )}
          />
          <FormLabel id="assignee-label" htmlFor="assignee">
            Assignee
          </FormLabel>
          <Controller
            name="assignee"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                id="assignee"
                labelId="assignee-label"
                error={!!errors.assignee}
                sx={{
                  marginBottom: '16px'
                }}
                {...field}
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
            )}
          />

          <FormLabel id="status-label" htmlFor="status">
            Status
          </FormLabel>
          <Controller
            name="status"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                labelId="status-label"
                id="status"
                sx={{
                  marginBottom: '16px'
                }}
                error={!!errors.status}
              >
                {Object.values(TodoStatus).map(s => {
                  return (
                    <MenuItem key={s.value} value={s.value}>
                      {s.label}
                    </MenuItem>
                  );
                })}
              </Select>
            )}
          />
        </FormGroup>

        <Box textAlign="center">
          <Button size="large" variant="contained" onClick={handleSubmit(onSubmit)}>
            {editTodoId ? 'Kaydet' : 'Ekle'}
          </Button>
        </Box>
      </Container>
    </Modal>
  );
}

export default Form;

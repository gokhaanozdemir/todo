import React from 'react';
import { Button, Divider, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { TodoStatus } from '../constants';
import { useStore } from '../stores';

function TodoItem({ title, comment, status, id }) {
  const deleteTodo = useStore(state => state.deleteTodo);
  const handleClickEdit = useStore(state => state.handleClickEdit);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          padding: 2
        }}
      >
        <Stack>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="subtitle1">{comment}</Typography>
          <Typography variant="caption">
            {Object.values(TodoStatus).find(s => s.value === status).label}
          </Typography>
        </Stack>

        <Stack>
          <Button
            variant="contained"
            color="info"
            startIcon={<EditIcon />}
            onClick={() => handleClickEdit(id)}
            sx={{ marginBottom: 0.5 }}
          >
            Duzenle
          </Button>
          <Button
            variant="contained"
            startIcon={<DeleteIcon />}
            onClick={() => deleteTodo(id)}
            color="error"
          >
            Sil
          </Button>
        </Stack>
      </Box>
      <Divider sx={{ height: '2px', width: '100%' }} />
    </>
  );
}

export default TodoItem;

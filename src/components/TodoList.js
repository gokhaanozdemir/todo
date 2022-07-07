import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button, IconButton, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';

import Form from './Form';
import Searchbox from './Searchbox';
import TodoItem from './TodoItem';
import { useStore } from '../stores';

function TodoList() {
  const todos = useStore(state => state.todos);
  const handleClickAdd = useStore(state => state.handleClickAdd);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';

  const filteredTodos = React.useMemo(() => {
    const fieldsToSearch = ['title'];

    return todos.filter(todo => {
      return fieldsToSearch.some(field => {
        return todo[field].toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
      });
    });
  }, [todos, searchQuery]);

  return (
    <>
      <Form />

      <Container maxWidth="md" sx={{ paddingTop: 2 }}>
        {todos.length > 0 ? (
          <>
            <Searchbox />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 2
              }}
            >
              {filteredTodos.length > 0 ? (
                filteredTodos.map(todo => {
                  return <TodoItem {...todo} key={todo.id} />;
                })
              ) : (
                <Typography
                  variant="h5"
                  color="red"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)'
                  }}
                >
                  Sonuç yok!
                </Typography>
              )}
            </Box>
            <IconButton
              size="large"
              color="info"
              onClick={handleClickAdd}
              sx={{
                position: 'absolute',
                right: '30px',
                top: '50%',
                transform: 'translateY(-50%)'
              }}
            >
              <AddIcon />
            </IconButton>
          </>
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/todo-empty.jpg)`,
                backgroundSize: 'contain',
                width: '300px',
                height: '300px'
              }}
            />
            <Typography variant="h5" mt={2} mb={2}>
              Henüz yapılacak iş yok!
            </Typography>
            <Button variant="contained" onClick={handleClickAdd}>
              Başla
            </Button>
          </Box>
        )}
      </Container>
    </>
  );
}

export default TodoList;

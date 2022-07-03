import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';

import Searchbox from './Searchbox';
import TodoItem from './TodoItem';
import { useStore } from '../useStore';

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
              <Typography>No results</Typography>
            )}
          </Box>
          <Button
            variant="contained"
            sx={{ position: 'absolute', right: '30px', bottom: '30px' }}
            onClick={handleClickAdd}
          >
            Add todo
          </Button>
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
            Todo ekle
          </Button>
        </Box>
      )}
    </Container>
  );
}

export default TodoList;

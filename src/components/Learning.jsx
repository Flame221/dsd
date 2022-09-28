import { Box, Button, Checkbox, FormControl, FormErrorMessage, Heading, HStack, Icon, IconButton, Input, Link as CLink, Spacer, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiAtom } from 'react-icons/bi'
import { IoIosAdd } from 'react-icons/io'
import { BsCheck } from 'react-icons/bs'
import { ImCross } from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../features/todo/todoSlice'
import { Link } from 'react-router-dom'
import { logout } from '../features/auth/authSlice'
const Learning = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos)
  const [todo, setTodo] = useState('');
  const clearTodo = () => setTodo('') 
  const addTodo = (e) => {
    e.preventDefault();
    if (!isEmpty) {
      dispatch(add(todo));
      clearTodo();
    }
  }
  const removeTodo = (i) => dispatch(remove(i));
  const isEmpty = todo === ''
  return (
    <>
    <CLink
    as={ Link }
    color='white'
    to='/'
      position={'absolute'}
      left={10}
      top={10}
      onClick={() => dispatch(logout())}
    >Log out</CLink>
    <VStack bg={'green.300'} h='100vh' color='white'  >
    
      <HStack m={10}>
        <BiAtom size='50px' />
        <Heading>Hello learning</Heading>
      </HStack>
      <form onSubmit={addTodo}>

      <HStack borderRadius={20}
        h={20} p={5} bg='green.500' width={'400px'}>
        <FormControl isInvalid={isEmpty}>
          
        <Input color={'green'} variant={'solid'} value={todo} onChange={e => setTodo(e.target.value)} />
        </FormControl>
        <IconButton type='submit' isRound={true}>
          <IoIosAdd size='20px' color='black'/>
        </IconButton>
      </HStack>
      </form>
      {todos.map((todo, i) => (
        <HStack borderRadius={20} key={`todos-${i}`}
        h={20} p={5} bg='green.500' width={'400px'}>
          <Spacer></Spacer>
          <Text fontSize='xl'>{todo}</Text>
          <Spacer></Spacer>
          <IconButton onClick={() => removeTodo(i)} isRound={true} variant='outline'
            _hover={{ bg: "white", color: 'green.500' }}>
            <IoIosAdd size='30px' style = {{transform: 'rotate(45deg)' }}/>
          </IconButton>

        </HStack>
        ))}
    </VStack>
    </>
  )
}

export default Learning
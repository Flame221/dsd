import { useState } from 'react';
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Center,
  InputGroup,
  InputRightElement,
  Checkbox,
  Link,
  FormErrorMessage
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authSlice';

const Login = () => {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()
  const handleBack = () => navigate('/');
  const dispatch = useDispatch();
  function onSubmit(values) {
    console.log(values);
    console.log(isLoggedin);
    dispatch(login(values))
    
  }
  const isLoggedin = useSelector(state => state.auth.isLoggedin)

  return (
    <Container maxW="100%" p={{ base: 5, md: 10 }} h='100vh' bg='green.200'>
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="2xl" color='white'>Sign in</Heading>
          </Stack>
          <form onSubmit={handleSubmit(onSubmit)}>
          <VStack
            boxSize={{ base: 'xs', sm: 'sm', md: 'md' }}
            h="max-content !important"
            bg={useColorModeValue('white', 'gray.700')}
            rounded="lg"
            p={{ base: 5, sm: 10 }}
            spacing={8}
          >
            <VStack spacing={4} w="100%">
            
              <FormControl id="username" isInvalid={errors.username}>
                <FormLabel htmlFor='username'>Username</FormLabel>
                <Input rounded="md" type="username" 
                  id='username'
                  placeholder='username'
                {...register('username', {
                  required: 'This is required',
                  minLength: { value: 4, message: 'Minimum length should be 4' },
                    
                  })}
                />
                <FormErrorMessage>
                  {errors.username && errors.username.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="password" isInvalid={errors.password}>
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                  <Input rounded="md" type={show ? 'text' : 'password'} {...register('password', {
                    required: 'This is required',
                  })} />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      rounded="md"
                      bg={useColorModeValue('gray.300', 'gray.700')}
                      _hover={{
                        bg: useColorModeValue('gray.400', 'gray.800')
                      }}
                      onClick={handleClick}
                    >
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              
            </VStack>
            <VStack w="100%">
              <Button
                colorScheme='green'
                variant='solid'
                rounded="md"
                w="100%"
                type="submit"
              >
                Sign in
              </Button>
              <Button
                variant='solid'
                rounded="md"
                w="100%"
                type="submit"
                onClick={handleBack}
              >
                Back
              </Button>
            </VStack>
          </VStack>
          </form>
        </Stack>
      </Center>
    </Container>
  )
}

export default Login
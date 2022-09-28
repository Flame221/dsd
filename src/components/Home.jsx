import { Button, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <VStack p={100} h='100vh' bg='green.200'>
      <Button as={ Link } p={100} to='/learning' colorScheme='green' fontSize='4xl'>Learning</Button>
    </VStack>
  )
}

export default Home
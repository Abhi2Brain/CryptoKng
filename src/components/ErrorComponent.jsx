import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorComponent = ({msg}) => {
  return <Alert status='error'
   position={'fixed'}
   justifyContent={'center'}
   alignSelf={'center'}
   left={'50%'}
   w={'container.lg'}
  transform= {'translateX(-50%)'}
 >
 <AlertIcon/>
 {msg}
  </Alert>
  
}

export default ErrorComponent

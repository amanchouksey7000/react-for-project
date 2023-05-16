import { Heading, Stack, VStack,Text } from '@chakra-ui/react'
import React from 'react'

const Videos = () => {
  return <Stack direction={['column','row']}
  h={'100vh'}>

<VStack w={'full'}>
    <viodes
    controls
    controlslist='nodownload'
    src=''
    style={{
        width: '100%',
    }}
    >

    </viodes>
    <VStack align={'flex-start'} p={'8'} w={'full'} overflow={'auto'}>
    <Heading>Sample Videos 1</Heading>
    <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio assumenda consequatur a 
    </Text>
   </VStack>
</VStack>
<VStack w={['full','xl']} align={"stretch"} p="8" spacing={'8'} overflowy={'auto'}>

<button variant={'ghost'} colorscheme={'purple'}>
    Lecture 1
</button>
</VStack>

  </Stack>
};

export default Videos
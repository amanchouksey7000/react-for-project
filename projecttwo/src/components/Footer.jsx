import { Box, Stack, VStack,Heading, HStack,Input,Text,Button } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from "react-icons/ai"

const Footer = () => {
  return  (
   <Box bg={'blackAlpha.900'} minH={'40'} p='16'color={'white'}>
           <Stack direction={['column','row']}>

           <VStack alignItems={'strectch'} w={'full'} px={'4'}>

          <Heading size='md' textTransform={'uppercase'} textAlign={['center','left']}>
              Subscribe to get updates

          </Heading>
          <HStack
          borderBottom={'2px solid white'}
          py='2'
          >

          

          <Input placeholder="Enter Email Here..."
                 border={'none'}
                 borderRadius={'none'}
                 outline={'none'}
                 focusBorderColor='none'
                 />
                 <button
                 p={'0'}
                 colorScheme={'purple'}
                 variant={'ghost'}
                 borderRadius={'0 20px 20px 0'}
                 >
                    <AiOutlineSend size={20}/>
                 </button>
                 </HStack>
          </VStack>
          <VStack
          w={'full'}
          borderRight={['none','1px solid white']}
          borderLeft={['none','1px solid white']}
          >
<Heading textTransform={'uppercas'} textAlign={'center'}>VIDEO HUB
</Heading>
          <Text>All right received</Text>
          </VStack>
          <VStack w={'full'}>
             <Heading size={'md'} textTransform={'white'} >
               Social Media
             </Heading>
             <Button variant={'link'} colorScheme={'uppercase'}>
                <a target={'black'} href="http://youtube.com/6packprogrammer">Youtube</a>
             </Button>
             <Button variant={'link'} colorScheme={'uppercase'}>
                <a target={'black'} href="http://Instagram.com/meabhisingh">Instagram</a>
             </Button>

             <Button variant={'link'} colorScheme={'uppercase'}>
                <a target={'black'} href="http://github.com/meabhisingh">GitGub</a>
             </Button>


          </VStack>
           </Stack>
  </Box>
  );
};

export default Footer;
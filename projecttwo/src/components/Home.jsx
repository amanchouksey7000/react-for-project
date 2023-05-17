import { Box, Container, Heading, Image, Stack,Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    textTransform: "uppercase",
    p: "4",
    size: "4xl",
};

const Home = () => {
  return   <Box>
<MyCarousel />

<Container minH={'100vh'} maxW={'container.xl'} p="16">
<Heading textTransform={'uppercase'} py="2" w={'fit-content'} borderBottom={'2px solid'} m='auto'> Services </Heading>

<Stack
h="full"
p={'4'}
alignItems={'center'}
direction={['column','row']}
>

   <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'}/>

   <Text letterSpacing={'widset'} lineHeight={'190%'} p={["4","16"]} textAlign={'center'}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, doloribus fuga. Qui obcaecati eaque fuga ipsa, accusantium nam minima quis dolores architecto, exercitationem repellat autem corrupti nostrum natus nihil voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus porro iste ea iusto atque aspernatur! Nemo, odit a ad omnis eveniet magnam iste mollitia, temporibus et ab earum, hic cum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quia. Sapiente omnis magnam saepe, accusamus vero temporibus amet numquam, harum ut similique velit dignissimos, cumque eaque blanditiis libero quasi nam.


   </Text>
</Stack>
    </Container>

  </Box>
};

const MyCarousel = ()=>(
    <Carousel autoplay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
<Box w="full" h={'100vh'}>
    <Image src={img1} height='full' w={'full'} objectFit={'cover'}/>
    <Heading bgColor={'blackAlpha.600'} color={'white'
    } {...headingOptions}>Watch The Future</Heading>
    
</Box>
<Box w="full" h={'100vh'}>
    <Image src={img2} height='full' w={'full'} objectFit={'cover'}/>
    <Heading bgColor={'blackAlpha.600'} color={'white'
    } {...headingOptions}> Future is gaming </Heading>
    
</Box>
<Box w="full" h={'100vh'}>
    <Image src={img3} height='full' w={'full'} objectFit={'cover'}/>
    <Heading bgColor={'blackAlpha.600'} color={'white'
    } {...headingOptions}> Gaming on console </Heading>
    
</Box>
<Box w="full" h={'100vh'}>
    <Image src={img4} height='full' w={'full'} objectFit={'cover'}/>
    <Heading bgColor={'blackAlpha.600'} color={'white'
    } {...headingOptions}> Night Life is cool </Heading>
    
</Box>







    </Carousel>
    );

export default Home;
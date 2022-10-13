import { Container, Image } from '@mantine/core';
import image from '../assets/construction.webp';

function home() {
  return (
    <Container>
      <h2>Home</h2>
      <p>Hi! This site is currently under construction, please check back later!</p>
      <Image src={image} width={500} />
    </Container>
  );
}

export default home;
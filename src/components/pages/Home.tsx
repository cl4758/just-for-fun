import { Container, Image, createStyles } from '@mantine/core';
import image from '../../assets/construction.webp';

const useStyles = createStyles((theme) => ({
  photo: {
    alignContent: 'center',
    justifyContent: 'center'
  },
  header: {
    color: theme.colorScheme === 'dark' ? '#f6ed48' : '#43a047',
    fontWeight: 500
  }
}));

function Home() {
  const { classes } = useStyles();

  return (
    <Container>
      <h2 className={classes.header}>Home</h2>
      <p>Hi! This site is currently under construction, but feel free to take a look around!</p>
      <Image src={image} width={'50vw'} />
    </Container>
  );
}

export default Home;
import { Container, createStyles, Grid, Image } from '@mantine/core';
import mooseKiss from '../../assets/moose-kiss.jpg';

const useStyles = createStyles((theme) => ({
  photo: {
    alignContent: 'center',
    justifyContent: 'center'
  },
}));

function About() {
  const { classes } = useStyles();

  return (
    <Container>
      <h2>About</h2>
      <Grid>
        <Grid.Col span={6}>
          <Image src={mooseKiss} width={300}></Image>
        </Grid.Col>
        <Grid.Col span={6} className={classes.photo}>
          <p>
            Hi! I'm a software engineer based in New York City.
            I graduated from NYU Stern in 2022 with a double major in economics and computer science.
          </p>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default About;
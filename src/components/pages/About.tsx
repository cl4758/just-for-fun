import { Container, createStyles, Grid, Image } from '@mantine/core';
import mooseKiss from '../../assets/moose-kiss.jpg';

const useStyles = createStyles((theme) => ({
  photo: {
    alignContent: 'center',
    justifyContent: 'center'
  },
  header: {
    color: theme.colorScheme === 'dark' ? '#e3be37' : '#74dae4',
    fontWeight: 500
  }
}));

function About() {
  const { classes } = useStyles();

  return (
    <Container>
      <h2 className={classes.header}>About Me</h2>
      <Grid>
        <Grid.Col span={6}>
          <Image src={mooseKiss} width={300}></Image>
        </Grid.Col>
        <Grid.Col span={6} className={classes.photo}>
          <p>
            Hi! I'm a software engineer based in New York City.
            I graduated from NYU Stern in 2022 with a double major in economics and computer science.
            I'm currently working at BlackRock as a software engineer on backend services. I'm interested in sustainability,
            healthcare, and economics.
            <br></br><br></br>
            Outside of work, you'll most often find me with my dog, Moose. He loves taking walks,
            especially when they end at the dog park. Otherwise, I spend most of my time running,
            reading, and baking. Personal favorite projects including baking sourdough with fun flavors,
            brewing kombucha, attempting to make nut butters out of every nut imaginable, and super long runs.
          </p>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default About;
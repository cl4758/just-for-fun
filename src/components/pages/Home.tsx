import { Container, Text, createStyles } from '@mantine/core';
import Projects from './Projects';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  photo: {
    alignContent: 'center',
    justifyContent: 'center'
  },
  header: {
    fontWeight: 500,
    fontSize: '2.5em'
  },
  title: {
    background: theme.colorScheme === 'dark' ? 'linear-gradient(to right, #f48fb1, #ec8225,#e3be37, #f6ed48 )' : 'linear-gradient(to right, #43a047,#74dae4, #2196f3,  #7e57c2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 600,
    fontSize: '6em',
    width: 'fit-content',
    fontFamily: 'Inter, Merriweather',
    paddingLeft: '5vw',
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingLeft: '3vw',
      fontSize: '5em'
    }
  },
  bio: {
    fontWeight: 400,
    fontSize: '1.5em'
  },
  underlined: {
    boxShadow: 'inset 0 -1rem 0 rgba(244, 143, 177, 0.3)'
  },
  underlined2: {
    color: 'rgba(244, 143, 177, 0.6)'
  },
  content: {
    height: '100vh'
  }
}));

function Home() {
  const { classes } = useStyles();

  return (
    <>
      <Container pt='2vh'>
        <div className={classes.content}>
          <Text className={classes.header}>Hi, I'm</Text>
          <Text className={classes.title}>Christine</Text>
          <Text className={classes.header} px='2vw'>&#8212; a <Text span className={classes.underlined} inherit>full-stack software engineer</Text>.</Text>
          <Text className={classes.bio} pt='6vh'>I'm based in NYC, where I build <Text span className={classes.underlined2} inherit>websites</Text> and <Text span className={classes.underlined2} inherit>desktop apps</Text>.</Text>
          <Text className={classes.bio}>In my free time, I'm researching climate solutions, taking my dog to the dog park, and running.</Text>
        </div>
      </Container>
      <Projects></Projects>
    </>
  );
}

export default Home;
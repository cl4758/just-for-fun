import { Container, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    marginLeft: 0
  },
}));

function About() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper}>
      <h2>About</h2>
    </Container>
  );
}

export default About;
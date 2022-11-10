import { Card, Container, createStyles, Grid, Image, Space, Stack } from '@mantine/core';
import { BadgeCard } from '../cards/BadgeCard';
import { HorizontalCard } from '../cards/HorizontalCard';

const useStyles = createStyles((theme) => ({
  photo: {
    alignContent: 'center',
    justifyContent: 'center'
  },
  header: {
    color: theme.colorScheme === 'dark' ? '#f9a825' : '#2196f3',
    fontWeight: 500
  }
}));

function Projects() {
  const { classes } = useStyles();

  return (
    <Container>
      <h2 className={classes.header}>Projects</h2>
    </Container>
  );
}

export default Projects;
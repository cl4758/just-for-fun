import { Container, createStyles, Space, Text } from '@mantine/core';
import { HorizontalCard } from '../cards/HorizontalCard';
import centralPark from '../../assets/race-reports/centralPark.md';
import tarc from '../../assets/race-reports/50mile.md';


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

function RunningProjects() {
  const { classes } = useStyles();

  return (
    <Container>
      <h2 className={classes.header}>Running</h2>
      <Text>Some stuff I've been up to: </Text>
      <Space h="md" />
      {/* <Grid gutter='xl'>
        <Grid.Col span={4}>
          <BadgeCard image='' title='ashdsj title' description='description' />
        </Grid.Col>
        <Grid.Col span={4}>
          <BadgeCard image='' title='another title' description='description' />
        </Grid.Col>
        <Grid.Col span={4}>
          <BadgeCard image='' title='third title' description='description' />
        </Grid.Col>
      </Grid> */}
      <HorizontalCard title='Central Park Loop Challenge - 37 miles' date='6/3/2022' content={centralPark} />
      <Space />
      <HorizontalCard title='TARC Fall Classic - 50 miles' date='9/10/2022' content={tarc} />
    </Container>
  );
}

export default RunningProjects;
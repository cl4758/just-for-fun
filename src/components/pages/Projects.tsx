import { Container, createStyles, Grid } from '@mantine/core';
import { ArticleCard } from '../cards/BadgeCard';
import r4rHomePage from '../../assets/run-for-rhinos home page.jpg';
import cowHomePage from '../../assets/cows.jpg';

const useStyles = createStyles((theme) => ({
  photo: {
    alignContent: 'center',
    justifyContent: 'center'
  },
  header: {
    color: theme.colorScheme === 'dark' ? '#ec8225' : '#2196f3',
    fontWeight: 500,
    fontSize: '2.5em'
  }
}));

function Projects() {
  const { classes } = useStyles();

  const skills = {
    'reactJS': { name: 'ReactJS', color: '' },
    'javascript': { name: 'Javascript', color: 'cyan' },
    'typescript': { name: 'Typescript', color: 'pink' },
    'nextJS': { name: 'NextJS', color: 'violet' },
    'mongoDB': { name: 'MongoDB', color: 'green' },
    'node': { name: 'NodeJS', color: 'lime' },
    'mapboxAPI': { name: 'Mapbox API', color: 'yellow' },
    'stravaAPI': { name: 'Strava API', color: 'orange' }
  }

  const r4r = 'I used NextJS to build a website to track a cross-country adventure. I stored data in MongoDB and also connected to the Strava API to pull run stats daily and MapBox API to track progress. Check out the tracking page for the integrations and fun visuals.';

  const cows = 'A fun class project built with vanilla javascript, NodeJS, and HTML/CSS to randomly generate a number and set of cow pictures.';


  return (
    <Container>
      <h2 className={classes.header}>Projects</h2>
      <Grid gutter={25}>
        <Grid.Col span={6}>
          <ArticleCard image={r4rHomePage} link='https://run-for-rhinos.vercel.app' title="Run for Rhinos Website" description={r4r} badges={[skills.reactJS, skills.nextJS, skills.typescript, skills.mongoDB, skills.mapboxAPI, skills.stravaAPI]} author={{
            name: 'christine',
            image: ''
          }}>
          </ArticleCard>
        </Grid.Col>
        <Grid.Col span={6}>
          <ArticleCard image={cowHomePage} link='https://github.com/cl4758/cows' title="Cow Generator" description={cows} badges={[skills.javascript, skills.node]} author={{
            name: 'christine',
            image: ''
          }}>
          </ArticleCard>
        </Grid.Col>
      </Grid>

    </Container>
  );
}

export default Projects;
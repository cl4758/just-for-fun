import { createStyles, Grid, Container } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  resume: {
    // marginTop: 10,
    padding: 30,
    justifyContent: 'center'
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  left: {
    textAlign: 'start',
    fontSize: theme.fontSizes.sm
  },
  right: {
    textAlign: 'end',
    fontSize: theme.fontSizes.sm
  },
  center: {
    textAlign: 'center'
  }
}));

function Resume() {
  const { classes } = useStyles();

  return (
    <Container className={classes.resume}>
      <Grid justify='center'>
        <Grid.Col className={classes.left} span={2}>
          978-727-5308 <br></br>
          New York, NY <br></br>
          christine.lai@stern.nyu.edu
        </Grid.Col>
        <Grid.Col className={classes.center} span={5}>
          <h2>boo</h2>
        </Grid.Col>
        <Grid.Col className={classes.right} span={2}>
          Github <br></br>
          LinkedIn <br></br>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default Resume;
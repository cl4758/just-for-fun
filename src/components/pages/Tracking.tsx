import { Container, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  photo: {
    alignContent: 'center',
    justifyContent: 'center'
  },
  header: {
    color: theme.colorScheme === 'dark' ? '#ec8225' : '#2196f3',
    fontWeight: 500
  }
}));

function Tracking() {
  const { classes } = useStyles();

  return (
    <Container>
      <h2 className={classes.header}>Tracking</h2>
    </Container>
  );
}

export default Tracking;
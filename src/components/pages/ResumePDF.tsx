import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import { Container, createStyles } from '@mantine/core';
import pdf from '../../assets/resume-final.pdf';

const useStyles = createStyles((theme) => ({
  resume: {
    // marginTop: 10,
    padding: 30,
    justifyContent: 'center',
    alignContent: 'center',

    '>*:first-child': {
      margin: '0 auto',
      borderStyle: 'solid',
      borderColor: theme.colors.dark[2],
    }
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


function ResumePDF() {
  const { classes } = useStyles();

  return (
    <Container>
      <Document file={pdf}>
        <Page pageNumber={1} className={classes.resume} />
      </Document>
    </Container>
  )

}

export default ResumePDF;
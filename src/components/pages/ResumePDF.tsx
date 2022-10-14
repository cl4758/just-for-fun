import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import { Container, createStyles, Button } from '@mantine/core';
import pdf from '../../assets/resume-final.pdf';
import { IconDownload } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  resume: {
    // marginTop: 10,
    padding: '3vh',
    justifyContent: 'center',
    alignContent: 'center',

    '>.react-pdf__Page__canvas': {
      margin: 'auto',
      borderStyle: 'solid',
      borderColor: theme.colors.dark[2],
      width: '61vh',
      height: '79vh'
    },

    '>.react-pdf__Page__annotations': {
      height: '2vh'
    },
  },


  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center'
  }

}));


function ResumePDF() {
  const { classes } = useStyles();

  return (
    <Container>
      <Document file={pdf}>
        <Page pageNumber={1} className={classes.resume} />
      </Document>
      <div className={classes.buttonWrapper}>
        <a href={pdf} target='_blank' rel='noopener noreferrer'>
          <Button rightIcon={<IconDownload />}>Download</Button>
        </a>
      </div>
    </Container>
  )

}

export default ResumePDF;
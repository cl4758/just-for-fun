import { Box, Paper, Container, createStyles, Text, Accordion, Stack } from "@mantine/core";
import { IconChevronDown } from '@tabler/icons';
import { NONAME } from "dns";

interface CardContent {
  text: string;
  // country: string;
  // badges: {
  //   emoji: string;
  //   label: string;
  // }[];
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingBottom: '5vh',
    paddingLeft: 0,
    borderBottom: 0,
    borderTop: 1.5,
    borderLeft: 0,
    borderRight: 0,
    borderStyle: 'solid',
    borderColor: theme.colors.dark[3],
    radius: 0
  },
  title: {
    fontSize: 20,
    fontWeight: 500
  },
  preview: {
    fontSize: 14
  }
}));

export function CardContent({ text }: CardContent) {
  return (
    <Paper>
      {text}
    </Paper>
  )
}
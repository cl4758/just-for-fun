import { Box, Paper, Container, createStyles, Text, Accordion, Anchor, Group } from "@mantine/core";
import { IconChevronDown } from '@tabler/icons';
import { NONAME } from "dns";
import { CardContent } from './CardContent';
import markdownFile from '../../assets/race-reports/centralPark.md';
import Markdown from 'markdown-to-jsx';
import { useEffect, useState } from "react";


interface HorizontalCardProps {
  title: string;
  // country: string;
  date: string;
  // badges: {
  //   emoji: string;
  //   label: string;
  // }[];
  content: any;
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
  },
  date: {
    fontSize: 14,
    fontColor: theme.colors.dark[5]
  },
  content: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    borderRadius: 10
  }
}));

export function HorizontalCard({ title, date, content }: HorizontalCardProps) {
  const { classes } = useStyles();
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(content)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    // <Container className={classes.wrapper}>
    //     <Text className={classes.title}>
    //       {title}
    //     </Text>
    //   <Text className={classes.preview}>
    //     {description}
    //   </Text>
    // </Container>
    <Accordion defaultValue="customization">
      <Accordion.Item value={title} className={classes.wrapper}>
        <Accordion.Control>
          <Group>
            <Text className={classes.title}>{title}</Text>
            <Text className={classes.date}>{date}</Text>
          </Group>
        </Accordion.Control>
        <Accordion.Panel className={classes.content}>
          <Markdown children={markdown} options={{
            overrides: {
              Anchor: {
                component: Anchor,
              },
            },
          }} />
          {/* <Text size="sm">{description}</Text> */}
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
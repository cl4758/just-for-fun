import {
  Card,
  Image,
  Text,
  Badge,
  Group,
  createStyles
} from '@mantine/core';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: theme.shadows.md,
    },
  },

  rating: {
    position: 'absolute',
    top: theme.spacing.xs,
    pointerEvents: 'none',
  },

  title: {
    display: 'block',
    marginTop: theme.spacing.md,
    fontSize: '1.2em'
  },

  action: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    }),
  },

  footer: {
    marginTop: theme.spacing.md,
  },
}));

interface ArticleCardProps {
  image: string;
  link: string;
  title: string;
  description: string;
  badges: SkillProps[];
  author: {
    name: string;
    image: string;
  };
}

interface SkillProps {
  name: string;
  color: string;
}

export function ArticleCard({
  className,
  image,
  link,
  title,
  description,
  author,
  badges,
  ...others
}: ArticleCardProps & Omit<React.ComponentPropsWithoutRef<'div'>, keyof ArticleCardProps>) {
  const { classes, cx, theme } = useStyles();
  const linkProps = { href: link, target: '_blank', rel: 'noopener noreferrer' };
  const [lines, setLines] = useState(3);

  function toggleHover(lineNumber: number) {
    setLines(lineNumber);
  }

  return (
    <Card withBorder radius="md" className={cx(classes.card, className)} {...others} onMouseEnter={() => toggleHover(10)} onMouseLeave={() => toggleHover(3)}>
      <Card.Section>
        <a {...linkProps}>
          <Image src={image} height={220} />
        </a>
      </Card.Section>

      <Text className={classes.title} component="a" {...linkProps}>
        {title}
      </Text>

      <Text color="dimmed" lineClamp={lines}>
        {description}
      </Text>

      <Group spacing={8} position="right" py={9}>
        {badges.map((badge) => (
          <Badge color={badge.color}>{badge.name}</Badge>
        ))}
      </Group>
    </Card>
  );
}

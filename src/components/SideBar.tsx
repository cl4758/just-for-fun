import { Menu, Aside, Text, createStyles, Group } from '@mantine/core';
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons';


const useStyles = createStyles((theme) => ({
  side: {
    borderLeft: 0,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  content: {
    marginBottom: 20
  },
  inner: {
    height: 50,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.md,
    fontWeight: 500,
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0]
    },
  },

  linkLabel: {
    justifyContent: 'center'
  },

  icon: {
    strokeWidth: 1.65,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
  }
}));

function SideBar() {
  const { classes } = useStyles();

  const links = [{ link: 'https://github.com/cl4758/', label: <IconBrandGithub className={classes.icon} /> },
  { link: 'https://linkedin.com/in/lai-christine/', label: <IconBrandLinkedin className={classes.icon} /> },
  { link: 'https://instagram.com/christinelai_', label: <IconBrandInstagram className={classes.icon} /> }];

  const items = links.map((link) => {
    return (
      <a
        key={link.link}
        href={link.link}
        className={classes.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.label}
      </a>
    );
  });

  return (
    <Aside width={{ base: 100 }} className={classes.side}>
      <Group spacing={5} className={classes.content}>
        {items}
      </Group>

    </Aside>
  );
}

export default SideBar;
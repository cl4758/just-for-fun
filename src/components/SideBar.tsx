import { Footer, Aside, MediaQuery, createStyles, Group } from '@mantine/core';
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconMail } from '@tabler/icons';


const useStyles = createStyles((theme) => ({
  side: {
    borderLeft: 0,
    display: 'flex',
    justifyContent: 'flex-end'
  },

  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '3vw'
  },

  content: {
    marginBottom: '3vh',
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

  const links = [{ link: 'mailto:christine.lai.00@gmail.com', label: <IconMail className={classes.icon} /> },
  { link: 'https://linkedin.com/in/lai-christine/', label: <IconBrandLinkedin className={classes.icon} /> },
  { link: 'https://github.com/cl4758/', label: <IconBrandGithub className={classes.icon} /> },
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
    <>
      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Aside hiddenBreakpoint="sm" width={{ xs: 0, sm: 100 }} className={classes.side}>
          <Group className={classes.content}>
            {items}
          </Group>
        </Aside>
      </MediaQuery>
      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <Footer height={40} className={classes.footer}>
          <Group spacing={2} className={classes.content}>
            {items}
          </Group>
        </Footer>
      </MediaQuery>
    </>
  );
}

export default SideBar;
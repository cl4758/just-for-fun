import { createStyles, Header, Group, Menu, Text, Center } from '@mantine/core';
import ColorSchemeToggle from './ColorSchemeToggle';


const useStyles = createStyles((theme) => ({
  inner: {
    height: '5vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '2vh',
    marginRight: '5vw'
  },

  header: {
    borderBottom: 0
  },

  main: {
    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
  },

  links: {
    '>*:nth-of-type(3n+1)': {
      color: theme.colorScheme === 'dark' ? '#f6ed48' : '#43a047'
    },
    '>*:nth-of-type(3n+2)': {
      color: theme.colorScheme === 'dark' ? '#f9a825' : '#2196f3'
    },
    '>*:nth-of-type(3n+3)': {
      color: theme.colorScheme === 'dark' ? '#f48fb1' : '#7e57c2'
    },
    gap: '1vw'
  },

  name: {
    marginLeft: '5vw',
    fontSize: 28,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: 16,
    },
    fontWeight: 630,
    // color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    background: theme.colorScheme === 'dark' ? 'linear-gradient(to right,  #f6ed48, #f9a825, #f48fb1 )' :
      'linear-gradient(to right, #43a047, #2196f3,  #7e57c2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.lg,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: 12,
    },
    fontWeight: 450,
    justifyContent: 'center'
    // '&:hover': {
    //   backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0]
    // },
  },

  linkLabel: {
    justifyContent: 'center'
  },


}));

interface HeaderSearchProps {
  links: { link: string; label: string; links: { link: string; label: string }[] }[];
}

function HeaderBar({ links }: HeaderSearchProps) {
  const { classes } = useStyles();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header height={56} className={classes.header}>
      <div className={classes.inner}>
        <Text className={classes.name}>CHRISTINE LAI</Text>
        <Group>
          <Group className={classes.links}>
            {items}
          </Group>
          <ColorSchemeToggle />
        </Group>
      </div>
    </Header>
  );
}

export default HeaderBar;
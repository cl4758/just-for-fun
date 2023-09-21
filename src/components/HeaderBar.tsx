import { createStyles, Header, Group, Menu, Text, Center, Burger, Transition, Paper } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons';
import ColorSchemeToggle from './ColorSchemeToggle';
import { useDisclosure } from '@mantine/hooks';
import { NavLink } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  inner: {
    height: '5vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '3vh',
    marginRight: '5vw'
  },

  header: {
    borderBottom: 0,
    height: '5vh'
  },

  main: {
    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
    '>*:nth-of-type(4n+1)': {
      color: theme.colorScheme === 'dark' ? '#f6ed48' : '#43a047'
    },
    '>*:nth-of-type(4n+2)': {
      color: theme.colorScheme === 'dark' ? '#e3be37' : '#74dae4'
    },
    '>*:nth-of-type(4n+3)': {
      color: theme.colorScheme === 'dark' ? '#ec8225' : '#2196f3'
    },
    '>*:nth-of-type(4n+4)': {
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
    background: theme.colorScheme === 'dark' ? 'linear-gradient(to right,  #f6ed48, #e3be37,#ec8225, #f48fb1 )' :
      'linear-gradient(to right, #43a047,#74dae4, #2196f3,  #7e57c2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    fontSize: theme.fontSizes.lg,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: 12,
    },
    fontWeight: 450,
    justifyContent: 'center',
    textDecorationLine: 'none'
  },

  menuLink: {
    color: theme.colorScheme === 'dark' ? '#ec8225' : '#2196f3',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
  },

  linkLabel: {
    justifyContent: 'center'
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  dropdown: {
    position: 'absolute',
    top: 56,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },

    '>*:nth-of-type(3n+1)': {
      color: theme.colorScheme === 'dark' ? '#f6ed48' : '#43a047'
    },
    '>*:nth-of-type(3n+2)': {
      color: theme.colorScheme === 'dark' ? '#f9a825' : '#2196f3'
    },
    '>*:nth-of-type(3n+3)': {
      color: theme.colorScheme === 'dark' ? '#f48fb1' : '#7e57c2'
    },
  },



}));

interface HeaderSearchProps {
  links: { link: string; label: string; links?: { link: string; label: string }[] }[];
}

function HeaderBar({ links }: HeaderSearchProps) {
  const { classes, cx } = useStyles();
  const [opened, { toggle, close }] = useDisclosure(false);


  const items = links.map((link, index) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>
        <NavLink
          to={item.link}
          style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none" })}
          className={classes.menuLink}
        >
          {item.label}
        </NavLink>
        {/* {item.label} */}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <NavLink
              to={link.link}
              style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none" })}
              className={classes.link}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={12} stroke={1.5} />
              </Center>
            </NavLink>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <NavLink
        key={link.label}
        to={link.link}
        style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none" })}
        className={classes.link}
      // className={classes.link}

      >
        {link.label}
      </NavLink>
    );
  });

  return (
    <Header className={classes.header} height={60}>
      <div className={classes.inner}>
        <Text className={classes.name}>CHRISTINE LAI</Text>
        <Group>
          <Group className={classes.links}>
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
          <Transition transition="pop-top-right" duration={200} mounted={opened}>
            {(styles) => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                {items}
              </Paper>
            )}
          </Transition>
          <ColorSchemeToggle />
        </Group>
      </div>
    </Header>
  );
}

export default HeaderBar;
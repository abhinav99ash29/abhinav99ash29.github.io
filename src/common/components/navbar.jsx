import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { GitHub, LinkedIn, Face, Home, Book, ContactMail,  } from '@material-ui/icons';
import useStyles from '../styles/navbarStyle';
import { Link } from 'react-router-dom';



export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const navLinks = [{name:'Home',link:'home'}, {name:'Resume',link:'resume'}, {name:'Contact',link:'contact'}, {name:'About Me',link:'about'}]

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        color="transparent"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {navLinks.map((item, index) => (
            <Link to={item.link} style={{color:'unset', textDecoration:'none'}} key={item.name}>
              <ListItem button key={item.name}>
                {index === 0 && <ListItemIcon><Home/></ListItemIcon>}
                {index === 1 && <ListItemIcon><Book/></ListItemIcon>}
                {index === 2 && <ListItemIcon><ContactMail/></ListItemIcon>}
                {index === 3 && <ListItemIcon><Face/></ListItemIcon>}
                <ListItemText primary={item.name} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {[{name: 'Github', link:'https://github.com/abhinav99ash29'}, {name:'Linkedin', link:'https://www.linkedin.com/in/abhinav99ash29/'}].map((item, index) => (
            <a target="_blank" rel="noreferrer" href={item.link} style={{color:'unset', textDecoration:'none'}} key={item.name}>
              <ListItem button key={item.name}>
                { index === 0 && <ListItemIcon><GitHub/></ListItemIcon>}
                { index === 1 && <ListItemIcon><LinkedIn/></ListItemIcon>}
                <ListItemText primary={item.name} />
              </ListItem>
            </a>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 0.1,
        fontStyle: 'italic',
        fontFamily: "Sans-serif",
        marginLeft: "-44px"
    },
    link: {
        color: 'white'
    },

    product: {
       
        marginLeft: '20px',
        marginRight: '15px',
        color: 'white'
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Link href="/" className={classes.link}   >
                            SHOE STORE</Link>
                    </Typography>
                    <Link href="/" className={classes.product}   >
                        PRODUCTS</Link>
                    <Link href="/about" className={classes.product}   >
                        ABOUT US</Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
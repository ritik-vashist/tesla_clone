import { Container,makeStyles,Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
let useStyle=makeStyles({
    head:{
        minHeight:"60px",
        position:"fixed",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        padding:"0px 20px",
        top:"0",
        right:"0",
        left:"0",
    },
    menu:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        flex:"1",
        '@media (max-width:780px)': {
            display:"none",
        }
    },
    p:{
        padding:"0px 10px",
        flexWrap:"noWrap",
        alignItems:"center",
        fontWeight:"600",
    },
    right:{
        marginRight:"0px",
        display:"flex",
        alignItems:"center",

    },
    icon:{
        cursor:"pointer",
    },
    drawer:{
    }

})

function Header() {
let classes=useStyle();
    return (
        <div>
        <Container className={classes.head}>
            <a href="#"><img src="/image/logo.svg" alt="brand logo"/></a>
            <Box className={classes.menu}>
            <a href="#" className={classes.p}>Model S</a>
            <a href="#" className={classes.p}>Model 3</a>
            <a href="#" className={classes.p}>Model X</a>
            <a href="#" className={classes.p}>Model Y</a>
            </Box>
            <Box className={classes.right}>
            <a href="#" className={classes.p}>Shop</a>
            <a href="#" className={classes.p}>Tesla  Account</a>
            <MenuIcon className={classes.icon}/>
            
            </Box>
            
        </Container>
        
        </div>
        
    )
}

export default Header;

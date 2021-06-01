import React from 'react'
import {Box,makeStyles,Button} from "@material-ui/core";
import Fade from 'react-reveal/Fade';
let useStyle = makeStyles({
    "@keyframes AnimatedDown": {
        "0% 20% 50% 80% 100%": {
          transform: "translateY(0)"
        },
        "40%": {
          transform: "translateY(5px)"
        },
        "60%": {
            transform: "translateY(3px)"
          }
        },
    root:{
    height:"100vh",
    width:"100vw",
    backgroundSize:"cover",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center",    
},
    title:{
        paddingTop:"15vh",
        textAlign:"center",
    },
    btn_box:{
        marginBottom:"5px",
        display:"flex",
        flexDirection:"column",
    },
    btn:{
        display:"flex",
        flexDirection:"row",
        marginBottom:"5px",
        '@media (max-width:780px)': {
            display:"flex",
            marginBottom:"15px",
            flexDirection:"column",
        }
    },
    left_btn:{
        backgroundColor:"rgba(23,26,32,0.8)",
        height:"40px",
        width:"200px",
        borderRadius:"50px",
        opacity:"0.85",
        textTransform:"uppercase",
        margin:"10px",
        cursor:"pointer",
        color:'white',
    },
    right_btn:{
        backgroundColor:"white",
        height:"40px",
        width:"200px",
        borderRadius:"50px",
        opacity:"0.65",
        margin:"10px",
        cursor:"pointer",
        color:'black',
    },
    text:{
        color:"white",
    },
    img:{
        animation:"$AnimatedDown infinite 1s",
        margin:"0",
    },
   
})
function Section(props) {
    let classes = useStyle();
    return (
        <Box className={classes.root} style={{
            backgroundImage:`url("/image/${props.backgroundImage}")`,
        }}>
            <Fade bottom>
            <Box className={classes.title}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            </Box>
            </Fade> 
            <Box className={classes.btn_box}>
            <Fade bottom> 
            <Box  className={classes.btn}>

                <Button className={classes.left_btn}>
                    <p className={classes.text}>{props.leftbtntext}</p>
                </Button>
                {props.rightbtntext &&                 
                <Button className={classes.right_btn}>
                <p>{props.rightbtntext}</p>
                </Button>
                }
            </Box>
            </Fade> 
            <Box className={classes.img}>
                <img src="/image/down-arrow.svg" width="50px" />
            </Box>
            </Box>
        </Box>
    )
}

export default Section;

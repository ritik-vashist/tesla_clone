import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import Section from "./Section";
import Header from "./Header";
let useStyle = makeStyles({
    root:{
    height:"100vh",
    margin:"0px",
    padding:"0px"
    }
})

function Home() {
    let classes = useStyle();
    return (
        <Container className={classes.root}>
            <Header/>
            <Section
                id= "0"
                title="Model S"
                description= "Order Online for Touchless Delivery"
                backgroundImage= "model-s.jpg"
                leftbtntext="Custom Order"
                rightbtntext="Existing inventory"
            />
            <Section
                id= "1"
                title= "Model 3"
                description= "Order Online for Touchless Delivery"
                backgroundImage= "model-3.jpg"
                leftbtntext="Custom Order"
                rightbtntext="Existing inventory"
            />
            <Section
                id= "2"
                title= "Model X"
                description= "Order Online for Touchless Delivery"
                backgroundImage= "model-x.jpg"
                leftbtntext="Custom Order"
                rightbtntext="Existing inventory"
            />
            <Section
                id= "3"
                title= "Model Y"
                description= "Order Online for Touchless Delivery"
                backgroundImage= "model-y.jpg"
                leftbtntext="Custom Order"
                rightbtntext="Existing inventory"
            />
            <Section
                id= "4"
                title= "Lowest Cost Solar Pannels in America"
                description= "Money back guarantee"
                backgroundImage= "solar-panel.jpg"
                leftbtntext="Order Now"
                rightbtntext="Learn more"
            />
            <Section
                id= "5"
                title= "Solar for New Roofs"
                description= "Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImage= "solar-roof.jpg"
                leftbtntext="Order Now"
                rightbtntext="Learn more"
            />
            <Section
                id= "6"
                title= "Accesiories"
                description= ""
                backgroundImage= "new-interior.jpg"
                leftbtntext="Shop Now"
                rightbtntext=""
            />
        </Container>
    )
}

export default Home

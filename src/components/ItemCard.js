import React, { useState, useCallback } from "react";

import ItemForm from "./ItemForm";

import styled from "styled-components";




const MainDiv = styled.div`
background-color: #EEEEEE;
color: #9370DB;
display: flex;
flex-direction: column;
border-radius: 10px;
width: 40vw;
min-height: 70vh;
max width: 440 px;
margin: 35px auto;
font-family: 'Baloo Bhai';
padding: 1%;
box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`
const MainTitle = styled.h1 `
margin-bottom: 6%;
text-align: center;
color: #9370DB;
`

//start component

const ItemCard = props => {
    
        return (
        <MainDiv>

            <MainTitle>Add Item To Auction</MainTitle>

            <ItemForm/>
                
        </MainDiv>

        );
};

export default ItemCard;

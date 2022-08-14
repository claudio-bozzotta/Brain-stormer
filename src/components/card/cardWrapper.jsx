import React from "react";
import './StyleWrapper.css';

import { useState } from "react";
import { useEffect } from "react";

import {Card} from './card';

export const CardWrapper = () => {

    const [fish, setFish] = useState("");
    const [fish2, setFish2] = useState("");
    const [imgNumber, setImgNumber] = useState("2");
    const [hideToggle, setHideToggle] = useState("reveal")

    //Funzione della chiamata FETCH 1
    async function fetchData () {
        try{
            const res = await fetch("https://api.unsplash.com/photos/random/?client_id=bgoHQ6Vp700RDM0gqYJOoqi8wKb4V5Uu4kCjdY0tv6k");
            const data = await res.json();
            setFish(data);
            return data;
        } 
        catch (err) {
            console.log(err.message);
        }
    };
    //Funzione della chiamata FETCH 2
    async function fetchData2 () {
        try{
            const res = await fetch("https://api.unsplash.com/photos/random/?client_id=bgoHQ6Vp700RDM0gqYJOoqi8wKb4V5Uu4kCjdY0tv6k");
            const data = await res.json();

            setFish2(data);
            return data;
        } 
        catch (err) {
            console.log(err.message);
        }
    };

    //CONTROLLTORE DEGLI STATI 1-2 e HIDDEN
    useEffect(() => {
        (imgNumber==1) ? (setHideToggle("hide")) : (setHideToggle("reveal"));
      },[imgNumber]);

    //Funzione per ottenere numeri random
    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return(
        <div>
            <p>How many elements do you want?</p>
            <select
            value={imgNumber}
            onChange = {e => (setImgNumber(e.target.value))}>
                <option value="1"> 1 </option>
                <option value="2"> 2 </option>
            </select>
            <select>
                <option>
                    random image
                </option>
                <option>
                    random word
                </option>
            </select>
            <button type="button" onClick={() => (fetchData(), (imgNumber==="2") ? (fetchData2()) : (console.log("1 - Questo funziona")))}> GENERATE </button>

            <div className="wrapper">
                
                <Card imgUrl={(fish) ? (fish.urls.regular) : ("https://cdn3.iconfinder.com/data/icons/photo-tools/65/select-512.png")}>
                </Card>
                <div className={hideToggle}>
                    <Card 
                    imgUrl={(fish2) ? (fish2.urls.regular) : ("https://cdn3.iconfinder.com/data/icons/photo-tools/65/select-512.png")}>
                    </Card>
                </div>
                
            </div>
        </div>
    )
}
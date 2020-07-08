import React, { useState, useEffect } from 'react';
import ProtocolCard from '../ProtocolCardComponent/ProtocolCardComponent';
import { Grid } from '@material-ui/core';
import './MediaGrid.css';

interface IState {
    links: any[];
    data: any[];
}

function MediaGrid() {

    const [ItemArray, setItemArray] = useState<IState[]>([{ links: [], data: [] }]);

    useEffect(() => {
        fetch('https://public.defipulse.com/api/GetProjects?api-key=e698ce2d75c6314de02f217acbe6e95b7963b23d8d809c0dac978b113e31')
            .then(response => response.json())
            .then(response => {
                setItemArray(response.collection.items)
            })
            .catch(() => console.log("it didn't work")
            );

    },);

    var Cards: JSX.Element[] = [];
    ItemArray.forEach( (el: IState, i: Number ) => {
        if ( !el || !el.links[0] || !el.data ) {
            return;            
        }
        Cards.push(
            <Grid key={"card_"+i} item sm={6} md={4} lg={3} className="MediaGridCard">
                <ProtocolCard ImageUrl={el['links'][0]['href']} Description={el["data"][0]['description']} />
            </Grid>)
    })

    return (
        <div>



        </div>
    )
}

export default MediaGrid
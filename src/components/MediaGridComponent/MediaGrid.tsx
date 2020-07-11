import React, { useState, useEffect } from 'react';
import ProtocolCard from '../ProtocolCardComponent/ProtocolCard';
import { Grid } from '@material-ui/core';
import './MediaGrid.css';

interface IState {
    data: any[];
    // protocols: any[];
    // assets: any[];
    // metrics: any[];
    // roi_values: any[];
    // delta_24h: any[];
    // timestamp: any[];
}

function MediaGrid() {

    const [ItemArray, setItemArray] = useState<IState[]>(
        [{ data: [] }]);

    useEffect(() => {
        fetch('https://api.aleth.io/v0/defi/snapshot?metrics=borrow_apr&Authorization="Bearer sk_main_4278990ec37249d2"')
            .then(response => response.json())
            .then(response => {
                setItemArray(response.collection.items)
            })
            .catch(() => console.log("it didn't work")
            );
        // fetchData();
    },[]);

    // const fetchData = async () => {
    //     const response = await fetch('https://api.aleth.io/v0/defi/snapshot?metrics=borrow_apr&Authorization="Bearer sk_main_4278990ec37249d2"');
    //     const data = await response.json();
    //     // setItemArray();
    //     console.log(data);
        
    // }

    var Cards: JSX.Element[] = [];
    ItemArray.forEach( (el: IState, i: Number ) => {
        if ( !el || !el.data[0]) {
            return;            
        }
        Cards.push(
            <Grid key={"card_"+i} item sm={6} md={4} lg={3} className="MediaGridCard">
        <ProtocolCard AssetName={el['data'][0]['asset']} RoiValue={el['data'][0]} DailyDelta={el['data'][0]} ImageUrl={"none"} />
            </Grid>)
    })

    return (
        <div>

<Grid container spacing={3} className="MediaGridContainer">
                {Cards}
            </Grid>

        </div>
    )
}

export default MediaGrid
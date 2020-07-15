import React, { useState, useEffect } from 'react';
import ProtocolCard from '../ProtocolCardComponent/ProtocolCard';
import { Grid } from '@material-ui/core';
import './MediaGrid.css';

interface IState {
    asset: any[];
    change_24h: any[];
    metric: any[];
    protocol: any[];
    timestamp: any[];
    value: any[];
}

function MediaGrid() {

    const [ItemArray, setItemArray] = useState<IState[]>(
        [
            { 
                asset: [],
                change_24h: [],
                metric: [],
                protocol: [],
                timestamp: [],
                value: []
            }
        ]
    );

    useEffect(() => {
        // fetch('https://api.aleth.io/v0/defi/snapshot?metrics=borrow_apr&Authorization="Bearer sk_main_4278990ec37249d2"')
        //     .then(response => response.json())
        //     .then(response => {
        //         setItemArray(response.data)
        //     })
        //     .catch(() => console.log("it didn't work")
        //     );
        fetchData();
    },[]);

    const fetchData = async () => {
        const response = await fetch('https://api.aleth.io/v0/defi/snapshot?metrics=borrow_apr&Authorization="Bearer sk_main_4278990ec37249d2"');
        const res = await response.json();
        setItemArray(res.data);
        // console.log(typeof res.data.asset);
        // console.log(res.data[0].asset);
    }

    var Cards: JSX.Element[] = [];
    ItemArray.forEach( (el: IState, i: Number ) => {
        if ( !el || !el.asset || !el.protocol || !el.value || !el.change_24h) {
            return;            
        }
        Cards.push(
            <Grid key={"card_"+i} item sm={6} md={4} lg={3} className="MediaGridCard">
        <ProtocolCard ProtocolName={el.protocol.toString().toUpperCase()} AssetName={el.asset.toString().toUpperCase()} RoiValue={Number(el.value).toPrecision(3)} DailyDelta={Number(el.change_24h).toPrecision(3)} ImageUrl={"none"} />
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
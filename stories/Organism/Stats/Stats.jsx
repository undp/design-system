import React, { Component, useEffect } from 'react';
import { StatsPanel } from '../../Molecules/Blocks/StatsPanel/StatsPanel';
import { StatsFun } from '../../assets/js/Stats-custom';
import './stats.scss';

export const Stats = ({data})=>{
    useEffect(() => {
        StatsFun();
      },[])
    return (
        <div className="grid-x stats-grid">
            {data.map((item, index) => {
                return <StatsPanel number ={item.number} percent={item.percent} content={item.content} key={index}/>
            })}
        </div>
    );
};

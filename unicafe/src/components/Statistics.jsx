import React from 'react';
import StatisticsLine from './StatisticsLine';

function Statistics(props) {
    
    const {good, bad, neutral, all, average, positive} = props.statistics;
    if(all !== 0) {
        return (
        <>
        <table>
        <tbody>
        <StatisticsLine text="good" value={good}/>
        <StatisticsLine text="bad" value={bad}/>
        <StatisticsLine text="neutral" value={neutral}/>
        <StatisticsLine text="all" value={all}/>
        <StatisticsLine text="average" value={average}/>
        <StatisticsLine text="positive" value={positive}/>
        </tbody>
        </table>
        </>
    )}
    else {
        return (
            <h2>No feedback given</h2>
        )
    }

    }
    


export default Statistics;
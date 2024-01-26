import React from 'react'
import Bar from './bars'

export function WeeklyBars() {
    return (
        <>
            <Bar value="18" height="h-28"/>
            <Bar value="3" height="h-10"/>
            <Bar value="45" height="h-52 gradient-bg"/>
            <Bar value="9" height="h-20"/>
            <Bar value="20" height="h-32"/>
            <Bar value="32" height="h-44"/>
            <Bar value="5" height="h-12"/>
        </>
    )
}

export function WeeklyLabels(){
    return(
        <>
            <span className="chart-labels">Mon</span>
            <span className="chart-labels">Tue</span>
            <span className="chart-labels">Wed</span>
            <span className="chart-labels">Thu</span>
            <span className="chart-labels">Fri</span>
            <span className="chart-labels">Sat</span>
            <span className="chart-labels">Sun</span>
        </>
    )
}
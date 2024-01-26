import React from 'react'
import Bar from './bars'

export function MonthlyBars() {
    return (
        <>
            <Bar value="7" height="h-16"/>
            <Bar value="18" height="h-28"/>
            <Bar value="3" height="h-10"/>
            <Bar value="28" height="h-40"/>
            <Bar value="9" height="h-20"/>
            <Bar value="45" height="h-52 gradient-bg"/>
            <Bar value="9" height="h-20"/>
            <Bar value="20" height="h-32"/>
            <Bar value="32" height="h-44"/>
            <Bar value="5" height="h-12"/>
            <Bar value="28" height="h-40"/>
            <Bar value="26" height="h-36"/>
        </>
    )
}

export function MonthlyLabels(){
    return(
        <>
            <span className="chart-labels">Jan</span>
            <span className="chart-labels">Feb</span>
            <span className="chart-labels">Mar</span>
            <span className="chart-labels">Apr</span>
            <span className="chart-labels">Mei</span>
            <span className="chart-labels">Jun</span>
            <span className="chart-labels">Jul</span>
            <span className="chart-labels">Aug</span>
            <span className="chart-labels">Sep</span>
            <span className="chart-labels">Okt</span>
            <span className="chart-labels">Nov</span>
            <span className="chart-labels">Des</span>
        </>
    )
}
import React from 'react'
import Bar from './bars'

export function YearlyBars() {
    return (
        <>
            <Bar value="26" height="h-36"/>
            <Bar value="7" height="h-16"/>
            <Bar value="18" height="h-28"/>
            <Bar value="3" height="h-10"/>
            <Bar value="28" height="h-40"/>
            <Bar value="9" height="h-20"/>
            <Bar value="32" height="h-44"/>
            <Bar value="5" height="h-12"/>
            <Bar value="26" height="h-36"/>
            <Bar value="48" height="h-52 gradient-bg"/>
        </>
    )
}

export function YearlyLabels(){
    return(
        <>
            <span className="chart-labels">'15</span>
            <span className="chart-labels">'16</span>
            <span className="chart-labels">'17</span>
            <span className="chart-labels">'18</span>
            <span className="chart-labels">'19</span>
            <span className="chart-labels">'20</span>
            <span className="chart-labels">'21</span>
            <span className="chart-labels">'22</span>
            <span className="chart-labels">'23</span>
            <span className="chart-labels">'24</span>
        </>
    )
}
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
            <Bar value="48" height="h-52"/>
        </>
    )
}

export function YearlyLabels(){
    return(
        <>
            <span className="chart-labels">&apos;15</span>
            <span className="chart-labels">&apos;16</span>
            <span className="chart-labels">&apos;17</span>
            <span className="chart-labels">&apos;18</span>
            <span className="chart-labels">&apos;19</span>
            <span className="chart-labels">&apos;20</span>
            <span className="chart-labels">&apos;21</span>
            <span className="chart-labels">&apos;22</span>
            <span className="chart-labels">&apos;23</span>
            <span className="chart-labels">&apos;24</span>
        </>
    )
}
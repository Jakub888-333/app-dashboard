import React, {} from 'react'
import { LineChart, Line, Legend, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import "./css/lineChartComponent.css"


const LineChartComponent = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data} id="graf">
        <XAxis dataKey="date" tick={{fontSize: 10, angle: -70, textAnchor: "end" }} />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" height={5}/>
        <Line name="príjem spolu" type="natural" dataKey="sum" stroke="#8884d8" />
        </LineChart>
    </ResponsiveContainer>
    )
}

export default LineChartComponent
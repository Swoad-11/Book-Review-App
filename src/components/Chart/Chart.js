import React, { Suspense, Comments, Spinner } from 'react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

const Chart = (props) => {

    console.log(props.data);

    const {month,investment,sell,revenue} = props.data;

    return (
        <div>
            <div>
            <LineChart width={500} height={300} data={props.data}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                <Line type="monotone" dataKey={sell} stroke="#8884d8" />
                <Line type="monotone" dataKey={investment} stroke="#82ca9d" />
            </LineChart>
            </div>
        </div>
    );
};

export default Chart;
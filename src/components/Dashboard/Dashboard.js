import axios from "axios";
import React, { useEffect, useState } from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis, } from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("data.json").then((data) => {
      const loadedData = data.data;

      const chartData = loadedData.map((data) => {
        console.log(data.investment);
        const dt = {
          month: data.month,
          investment: data.investment,
          sell: data.sell,
          revenue: data.revenue,
        };
        return dt;
      });
      setData(chartData);
    });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold">Investment,Revenue and Sells per month</h2>
      <div className="p-16 grid lg:grid-cols-2 gap-6 sm:grid-cols-1">
        <div>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sell" stackId="a" fill="#8884d8" />
            <Bar dataKey="investment" stackId="a" fill="#82ca9d" />
            <Bar dataKey="revenue" fill="#ffc658" />
          </BarChart>
        </div>
        <div>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
          </LineChart>
        </div>
        <div>
          <AreaChart
            width={500}
            height={255}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="revenue"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="investment"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </AreaChart>
        </div>
        <div>
          <ComposedChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 80,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis
              dataKey="month"
              label={{
                value: "Months",
                position: "insideBottomRight",
                offset: 0,
              }}
              scale="band"
            />
            <YAxis
              label={{ value: "Money", angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="sell"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="investment" stroke="#ff7300" />
          </ComposedChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
  
    Tooltip,
    Legend,
    ResponsiveContainer
  } from "recharts";
  import { PieChart, Pie } from "recharts";
const Rechart = () => {
    const students = [
        { id: 1, 
            name: "John",
             physics: 85,
              chemistry: 70, 
              math: 90 
            },
        { id: 2, name: "Sarah", physics: 75, chemistry: 80, math: 95 },
        { id: 3, name: "Mike", physics: 60, chemistry: 65, math: 75 },
        { id: 4, name: "Lisa", physics: 95, chemistry: 85, math: 90 },
        { id: 5, name: "David", physics: 70, chemistry: 75, math: 80 },
        { id: 6, name: "Emily", physics: 80, chemistry: 90, math: 85 },
        { id: 7, name: "Tom", physics: 55, chemistry: 60, math: 70 },
        { id: 8, name: "Mary", physics: 90, chemistry: 95, math: 90 },
        { id: 9, name: "Ben", physics: 65, chemistry: 70, math: 75 },
        { id: 10, name: "Jessica", physics: 85, chemistry: 80, math: 90 },
        { id: 11, name: "Alex", physics: 75, chemistry: 85, math: 80 },
        { id: 12, name: "Sophie", physics: 95, chemistry: 90, math: 95 }
      ];
      
    return (
        <div className=''>
            <ResponsiveContainer width="100%" height={400}>
            <LineChart
             width={1000}
             height={300}
             data={students}
            >
<XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
<Line type="monotone" dataKey="physics" stroke="#82ca9d" />
<Line type="monotone" dataKey="chemistry" stroke="#82ca9d" />
<Line type="monotone" dataKey="math" stroke="#82ca9d" />
            </LineChart>

            </ResponsiveContainer>


            <PieChart width={400} height={400}>
      <Pie
        data={students}
        dataKey="physics"
        cx={200}
        cy={200}
        outerRadius={60}
        fill="#8884d8"
      />
      <Pie
        data={students}
        dataKey="chemistry"
        cx={200}
        cy={200}
        innerRadius={70}
        outerRadius={90}
        fill="#82ca9d"
        label
      />
    </PieChart>
        </div>
    );
};

export default Rechart;
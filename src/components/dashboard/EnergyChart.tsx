
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const EnergyChart = () => {
  const data = [
    { month: "Jan", energy: 2100, avgHours: 1.2 },
    { month: "Feb", energy: 2400, avgHours: 1.4 },
    { month: "Mar", energy: 2800, avgHours: 1.6 },
    { month: "Apr", energy: 2600, avgHours: 1.5 },
    { month: "May", energy: 3200, avgHours: 1.8 },
    { month: "Jun", energy: 3500, avgHours: 1.9 },
    { month: "Jul", energy: 3800, avgHours: 2.1 },
    { month: "Aug", energy: 3600, avgHours: 2.0 },
    { month: "Sep", energy: 3200, avgHours: 1.8 },
    { month: "Oct", energy: 2900, avgHours: 1.7 },
    { month: "Nov", energy: 2700, avgHours: 1.6 },
    { month: "Dec", energy: 2500, avgHours: 1.5 }
  ];

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500 rounded"></div>
          Energy Consumption & Avg Charging Hours
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis yAxisId="left" tick={{ fontSize: 12 }} />
            <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
            <Tooltip 
              formatter={(value, name) => [
                name === "energy" ? `${value} KWH` : `${value} hrs`,
                name === "energy" ? "Energy" : "Avg Hours"
              ]}
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="energy" 
              stroke="#3b82f6" 
              strokeWidth={3}
              dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="avgHours" 
              stroke="#f59e0b" 
              strokeWidth={3}
              dot={{ fill: "#f59e0b", strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default EnergyChart;

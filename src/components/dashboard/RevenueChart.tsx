
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const RevenueChart = () => {
  const data = [
    { country: "Germany", revenue: 889.5 },
    { country: "Norway", revenue: 813.2 },
    { country: "Australia", revenue: 758.7 },
    { country: "India", revenue: 718.2 },
    { country: "France", revenue: 704.2 },
    { country: "Canada", revenue: 658.1 },
    { country: "UK", revenue: 612.4 },
    { country: "Japan", revenue: 578.9 },
    { country: "USA", revenue: 538.1 },
    { country: "China", revenue: 495.3 }
  ];

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-4 h-4 bg-emerald-500 rounded"></div>
          Total Revenue by Country
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="country" 
              tick={{ fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip 
              formatter={(value) => [`$${value}`, "Revenue"]}
              labelStyle={{ color: "#374151" }}
            />
            <Bar 
              dataKey="revenue" 
              fill="#10b981" 
              radius={[4, 4, 0, 0]}
              className="hover:opacity-80 transition-opacity"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;

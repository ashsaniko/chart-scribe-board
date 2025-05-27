
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ChargingTypeMap = () => {
  const chargingTypes = [
    { type: "DC Fast", count: 342, color: "bg-blue-500", percentage: 42.8 },
    { type: "Level 1", count: 287, color: "bg-purple-500", percentage: 35.9 },
    { type: "Level 2", count: 171, color: "bg-orange-500", percentage: 21.3 }
  ];

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-4 h-4 bg-indigo-500 rounded"></div>
          Charging Station Types
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 gap-4">
          {chargingTypes.map((type, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded ${type.color}`}></div>
                <span className="font-medium">{type.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">{type.count} stations</Badge>
                <span className="text-sm text-gray-600">{type.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-2">Global Distribution</h4>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span>800 total charging stations across 30 cities in 10 countries</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChargingTypeMap;

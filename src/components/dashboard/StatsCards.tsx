
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Zap, MapPin, Car } from "lucide-react";

const StatsCards = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$7.33K",
      subtitle: "Monthly earnings",
      icon: TrendingUp,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100"
    },
    {
      title: "Total Energy (KWH)",
      value: "28.75K",
      subtitle: "Energy consumed",
      icon: Zap,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Total Countries",
      value: "10",
      subtitle: "Global reach",
      icon: MapPin,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Charging Stations",
      value: "800",
      subtitle: "Active stations",
      icon: Car,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.subtitle}</p>
              </div>
              <div className={`p-3 rounded-full ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

const CountriesTable = () => {
  const countries = [
    { name: "Norway", stations: 94, color: "bg-emerald-500" },
    { name: "Germany", stations: 93, color: "bg-emerald-500" },
    { name: "Australia", stations: 86, color: "bg-emerald-400" },
    { name: "India", stations: 82, color: "bg-emerald-400" },
    { name: "Japan", stations: 80, color: "bg-emerald-300" },
    { name: "Canada", stations: 79, color: "bg-emerald-300" },
    { name: "France", stations: 78, color: "bg-emerald-300" },
    { name: "UK", stations: 78, color: "bg-emerald-300" },
    { name: "China", stations: 65, color: "bg-emerald-200" },
    { name: "USA", stations: 65, color: "bg-emerald-200" }
  ];

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-4 h-4 bg-emerald-500 rounded"></div>
          Countries by Charging Stations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Country</TableHead>
              <TableHead>Stations</TableHead>
              <TableHead>Progress</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {countries.map((country, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="font-medium">{country.name}</TableCell>
                <TableCell>{country.stations}</TableCell>
                <TableCell className="w-32">
                  <Progress 
                    value={country.stations} 
                    className="h-2"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CountriesTable;

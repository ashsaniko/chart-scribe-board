
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const ManufacturersTable = () => {
  const manufacturers = [
    { country: "Australia", audi: 8, bmw: 6, byd: 11, chevrolet: 11, hyundai: 8, kia: 6, nissan: 10, porsche: 8 },
    { country: "Canada", audi: 5, bmw: 12, byd: 12, chevrolet: 6, hyundai: 7, kia: 4, nissan: 9, porsche: 10 },
    { country: "China", audi: 3, bmw: 5, byd: 9, chevrolet: 5, hyundai: 9, kia: 6, nissan: 13, porsche: 5 },
    { country: "France", audi: 9, bmw: 7, byd: 9, chevrolet: 8, hyundai: 11, kia: 6, nissan: 7, porsche: 9 },
    { country: "Germany", audi: 10, bmw: 10, byd: 7, chevrolet: 5, hyundai: 9, kia: 15, nissan: 10, porsche: 8 }
  ];

  const getBadgeVariant = (value: number) => {
    if (value >= 12) return "default";
    if (value >= 8) return "secondary";
    return "outline";
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500 rounded"></div>
          Countries by Car Manufacturers
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Country</TableHead>
                <TableHead>Audi</TableHead>
                <TableHead>BMW</TableHead>
                <TableHead>BYD</TableHead>
                <TableHead>Chevrolet</TableHead>
                <TableHead>Hyundai</TableHead>
                <TableHead>Kia</TableHead>
                <TableHead>Nissan</TableHead>
                <TableHead>Porsche</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {manufacturers.map((row, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{row.country}</TableCell>
                  <TableCell>
                    <Badge variant={getBadgeVariant(row.audi)}>{row.audi}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getBadgeVariant(row.bmw)}>{row.bmw}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getBadgeVariant(row.byd)}>{row.byd}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getBadgeVariant(row.chevrolet)}>{row.chevrolet}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getBadgeVariant(row.hyundai)}>{row.hyundai}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getBadgeVariant(row.kia)}>{row.kia}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getBadgeVariant(row.nissan)}>{row.nissan}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getBadgeVariant(row.porsche)}>{row.porsche}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ManufacturersTable;

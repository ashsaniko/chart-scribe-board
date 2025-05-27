
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RevenueChart from "@/components/dashboard/RevenueChart";
import EnergyChart from "@/components/dashboard/EnergyChart";
import PaymentMethodChart from "@/components/dashboard/PaymentMethodChart";
import CountriesTable from "@/components/dashboard/CountriesTable";
import ManufacturersTable from "@/components/dashboard/ManufacturersTable";
import StatsCards from "@/components/dashboard/StatsCards";
import ChargingTypeMap from "@/components/dashboard/ChargingTypeMap";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Global EV Charging Insights 2024
          </h1>
          <p className="text-gray-600 mt-2">Comprehensive dashboard for electric vehicle charging analytics</p>
        </div>

        {/* Stats Cards */}
        <StatsCards />

        {/* Main Dashboard */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-96 mx-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="geographic">Geographic</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RevenueChart />
              <EnergyChart />
              <PaymentMethodChart />
              <CountriesTable />
            </div>
          </TabsContent>

          <TabsContent value="revenue" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <RevenueChart />
              </div>
              <div>
                <PaymentMethodChart />
              </div>
            </div>
            <ManufacturersTable />
          </TabsContent>

          <TabsContent value="geographic" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChargingTypeMap />
              <CountriesTable />
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <EnergyChart />
              <ManufacturersTable />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;

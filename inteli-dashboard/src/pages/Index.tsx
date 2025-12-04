import DashboardHeader from "@/components/dashboard/DashboardHeader";
import FilterBar from "@/components/dashboard/FilterBar";
import AlertsLineChart from "@/components/dashboard/AlertsLineChart";
import TopicsBarChart from "@/components/dashboard/TopicsBarChart";
import ToursLineChart from "@/components/dashboard/ToursLineChart";
import CheckpointsBarChart from "@/components/dashboard/CheckpointsBarChart";
import VisitorsProfileChart from "@/components/dashboard/VisitorsProfileChart";

const Index = () => {
  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      <DashboardHeader />
      <FilterBar />
      
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-6 py-3 overflow-auto lg:overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-4 h-full">
          {/* Coluna principal - 4 charts */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-3 h-full">
            <AlertsLineChart />
            <TopicsBarChart />
            <ToursLineChart />
            <CheckpointsBarChart />
          </div>
          
          {/* Coluna lateral - Perfil dos visitantes */}
          <div className="lg:w-1/3 flex flex-col gap-3 h-full">
            <h2 className="text-sm font-semibold text-foreground shrink-0">Perfil dos visitantes</h2>
            <div className="flex-1 min-h-0">
              <VisitorsProfileChart />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

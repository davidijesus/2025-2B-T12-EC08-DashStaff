import inteliLogo from "@/assets/inteli-logo.png";

interface DashboardHeaderProps {
  title?: string;
}

const DashboardHeader = ({ title = "Acompanhamento Geral" }: DashboardHeaderProps) => {
  return (
    <header className="bg-[#2E2640] px-8 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between">
          <div>
            <span className="inline-block bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded mb-3">
              Última atualização às 18h02 de 12/11/2025
            </span>
            <h1 className="text-3xl font-bold text-primary-foreground">
              {title}
            </h1>
          </div>
          <img src={inteliLogo} alt="Inteli" className="h-8" />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
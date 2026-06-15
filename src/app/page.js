import HeroSection from "@/components/sections/hero/hero-section";
import Graph from "@/components/sections/graph/graph-section";
import FunctionsSection from "@/components/sections/function/FunctionsSection";
import ScrollTicks from "@/components/ui/ScrollTicks";
import StructureSection from "@/components/sections/aboutUs/StructureSection";
import StaffInfoSection from "@/components/sections/aboutUs/StaffInfoSection";
import StrategySection from "@/components/sections/strat/Strat-section"
import ServicesSection from "@/components/sections/service/ServicesSection";
import MissionPage from "@/components/sections/mission/MissionSection";
import Laws from "@/components/pages/law/Laws";
export default function Home() {

  return (
    <>
      <ScrollTicks />
      <HeroSection />
      <Graph />
      <FunctionsSection />
      <StructureSection />
      <StaffInfoSection />
      <StrategySection />
      <ServicesSection />
      <MissionPage />
      <Laws />
    </>
  );
}

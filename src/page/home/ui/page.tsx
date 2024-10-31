import { HeroSection } from "./HeroSection";
import { WhyChooseUs } from "./WhyChooseUs";
import { LatestProjects } from "./LatestProjects";
import { WeWill } from "./WeWill";
import { Costs } from "./Costs";

export const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      <WhyChooseUs />
      <LatestProjects />
      <WeWill />
      <Costs />
    </div>
  );
};

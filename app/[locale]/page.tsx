import ExploreHome from "@/components/Home/ExploreHome";
import DiscoverHome from "@/components/Home/DiscoverHome";
import SimplifyHome from "@/components/Home/SimplifyHome";
import InnovativeHome from "@/components/Home/InnovativeHome";
import TestimonialsHome from "@/components/Home/TestimonialsHome";
import StartProjectHome from "@/components/Home/StartProjectHome";
import FAQHome from "@/components/Home/FAQHome";
import PropertiesHome from "@/components/Home/PropertiesHome";

const Home = async () => {
  return (
    <section>
      <ExploreHome />
      <DiscoverHome />
      <SimplifyHome />
      <InnovativeHome />
      <PropertiesHome />
      <TestimonialsHome />
      <FAQHome />
      <StartProjectHome />
    </section>
  );
};

export default Home;

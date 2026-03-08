import ServiceCard from "@/components/cards/ServiceCard";
import FilterSidebar from "@/components/FilterSidebar";
import ServicesHeaderSection from "@/components/services/ServicesHeaderSection";

export default function Services() {
  const services = [
    {
      _id: 1,
      image: "/baby.png",
      title: "Babysitting",
      description:
        "Expert childcare for all ages, from infants to teenagers. Verified and experienced.",
    },
    {
      _id: 2,
      image: "/eldery.png",
      title: "Elderly Care",
      description:
        "Compassionate daily assistance, companionship, and medical reminders for seniors.",
    },
    {
      _id: 3,
      image: "/sick.png",
      title: "Sick Care",
      description:
        "Professional recovery support at home for patients recovering from illness or surgery.",
    },
  ];
  return (
    <div className="py-8 bg-base-200 px-2">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* filter  */}
        <div className="w-full lg:col-span-3 ">
          <FilterSidebar />
        </div>
        {/* main services  */}
        <div className="w-full lg:col-span-9 ">
          <div className="mb-6">
            <ServicesHeaderSection />
          </div>
          {/* all services  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service._id} {...service} />
            ))}
          </div>
        </div>
      </div>
      {/* pagination buttons */}
      <div className="grid place-items-center">
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <button className="btn rounded-lg" key={i}>
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

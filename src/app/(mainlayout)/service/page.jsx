import ServiceCard from "@/components/cards/ServiceCard";
import FilterSidebar from "@/components/FilterSidebar";
import ServicesHeaderSection from "@/components/services/ServicesHeaderSection";
import connectDB from "@/lib/db";
import ServiceModel from "@/models/ServiceModel";

export default async function Services() {
  await connectDB();
  const serviceData = await ServiceModel.find();
console.log(serviceData)
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
            {serviceData.map((service) => (
              <ServiceCard key={service._id} service={service} />
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

import React from "react";
import SectionTitle from "../Title/SectionTitle";
import OverViewServiceCard from "../cards/OverViewServiceCard";

export default function OurServicesSection() {
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
    {
      _id: 4,
      image: "/baby.png",
      title: "Babysitting",
      description:
        "Expert childcare for all ages, from infants to teenagers. Verified and experienced.",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto py-20 px-2">
      <SectionTitle>Our Care Services</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <OverViewServiceCard key={service._id} {...service} />
        ))}
      </div>
    </div>
  );
}

import React from "react";
import SectionTitle from "../Title/SectionTitle";
import TrustCard from "../cards/TrustCard";

export default function TrustedSection() {
  const testimonials = [
    {
      rating: 4.5,
      description:
        "Care.xyz has been a lifesaver for our family. We found a wonderful elderly caregiver for my father within hours. The process was seamless and the support is top- notch.",
      user: {
        name: "Sarah Johnson",
        location: "New York, NY",
        image: "/user1.png",
      },
    },
    {
      rating: 4.5,
      description:
        "As a working mom, finding a reliable babysitter was always a stress. Care.xyz made it so easy to find someone qualified and trustworthy. My kids love her!",
      user: {
        name: "Michael Chen",
        location: "Austin, TX",
        image: "/user2.png",
      },
    },
    {
      rating: 4.5,
      description:
        "Excellent service! The nurse provided through the sick care program was professional and really helped with my post-surgery recovery. Highly recommended.",
      user: {
        name: "Emily Davis",
        location: "Chicago, IL",
        image: "/user3.png",
      },
    },
  ];
  return (
    <div className="py-20 max-w-7xl mx-auto">
      <SectionTitle>Trusted by thousands of happy families</SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, i) => (
          <TrustCard key={i} {...testimonial} />
        ))}
      </div>
    </div>
  );
}

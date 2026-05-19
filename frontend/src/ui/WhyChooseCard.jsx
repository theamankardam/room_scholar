import { FiCheckCircle, FiMapPin, FiHeadphones } from "react-icons/fi";
import { MdOutlineWeekend, MdOutlineCalendarMonth } from "react-icons/md";

 export default  function  WhyChooseCard () {
  const features = [
    {
      id: 1,
      icon: <FiCheckCircle className="w-7 h-7 text-slate-700" />,
      title: "Verified Properties",
      description:
        "All properties are verified for your safety and peace of mind.",
    },
    {
      id: 2,
      icon: <FiMapPin className="w-7 h-7 text-slate-700" />,
      title: "Prime Locations",
      description:
        "Stay close to universities, transport, and city attractions.",
    },
    {
      id: 3,
      icon: <MdOutlineWeekend className="w-8 h-8 text-slate-700" />,
      title: "Fully Furnished",
      description:
        "Move in hassle-free with stylish furniture and modern amenities.",
    },
    {
      id: 4,
      icon: <MdOutlineCalendarMonth className="w-8 h-8 text-slate-700" />,
      title: "Flexible Contracts",
      description: "Choose short-term or long-term stays as per your needs.",
    },
    {
      id: 5,
      icon: <FiHeadphones className="w-7 h-7 text-slate-700" />,
      title: "24/7 Support",
      description:
        "Our team is always here to support you throughout your stay.",
    },
  ];

  return (
    <section className="py-16  max-w-7xl mx-auto px-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          Why Choose <span className="text-orange-500">Room Scholars?</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center ">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-center text-center p-6 bg-slate-200 rounded-2xl border border-slate-100/80 hover:shadow-md transition-all duration-300"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-slate-100 rounded-full mb-5">
              {feature.icon}
            </div>

            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              {feature.title}
            </h3>

            <p className="text-sm text-slate-500 leading-relaxed max-w-50">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};



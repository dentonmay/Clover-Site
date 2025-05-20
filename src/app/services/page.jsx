import Link from "next/link";

export default function Services() {
  const serviceCategories = [
    {
      category: "Access Control",
      services: [
        { title: "Brivo", description: '"Simply Better Security". Providing superior security solutions and a positive user experience.', image: "/brivo.jpeg" },
        { title: "ProDataKey", description: "Accessable, secure, and easy-to-use access control solutions. Complete control at your fingertips, defining the future of access control, and making access easy", image: "/pdk.jpeg" },
        { title: "3xLogic", description: "Leading innovators in security, hardware, software, and cloud-based solutions, going beyond security to deliver business value through data analysis and actionable insights", image: "/3xlogic.jpeg" },
      ],
    },
    {
      category: "Camera Systems",
      services: [
        { title: "Eagle Eye Networks", description: "Cloud-Based Camera System. Leveraging our cloud-based platform and AI analytics to impove safety, security, and operations", image: "/eagleeye.jpeg" },
        { title: "Vivotek", description: "Providing clear and comprehensive understanding through surveillance solutions", image: "/vivotek.jpeg" },
        { title: "3xLogic", description: "Leading innovators in security, hardware, software, and cloud-based solutions, going beyond security to deliver business value through data analysis and actionable insights", image: "/3xlogic-camera.jpeg" },
      ],
    },
    {
      category: "Nurse Call and Wander Management Systems",
      services: [
        { title: "Jeron", description: "Jeron provides a full line of nurse call systems for hospitals, clinics, ambulatory surgery, and long-term healthcare facilities", image: "/Jeron-Provide-Logo.jpeg" },
        { title: "Tektone", description: "For over 50 years, Tektone has designed & manufactured high-quality, affordable, completely interoperable healthcare products", image: "/tektone.jpeg" },
        { title: "RF Technologies", description: "Wireless Nurse Call and Wander Management. Keeping people safe since 1987", image: "/RFT-Logo.jpeg"},
      ],
    },
    {
      category: "Alarm Systems",
      services: [
        { title: "Alarm.com", description: "Protect your home & business with Alarm.com's industry-leading smart security systems that put & keep you in control", image: "/newalarm.jpeg" },
      ],
    },
    {
      category: "Phone Systems",
      services: [
        {title: "Intermedia", description: "Cloud-based phone system and service provider", image: "/IntermediaLogo.jpeg"},
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header Section */}
      <header className="bg-green-800 text-white text-center py-16">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="mt-2 text-lg">Protect What Matters Most with Cutting-Edge Solutions Tailored to your Needs.</p>
      </header>

      {/* Services Sections */}
      <section className="bg-black max-w-7xl mx-auto py-12 px-6">
        {serviceCategories.map((category, index) => (
          <div key={index} className="mb-12">
            {/* Section Title */}
            <h2 className="text-3xl font-semibold text-white mb-6">{category.category}</h2>

            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
                    <p className="mt-2 text-gray-600">{service.description}</p>
                    <a href="/contact" className="mt-4 inline-block bg-green-800 hover: blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
export default function MarketsAndServices() {
    const markets = [
      "Healthcare Facilities",
      "Corporate Offices",
      "Educational Institutions",
      "Government Buildings",
      "Retail Stores",
      "Industrial & Manufacturing Sites",
      "Residential Complexes",
    ];
  
    const services = [
      "High-Definition CCTV Surveillance",
      "Biometric & RFID Access Control",
      "Wireless & Hardwired Nurse Call Systems",
      "Intrusion & Motion Detection",
      "Wander and Fall Protection",
      "Remote Monitoring & Mobile Alerts",
      "Custom Security Consulting & Design",
      "School Systems Intercom and Clock",
      "Digital and VoIP Phone Systems",
      "Paging Systems and Music",
      "Commercial Intercom",
      "Structured Cabling",

    ];
  
    return (
      <section className="bg-black py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Markets We Serve & How We Can Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Markets Served */}
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Markets We Serve</h3>
              <ul className="list-disc list-inside text-white space-y-2">
                {markets.map((market, index) => (
                  <li key={index}>{market}</li>
                ))}
              </ul>
            </div>
  
            {/* Services Offered */}
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Services We Provide</h3>
              <ul className="list-disc list-inside text-white space-y-2">
                {services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
  
          </div>
        </div>
      </section>
    );
  }
export default function AlarmSection() {
    return (
      <section
        className="relative bg-cover bg-center bg-no-repeat py-20 px-6"
        style={{ backgroundImage: "url('/alarm.com-background.jpg')" }} // Put your image in /public/images/
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
  
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Smart Security with Alarm.com</h2>
          <p className="text-lg mb-8">
            We're proud to partner with <strong>Alarm.com</strong> to deliver intelligent, connected security systems that let you monitor and control your property from anywhere. With real-time alerts, remote access, and smart automation, you get unmatched convenience and peace of mind.
          </p>
          <a
            href="https://www.alarm.com/us/clovertech?home=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-800 hover: text: blue px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Visit Our Site
          </a>
        </div>
      </section>
    );
  }
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <div>
    
    <div className="container mx-auto px-6 py-10">
      <Head>
        <title>Privacy Policy - Next.js App</title>
      </Head>
      <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
      <p className="text: white font-semibold">
        This Privacy Policy explains how we collect, use, and protect your
        information when you visit our website.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <p className="text: white font-semibold">
        We may collect personal information such as your name, email address,
        and any other details you provide voluntarily.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
      <p className="text: white font-semibold">
        Your information is used to provide, improve, and personalize our
        services. We do not share or sell your data to third parties.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Security</h2>
      <p className="text: white font-semibold">
        We take reasonable measures to protect your data from unauthorized
        access.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="text: white font-semibold">
        If you have any questions about our Privacy Policy, please contact us at{" "}
        <a href="mailto:support@example.com" className="text-green-800 ">
          support@clovertechnologies.io
        </a>
        .
      </p>
    </div>
  </div>
  );
};

export default PrivacyPolicy;
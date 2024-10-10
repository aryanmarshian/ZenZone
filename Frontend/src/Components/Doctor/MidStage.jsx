import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-10">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
        Support and Activities for You
      </h1>
      <p className="text-lg text-center mb-4">
        We understand the importance of mental health and are here to help you navigate your journey.
      </p>

      <div className="grid grid-cols-2 gap-8">
        {/* Online Therapy Sessions */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img src="https://marinwellnesscounseling.com/wp-content/uploads/2021/01/pexels-artem-podrez-4492161-scaled-1.jpg" alt="Online Therapy" className="w-full h-48 object-cover rounded-t-lg" />
          <h2 className="text-2xl font-semibold text-gray-800 mt-4">Online Therapy Sessions</h2>
          <p className="text-gray-700 my-4">
            Connect with licensed professionals from the comfort of your home. Online sessions are flexible and confidential.
          </p>
          <button className="px-6 py-3 bg-[#6AD4DC] text-white text-lg font-medium rounded-md hover:bg-teal-600 transition duration-300">
            Book a Session
          </button>
        </div>

        {/* 1-on-1 Consultations */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img src="https://media.istockphoto.com/id/1157591981/photo/its-important-that-you-follow-these-steps.jpg?s=612x612&w=0&k=20&c=OeiUc9bfM9wL-NrYkxfGNGTmbRNP3T4AzG7veWlEyrY=" alt="Consultation" className="w-full h-48 object-cover rounded-t-lg" />
          <h2 className="text-2xl font-semibold text-gray-800 mt-4">1-on-1 Consultations with Doctors</h2>
          <p className="text-gray-700 my-4">
            Schedule an in-person or virtual consultation with a healthcare professional to discuss your needs.
          </p>
          <button className="px-6 py-3 bg-[#6AD4DC] text-white text-lg font-medium rounded-md hover:bg-teal-600 transition duration-300">
            Consult a Doctor
          </button>
        </div>
        
        {/* Outdoor Community Activities */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img src="https://earth5r.org/wp-content/uploads/2024/03/Clean-Up-Volunteer-Recycling-Mumbai-India-Environmental-NGO-Earth5R-.jpg" alt="Community Activities" className="w-full h-48 object-cover rounded-t-lg" />
          <h2 className="text-2xl font-semibold text-gray-800 mt-4">Outdoor Community Activities</h2>
          <p className="text-gray-700 my-4">
            Engage in activities like trekking, morning walks, and group events to enhance your well-being and meet new friends.
          </p>
          <button className="px-6 py-3 bg-[#6AD4DC] text-white text-lg font-medium rounded-md hover:bg-teal-600 transition duration-300">
            Explore Activities
          </button>
        </div>

        {/* Free Camps */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img src="https://avbmhospital.org/wp-content/uploads/2021/01/camp-1080x675.jpg" alt="Free Camps" className="w-full h-48 object-cover rounded-t-lg" />
          <h2 className="text-2xl font-semibold text-gray-800 mt-4">Free Camps Nearby</h2>
          <p className="text-gray-700 my-4">
            Discover free camps and workshops designed to promote mental wellness and community engagement.
          </p>
          <button className="px-6 py-3 bg-[#6AD4DC] text-white text-lg font-medium rounded-md hover:bg-teal-600 transition duration-300">
            Find a Camp
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

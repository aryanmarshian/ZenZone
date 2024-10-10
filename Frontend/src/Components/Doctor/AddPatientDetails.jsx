import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { redirectUrls } from "C:/Users/aryan/Desktop/Hackathon/WaterBody/Frontend/config.js";

const SubstanceAbuseForm = () => {
  const [formData, setFormData] = useState({
    question1: "0",
    question2: "0",
    question3: "0",
    question4: "0",
    question5: "0",
    question6: "0",
    question7: "0",
    question8: "0",
    question9: "0",
    question10: "0",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let score = 0;
    Object.values(formData).forEach((value) => {
      score += parseInt(value);
    });

    if (score <= 14) {
      window.location.href = redirectUrls.lowStage;
    } else if (score <= 32) {
      window.location.href = redirectUrls.midStage;
    } else {
      window.location.href = redirectUrls.highStage;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/substance-abuse/create", formData);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="relative w-full max-w-3xl bg-white p-10 shadow-2xl rounded-lg">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center" style={{ color: "#3C4A57" }}>
          Substance Abuse Assessment
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Question 1 */}
          <div>
            <label htmlFor="question1" className="block text-lg font-semibold text-gray-700 mb-2">
              On a scale of 0 to 5, how often do you feel the need to use substances to cope with stress?
            </label>
            <input
              type="range"
              id="question1"
              name="question1"
              min="0"
              max="5"
              value={formData.question1}
              onChange={handleChange}
              className={`w-full h-2 rounded-lg appearance-none cursor-pointer range-lg ${
                formData.question1 <= 2 ? 'bg-green-300' :
                formData.question1 <= 4 ? 'bg-yellow-300' : 'bg-red-300'
              }`}
            />
            <p className="text-sm text-indigo-600">Selected: {formData.question1}</p>
          </div>

          {/* Question 2 */}
          <div>
            <label htmlFor="question2" className="block text-lg font-semibold text-gray-700 mb-2">
              How frequently do you turn to substances when facing college workload?
            </label>
            <input
              type="range"
              id="question2"
              name="question2"
              min="0"
              max="5"
              value={formData.question2}
              onChange={handleChange}
              className={`w-full h-2 rounded-lg appearance-none cursor-pointer range-lg ${
                formData.question2 <= 2 ? 'bg-green-300' :
                formData.question2 <= 4 ? 'bg-yellow-300' : 'bg-red-300'
              }`}
            />
            <p className="text-sm text-indigo-600">Selected: {formData.question2}</p>
          </div>

          {/* Question 3 */}
          <div>
            <label htmlFor="question3" className="block text-lg font-semibold text-gray-700 mb-2">
              To what extent has your substance use affected your grades?
            </label>
            <input
              type="range"
              id="question3"
              name="question3"
              min="0"
              max="5"
              value={formData.question3}
              onChange={handleChange}
              className={`w-full h-2 rounded-lg appearance-none cursor-pointer range-lg ${
                formData.question3 <= 2 ? 'bg-green-300' :
                formData.question3 <= 4 ? 'bg-yellow-300' : 'bg-red-300'
              }`}
            />
            <p className="text-sm text-indigo-600">Selected: {formData.question3}</p>
          </div>

          {/* Question 4 */}
          <div>
            <label htmlFor="question4" className="block text-lg font-semibold text-gray-700 mb-2">
              How often do you miss classes or assignments due to substance use?
            </label>
            <input
              type="range"
              id="question4"
              name="question4"
              min="0"
              max="5"
              value={formData.question4}
              onChange={handleChange}
              className={`w-full h-2 rounded-lg appearance-none cursor-pointer range-lg ${
                formData.question4 <= 2 ? 'bg-green-300' :
                formData.question4 <= 4 ? 'bg-yellow-300' : 'bg-red-300'
              }`}
            />
            <p className="text-sm text-indigo-600">Selected: {formData.question4}</p>
          </div>

          {/* Question 5 */}
          <div>
            <label htmlFor="question5" className="block text-lg font-semibold text-gray-700 mb-2">
              How much have your friendships been impacted by your substance use?
            </label>
            <input
              type="range"
              id="question5"
              name="question5"
              min="0"
              max="5"
              value={formData.question5}
              onChange={handleChange}
              className={`w-full h-2 rounded-lg appearance-none cursor-pointer range-lg ${
                formData.question5 <= 2 ? 'bg-green-300' :
                formData.question5 <= 4 ? 'bg-yellow-300' : 'bg-red-300'
              }`}
            />
            <p className="text-sm text-indigo-600">Selected: {formData.question5}</p>
          </div>

          {/* Question 6 */}
          <div>
            <label htmlFor="question6" className="block text-lg font-semibold text-gray-700 mb-2">
              On a scale of 0 to 5, how has substance use affected your family relationships?
            </label>
            <input
              type="range"
              id="question6"
              name="question6"
              min="0"
              max="5"
              value={formData.question6}
              onChange={handleChange}
              className={`w-full h-2 rounded-lg appearance-none cursor-pointer range-lg ${
                formData.question6 <= 2 ? 'bg-green-300' :
                formData.question6 <= 4 ? 'bg-yellow-300' : 'bg-red-300'
              }`}
            />
            <p className="text-sm text-indigo-600">Selected: {formData.question6}</p>
          </div>

          {/* Question 7 */}
          <div>
            <label htmlFor="question7" className="block text-lg font-semibold text-gray-700 mb-2">
              How difficult do you find it to control your substance use?
            </label>
            <input
              type="range"
              id="question7"
              name="question7"
              min="0"
              max="5"
              value={formData.question7}
              onChange={handleChange}
              className={`w-full h-2 rounded-lg appearance-none cursor-pointer range-lg ${
                formData.question7 <= 2 ? 'bg-green-300' :
                formData.question7 <= 4 ? 'bg-yellow-300' : 'bg-red-300'
              }`}
            />
            <p className="text-sm text-indigo-600">Selected: {formData.question7}</p>
          </div>

          {/* Question 8 */}
          <div>
            <label htmlFor="question8" className="block text-lg font-semibold text-gray-700 mb-2">
              On a scale of 0 to 5, how challenging is it for you to reduce your substance intake?
            </label>
            <input
              type="range"
              id="question8"
              name="question8"
              min="0"
              max="5"
              value={formData.question8}
              onChange={handleChange}
              className={`w-full h-2 rounded-lg appearance-none cursor-pointer range-lg ${
                formData.question8 <= 2 ? 'bg-green-300' :
                formData.question8 <= 4 ? 'bg-yellow-300' : 'bg-red-300'
              }`}
            />
            <p className="text-sm text-indigo-600">Selected: {formData.question8}</p>
          </div>

          {/* Question 9 */}
          <div>
            <label htmlFor="question9" className="block text-lg font-semibold text-gray-700 mb-2">
              Have you ever felt guilty about your substance use?
            </label>
            <input
              type="range"
              id="question9"
              name="question9"
              min="0"
              max="5"
              value={formData.question9}
              onChange={handleChange}
              className={`w-full h-2 rounded-lg appearance-none cursor-pointer range-lg ${
                formData.question9 <= 2 ? 'bg-green-300' :
                formData.question9 <= 4 ? 'bg-yellow-300' : 'bg-red-300'
              }`}
            />
            <p className="text-sm text-indigo-600">Selected: {formData.question9}</p>
          </div>

          {/* Question 10 */}
          <div>
            <label htmlFor="question10" className="block text-lg font-semibold text-gray-700 mb-2">
              How often do you seek substances when feeling down?
            </label>
            <input
              type="range"
              id="question10"
              name="question10"
              min="0"
              max="5"
              value={formData.question10}
              onChange={handleChange}
              className={`w-full h-2 rounded-lg appearance-none cursor-pointer range-lg ${
                formData.question10 <= 2 ? 'bg-green-300' :
                formData.question10 <= 4 ? 'bg-yellow-300' : 'bg-red-300'
              }`}
            />
            <p className="text-sm text-indigo-600">Selected: {formData.question10}</p>
          </div>

          <div className="text-center mt-8">
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white text-lg font-medium rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubstanceAbuseForm;
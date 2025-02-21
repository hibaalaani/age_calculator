// React-Only Age Calculator (TypeScript + Tailwind)

import React, { useState } from 'react';
import './App.css'; // Assuming Tailwind is set up

interface Age {
  years: number;
  months: number;
  days: number;
}

const AgeCalculator: React.FC = () => {
  const [dob, setDob] = useState<string>('');
  const [age, setAge] = useState<Age | null>(null);

  const calculateAge = () => {
    if (!dob) {
      alert('Please select a valid date of birth');
      return;
    }
    
    const birthDate = new Date(dob);
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    
    if (days < 0) {
      months -= 1;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Age Calculator</h1>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="border-2 border-gray-300 p-3 rounded-lg w-full mb-6 text-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        />
        <button
          onClick={calculateAge}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md"
        >
          Calculate Age
        </button>
        {age && (
          <div className="mt-6 p-4 bg-indigo-100 border-l-4 border-indigo-600 text-gray-700 rounded-lg">
            <p className="text-lg">
              You are <span className="font-bold text-indigo-700">{age.years}</span> years,
              <span className="font-bold text-indigo-700"> {age.months}</span> months, and
              <span className="font-bold text-indigo-700"> {age.days}</span> days old.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgeCalculator;

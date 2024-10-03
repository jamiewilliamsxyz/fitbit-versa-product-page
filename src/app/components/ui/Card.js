'use client';

const Card = ({ icon, title, text }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div>{icon}</div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

export default Card;
'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faCheck } from '@fortawesome/free-solid-svg-icons';

const Table = () => {
  const x = <FontAwesomeIcon icon={faX} size="xl" style={{color: "#dd554b",}} />
  const tick = <FontAwesomeIcon icon={faCheck} size="2xl" style={{color: "#6de88c",}} />

  return (
    <table className="text-lg table-auto border-collapse border border-gray-300 w-full">
      <thead>
        <tr>
          <th className="border border-gray-300 p-4">Feature</th>
          <th className="border border-gray-300 p-4">Fitbit Versa 4</th>
          <th className="border border-gray-300 p-4">Huawei Watch Fit</th>
          <th className="border border-gray-300 p-4">Apple Watch SE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-4">Price</td>
          <td className="border border-gray-300 p-4">£164</td>
          <td className="border border-gray-300 p-4">£139.99</td>
          <td className="border border-gray-300 p-4">£209</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-4">6+ Hours Battery Life</td>
          <td className="border border-gray-300 p-4">{tick}</td>
          <td className="border border-gray-300 p-4">{tick}</td>
          <td className="border border-gray-300 p-4">{x}</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-4">Water Resistance</td>
          <td className="border border-gray-300 p-4">{tick}</td>
          <td className="border border-gray-300 p-4">{tick}</td>
          <td className="border border-gray-300 p-4">{x}</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-4">Heart Rate Monitor</td>
          <td className="border border-gray-300 p-4">{tick}</td>
          <td className="border border-gray-300 p-4">{x}</td>
          <td className="border border-gray-300 p-4">{x}</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-4">GPS</td>
          <td className="border border-gray-300 p-4">{tick}</td>
          <td className="border border-gray-300 p-4">{x}</td>
          <td className="border border-gray-300 p-4">{x}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
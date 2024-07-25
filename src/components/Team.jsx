import React from 'react';
import teja from '../images/teja.jpeg';
import ras from '../images/ras.jpeg';
import nish from '../images/nish.jpeg';
import mo from '../images/mo.jpeg';
import nit from '../images/nit.jpeg';
import fah from '../images/fah.jpeg';

const teamMembers = [
  {
    name: 'Ananth',
    position: 'Frontend ',
    image: teja,
  },
  {
    name: 'Rasmitha',
    position: 'Backend ',
    image: ras,
  },
  {
    name: 'Mohith',
    position: 'Frontend ',
    image: mo,
  },
  {
    name: 'Nishanth ',
    position: 'Backened',
    image: nish,
  },
  {
    name: 'Nithin',
    position: 'LLM',
    image: nit,
  },
  {
    name: 'Fahad',
    position: 'Frontend ',
    image: fah,
  },
];

const Team = () => {
  return (
    <section className="py-10 px-4 md:px-20 bg-gray-100">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-gray-800">
        Meet Our Team
      </h2>
      <div className="flex flex-wrap justify-center gap-8 ">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 max-w-xs text-center hover:scale-110 hover:shadow-lg hover:shadow-black "
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-gray-700">{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;

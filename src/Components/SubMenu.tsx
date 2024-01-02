import React from 'react';

interface SubmenuItem {
  heading: string;
  items: string[];
}

interface SubmenuProps {
  menus: SubmenuItem[];
}

const Submenu: React.FC<SubmenuProps> = ({ menus }) => {
  return (
    <div className='subMenu  flex flex-row items-start justify-center lg:gap-x-4  py-12 w-auto  h-full lg:w-full   '>
      {menus.map((menu, index) => (
        <div key={index} className='flex flex-col  '>
          <h3 className='navheading  text-l py-6 uppercase'>{menu.heading}</h3>
          <ul className='gap-y-2 flex flex-col w-36 lg:w-56'>
            {menu.items.map((item, itemIndex) => (
              <li className='navItems text-l font-extralight hover:font-semibold hover:underline' key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Submenu;

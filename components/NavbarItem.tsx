import React from 'react';

interface NavbarItemProps {
	label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => (
  <div className="text-white cursor-pointer hover:text-gray-300 trnasition">
    {label}
  </div>
);

export default NavbarItem;

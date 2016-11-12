/**
 * Item Categories ~ Category selection page for all the main item types
 */

import React from 'react';
import { Link } from 'react-router';

export default () => {
  const links = [];
  const categories = [
    'Sword', 'Dagger', 'Axe', 'Spear', 'Mace', 'Staff', 'Bow',
    'Gun', 'Armor', 'Vest', 'Helmet', 'Gauntlet', 'Boots',
    'Clothes', 'Shield', 'Hat', 'Bracer', 'Footwear', 'Remedy',
    'Potion', 'Spell', 'Projectile', 'Ring', 'Pendant', 'Instruments'
  ];

  categories.forEach((category, index) => {
    const to = `/items/${category.toLowerCase()}`;
    const link = <Link className="col-xs-2" key={category} to={to}>{category}</Link>
    links.push(link);
  });

  return (
    <div className="item-categories">
      {links}
    </div>
  )
}

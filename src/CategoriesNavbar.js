import React from "react";

import { Navbar, NavItem } from "react-materialize";

const CategoriesNavBar = ({ categories }) => {
  return (
    <Navbar className="grey darken-2">
      {categories.map(categorie => {
        return <NavItem>{categorie}</NavItem>;
      })}
    </Navbar>
  );
};

export default CategoriesNavBar;

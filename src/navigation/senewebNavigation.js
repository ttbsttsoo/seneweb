import React from "react";

import { Navbar, NavItem, Icon, Link } from "react-materialize";

import { connect } from "react-redux";

import Logo from "../img/logo.png";

const Navigation = ({ categories }) => {
  return (
    <Navbar className="grey darken-2" right brand={<img src={Logo} />}>
      <NavItem href="/">
        <Icon className="left">home</Icon>
      </NavItem>
      {categories.map(categorie => {
        return <NavItem>{categorie}</NavItem>;
      })}
    </Navbar>
  );
};

const getCategories = state => {
  return {
    categories: state.categories
  };
};

export default connect(getCategories)(Navigation);

import React, { Component } from "react";

import Titre from "./titre/senewebTitre";
import Image from "./image/senewebImage";
import Contenu from "./contenu/senewebContenu";
import Reactions from "./reactions/senewebReactions";
import UneDate from "./uneDate/senewebDate";

import { connect } from "react-redux";

const Article = ({ id, article }) => {
  console.log("id:", id);
  console.log("article:", article);
  return (
    <div className="">
      <Titre topic={article.topic} titre={article.titre} />
      <Image image={article.image} />
      <Contenu contenu={article.contenu} />
      <UneDate date={article.date} />
      <Reactions reactions={article.reactions} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    article: state.articles.find(article => article.id === 2)
  };
};

export default connect(mapStateToProps)(Article);

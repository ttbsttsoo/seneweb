import React from "react";

import Titre from "./titre/senewebTitre";
import Image from "./image/senewebImage";
import Contenu from "./contenu/senewebContenu";
import Reactions from "./reactions/senewebReactions";
import UneDate from "./uneDate/senewebDate";

import { connect } from "react-redux";

const Article = ({ id, article }) => {
  return (
    <div className="" key={id}>
      <Titre article_id={id} topic={article.topic} titre={article.titre} />
      <Image image={article.image} />
      <Contenu contenu={article.contenu} />
      <UneDate date={article.date} />
      <Reactions reactions={article.reactions} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log("ownProps.id:", ownProps.id);
  return {
    article: state.articles.find(article => article.id == ownProps.id)
  };
};

export default connect(mapStateToProps)(Article);

import React, { Component } from "react";

import Titre from "./titre/senewebTitre";
import Image from "./image/senewebImage";
import Contenu from "./contenu/senewebContenu";
import Reactions from "./reactions/senewebReactions";
import UneDate from "./uneDate/senewebDate";

import { connect } from "react-redux";

class Article extends Component {
  render() {
    return (
      <div className="">
        <Titre
          topic={this.props.article.topic}
          titre={this.props.article.titre}
        />
        <Image image={this.props.article.image} />
        <Contenu contenu={this.props.article.contenu} />
        <UneDate date={this.props.article.date} />
        <Reactions reactions={this.props.article.reactions} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    article: state.articles[0]
  };
};

export default connect(mapStateToProps)(Article);

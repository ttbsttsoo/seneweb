import React from "react";

import Titre from "./titre/senewebTitre";
import Image from "./image/senewebImage";
import Contenu from "./contenu/senewebContenu";
import Reactions from "./reactions/senewebReactions";
import UneDate from "./uneDate/senewebDate";

const Article = ({ article }) => {
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

export default Article;

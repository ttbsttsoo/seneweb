import ArticleImage from "../img/mane.jpg";

const initState = {
  articles: [
    {
      id: 1,
      contenu:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sed veritatis aspernatur ",
      image: ArticleImage,
      titre: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      topic: "Sport",
      date: "9h",
      reactions: {
        ncommentaires: 3
      }
    },
    {
      id: 2,
      contenu:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sed veritatis aspernatur ",
      image: ArticleImage,
      titre: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      topic: "Sport",
      date: "15h",
      reactions: {
        ncommentaires: 5
      }
    }
  ]
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;

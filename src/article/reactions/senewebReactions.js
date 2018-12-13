import React from "react";

import { Col } from "react-materialize";

const Reactions = ({ reactions }) => {
  return <Col>{reactions.ncommentaires} commentaires</Col>;
};

export default Reactions;

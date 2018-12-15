import React, { Component } from "react";

import ProfileImage from "../../../img/mctr.jpg";
import Button from "react-materialize/lib/Button";
import { Modal } from "react-materialize";
import CreerCommentaire from "../creerCommentaire/senewebCreerCommentaire";

class Commentaire extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col l2">
            <img src={ProfileImage} alt="" className="responsive-img" />
          </div>
          <div className="col l8">Anonyme il y'a 13 heures (11:26 AM)</div>
          <div className="col l8">0 Fans</div>
        </div>
        <div className="row">
          <div className="col l8">
            <p>Super mane !</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              soluta corporis quam, consectetur quas amet reiciendis veniam
              voluptatum repellendus ad! Suscipit, eum. Deserunt, dignissimos
              aut accusantium laborum libero incidunt repudiandae?
            </p>
          </div>
        </div>
        <div className="row">
          <Modal
            header="Repondre commentaire"
            trigger={
              <Button className="col l2 white black-text">Repondre</Button>
            }
          >
            <CreerCommentaire />
          </Modal>

          <div className="col l1 center">
            +2<i className="material-icons">thumb_up</i>
          </div>
          <div className="col l1">
            <i className="material-icons">thumb_down</i>-3
          </div>
        </div>
      </div>
    );
  }
}

export default Commentaire;

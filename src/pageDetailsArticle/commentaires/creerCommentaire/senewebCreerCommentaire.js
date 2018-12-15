import React, { Component } from "react";

class CreerCommentaire extends Component {
  render() {
    return (
      <div>
        <div className="input-field">
          <input type="text" name="auteur" />
          <label for="auteur">Auteur:</label>
        </div>
        <div className="input-field">
          <textarea
            name="commentaire"
            className="materialize-textarea"
            data-length="120"
          />
          <label for="commentaire">Commentaire:</label>
        </div>
        <div className="btn-flat green darken-3">Envoyer ma reponse</div>
      </div>
    );
  }
}

export default CreerCommentaire;

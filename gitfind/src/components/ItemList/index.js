import React from "react";
import PropTypes from "prop-types"; // Importa o PropTypes
import "./styles.css";

function ItemList({ title, description }) {
  return (
    <div className="item-list">
      <strong>{title}</strong>
      <p>{description}</p>
      <hr />
    </div>
  );
}

ItemList.propTypes = {
  title: PropTypes.string.isRequired, // Garante que 'title' é uma string
  description: PropTypes.string.isRequired, // Garante que 'description' é uma string
};

export default ItemList;

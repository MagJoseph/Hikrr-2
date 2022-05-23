import React from "react";

const SearchItem = (props) => {
  return (
    <div>
      <div>
        <div className="list-item centered">
          <p className="post-title"> {props.title}</p>
          <img src={props.image} alt="landscape" />
          <br></br>
          <p className="post-content"> {props.content}</p>
          <p className="rating">Difficulty Rating: {props.rating}</p>
          <p className="rating">Length: {props.distance}</p>
          <p className="rating">Park: {props.park}</p>
          <p className="rating">Address: {props.address}</p>
          <br></br>
          <img className="img-map" src={props.mapUrl} alt="map" />
        </div>
      </div>
    </div>
  );
};

export default SearchItem;

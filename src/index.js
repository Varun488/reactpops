import React from "react";
import ReactDOM from "react-dom";

function Cards(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Cards
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Cards
      name="Shahrukh khan"
      img="https://images.news18.com/ibnlive/uploads/2017/11/Shah-Rukh-Khan-at-the-Millennium-Dome-London.jpg?im=FitAndFill,width=320,height=320"
      tel="949303034"
      email="kingkhan90@gmail.com"
    />
    <Cards
      name="vijayDevarakonda"
      img="https://i0.wp.com/www.talkerbud.com/wp-content/uploads/2020/01/2-7.jpg?resize=640%2C444"
      width="120"
      height="120"
      tel="2939754"
      email="rowdyvijay@gmail.com"
    />
  </div>,
  document.getElementById("root")
);

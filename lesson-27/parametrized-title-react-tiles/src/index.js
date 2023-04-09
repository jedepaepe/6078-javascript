import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

class Tile extends React.Component {
    render = () => <div>
        <h3>{this.props.title}</h3>
        <div>
            <img src="https://via.placeholder.com/300x200.png" alt={this.props.title}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?</p>
        </div>
    </div>;
}

class Tiles extends React.Component {
    render = () => <div className="tiles">
        <Tile title={"Alfred"} />
        <Tile title={"Sarah"} />
        <Tile title={"Josette"} />
        <Tile title={"Romain"} />
        <Tile title={"Didier"} />
        <Tile title={"Joëlle"} />
        <Tile title={"Susa"} />
        <Tile title={"Françoise"} />
        <Tile title={"Romane"} />
        <Tile title={"René"} />
        <Tile title={"Joseph"} />
        <Tile title={"Milo"} />
    </div>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<Tiles/>);
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

class Header extends React.Component {
    render = () => <header className="header">
        <h1>Tuiles - React</h1>
        </header>
}

class Tile extends React.Component {
    render = () => <div>
        <h3>Alfred</h3>
        <div>
            <img src="https://via.placeholder.com/300x200.png" alt="Alfred"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?</p>
        </div>
    </div>;
}

class Tiles extends React.Component {
    render = () => <main><div className="tiles">
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
    </div></main>;
}

class Footer extends React.Component {
    render = () => <footer>&copy;epfc</footer>;
}

class Root extends React.Component {
    render = () => <div>
        <Header />
        <Tiles/>
        <Footer/>
    </div>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root/>);
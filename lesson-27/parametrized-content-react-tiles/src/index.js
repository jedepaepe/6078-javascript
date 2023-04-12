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
        <h3>{this.props.title}</h3>
        <div>
            <img src={this.props.image} alt={this.props.title}/>
            <p>{this.props.paragraph}</p>
        </div>
    </div>;
}

class Tiles extends React.Component {
    render = () => <div className="tiles">
        <Tile title={"Alfred"} image={"https://via.placeholder.com/300x200.png"} paragraph={"1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?"} />
        <Tile title={"Sarah"}  image={"https://via.placeholder.com/300x200.png"} paragraph={"2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?"} />
        <Tile title={"Josette"}  image={"https://via.placeholder.com/300x200.png"} paragraph={"3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?"} />
        <Tile title={"Romain"}  image={"https://via.placeholder.com/300x200.png"} paragraph={"4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?"} />
        <Tile title={"Didier"}  image={"https://via.placeholder.com/300x200.png"} paragraph={"5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?"} />
        <Tile title={"Joëlle"}  image={"https://via.placeholder.com/300x200.png"} paragraph={"6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?"} />
        <Tile title={"Susa"}  image={"https://via.placeholder.com/300x200.png"} paragraph={"7 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?"} />
        <Tile title={"Françoise"}  image={"https://via.placeholder.com/300x200.png"} paragraph={"8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?"} />
        <Tile title={"Romane"}  image={"https://via.placeholder.com/300x200.png"} paragraph={"9 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?"} />
        <Tile title={"René"}  image={"https://via.placeholder.com/300x200.png"} paragraph={"10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?"} />
        <Tile title={"Joseph"}  image={"https://via.placeholder.com/300x200.png"} paragraph={"11 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?"} />
        <Tile title={"Milo"}  image={"https://via.placeholder.com/300x200.png"} paragraph={"12 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate dolor molestias? Alias accusamus pariatur nobis, rem dolorum magnam odio distinctio eaque modi nemo! Explicabo fugiat impedit accusamus quam fuga?"} />
    </div>;
}

class Footer extends React.Component {
    render = () => <footer>&copy;epfc</footer>;
}

class Root extends React.Component {
    render = () => <div>
        <Header/>
        <Tiles/>
        <Footer/>
    </div>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root/>);
// Paste the code in https://codepen.io/ in order to make it work.

function Person(props) {
    return (
        <div className="person">
            <h1>{props.name}</h1>
            <p>Your Age: {props.age}</p>
        </div>
    );
}

// jsx code
const app = (
    <div>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29" />
    </div>
);

ReactDOM.render(app, document.querySelector('#app'));

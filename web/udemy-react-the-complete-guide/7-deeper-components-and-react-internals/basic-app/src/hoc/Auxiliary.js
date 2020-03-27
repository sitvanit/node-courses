// It's called Higher Order Component, because all it does it's wrapping another component.
// It does not contain its own logic or styling.

const aux = (props) => props.children; // children is the all of the output between the opening and closing tags.

export default aux;

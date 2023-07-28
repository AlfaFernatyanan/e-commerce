import "./StandardButton.css";

function StandardButton(props: any) {
  return (
    <a href={props.link} className="standard-button">
      {props.label}
    </a>
  );
}
export default StandardButton;

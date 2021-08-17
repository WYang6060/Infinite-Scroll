import "./ListGroup.css";

const ListGroup = ({ listItems }) => (
  <ul className="list-group">
    {listItems.map((val) => (
      <li key={val} className="list-group-item">
        List Item {val}
      </li>
    ))}
  </ul>
);

export default ListGroup;

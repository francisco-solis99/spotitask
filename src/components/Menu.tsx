import { Link } from "react-router-dom";

export default function Menu() {
  console.log("render menu");
  return (
    <aside className="aside__menu">
      <h1>TODOs</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
          <li>
            <Link to="/lists">Lists</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

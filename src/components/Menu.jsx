
export default function Menu() {
  console.log('render menu');
  return (
    <aside className='aside__menu'>
      <h1>TODOs</h1>
      <nav>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Tasks</a></li>
          <li><a href="">Lists</a></li>
        </ul>
      </nav>
    </aside>
  );
}

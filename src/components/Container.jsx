
export default function Container({ children }) {
  console.log('render container');
  return (
    <div className="container">
      {children}
    </div>
  );
}

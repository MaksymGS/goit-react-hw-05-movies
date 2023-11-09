import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>Page cannot be found</h1>
      <p>
        Sorry, we're unable to bring you the page you're looking for. Please
        try:
      </p>
      <p>
        Alternatively, please visit the <Link to="/">Homepage</Link>
      </p>
    </div>
  );
}

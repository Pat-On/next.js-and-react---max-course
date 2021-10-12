// it is going to be home root
import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          {/* we are sending new brand http request - application state is going to lost from redux and context state */}
          {/* <a href="/portfolio">A - Portfolio</a>  */}
          <Link href="/portfolio">Link - Portfolio</Link>
          {/* from max: automaticaly prefetch any data from the page as soon as we are going to hover on link wow!  */}
        </li>
        <li>
          <Link href="/clients">Link - clients</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;

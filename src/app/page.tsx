import Image from "next/image";
import "./globals.css"

export default function Home() {
  return <div>
    <NavBar/>
    <Page/>
  </div>
}

function NavBar() {
  return (
    <div>
      <a href="">LOGO</a>
      <nav>
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>About</li>
          <li>Login</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

function Page() {
  return (
    <>
      <div>
        <h2>Welcome to</h2>
        <h1>Travel Ease</h1>
        <button>Enter</button>
      </div>
      <div>
        <button className="arrow left"></button>
        <button className="arrow right"></button>
      </div>
    </>
  );
}

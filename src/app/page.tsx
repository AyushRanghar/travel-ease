import Image from "next/image";
import "./page.css";

export default function Home() {
  return <div>
    <div className="bg"></div>
    <NavBar/>
    <Page/>
  </div>
}

function NavBar() {
  return (
    <div className="nav">
      <a href="">LOGO</a> {/** url routing to home page */}
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
    
      <div className="welcome">
        <h2>Welcome to</h2>
        <h1>Travel Ease</h1>
        <button>Explore</button> {/**button to enter the main website  */}
      </div>
      <div className="navigations">
        <button className="arrow left"></button>
        <button className="arrow right"></button>
      </div>
    </>
  );
}

import { Link } from "react-router-dom";
import Card from "../../CardProps/Card";
import "./Header.css"

function Header() {
  return (
    <div className="header">
      <nav className="nav-list">
        <Link to="/">Home</Link>
        <Link to="/JokeApp">JokeApp</Link>
        <Link to="/Contact">Contact Us</Link>
        <Link to="/UseState1">UseState1</Link>
        <Link to="/Ausestate">Ausestate</Link>
        <Link to="/UseEffect1">UseEffect1</Link>
        <Link to="/Form1">Form</Link>
        
      </nav>

      {/* Card Component. Include it in the header and pass appropriate props. imort too */}

      <Card
        title="Parrot"
        subtitle="This is a description of the card content."
        bgcolor={"#2a19e7ff"}
        textcolor={"#df0e0eff"}
        images="https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80"
      />
      {/* card 2 */}
      <Card
        title="Card Title "
        subtitle="This is a description of the card content."
        images="https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000"
        bgcolor={"#F0A500"}
      />

      <Card
        title="Eyes"
        subtitle="This is a description of the card content."
        images="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
        textcolor={"#06841d6e"}
      />
    </div>
  );
}
export default Header;

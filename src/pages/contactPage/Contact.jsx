import Card from "../../CardProps/Card";
import "./Contact.css"
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="contact">
      <nav>
        <Link to="/" >Home</Link>
        <Link to="/Page1">About</Link>
      </nav>
      <footer>
        <h1>this is not the contact us page its footer</h1>
        <p>
          im too lazy to change this contact us page name to footer, so byeeeee
        </p>
      </footer>
      <Card title="Card " subtitle="This is a my image card" 
      images={"https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="}
      textcolor={"#1579deff"}
      />
      
    
    </div>
  );
}
export default Contact;

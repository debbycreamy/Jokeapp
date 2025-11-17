import "./Card.css"

function Card({ title, subtitle, images, bgcolor, textcolor }) {
  
  const src = images;

  return (
    <div style={{ backgroundColor: bgcolor }} className="card">

      {/* call the style directly to the main div and not the image div */}
      <div className="card-image" aria-hidden="true">
        <img src={src} alt={title || "card image"} />
      </div>

      {/* this changes the text to the title name */}
      <div style={{ color: textcolor }}>
      <h2 className="card-title">{title} </h2>

      <p  style={{ color: textcolor }} className="card-subtitle">{subtitle}</p> 
      </div>

      <div className="card-actions"> 
        <a className="btn" href="#">
          Primary
        </a>
        <a className="btn secondary" href="#">
          Secondary
        </a>
      </div>
    </div>
  );
}
export default Card;

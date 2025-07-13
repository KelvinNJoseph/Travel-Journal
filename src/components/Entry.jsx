
const Entry = (props) => {
    return (
      <article className="journal-entry">
        <div className="image-1-container">
          <img
            src={props.img.src}
            alt={props.img.alt}
            className="image-1"
          />
        </div>
        <div>
          <span className="location">{props.country}</span>
          <a href={props.googleMapsLink} target="_blank">
            View on Google Maps
          </a>
          <h2>{props.title}</h2>
          <p className="date">{props.dates}</p>
          <p>{props.text}</p>
        </div>
      </article>
    );
}

export default Entry;
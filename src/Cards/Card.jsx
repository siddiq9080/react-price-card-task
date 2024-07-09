import propTypes from "prop-types";
import data from "./Card.json";

const Card = ({ plan, price, features, btns }) => {
  return (
    <div className="card mt-3 mb-3 rounded-4">
      <div className="card-text text-muted text-center mt-4">{plan}</div>
      <h1 className="card-head pb-5 text-center border-bottom mt-2 ">
        ${price}/Month
      </h1>
      <div className="card-body mt-2 ps-4 pe-4">
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          {features.map((feature) => (
            <li
              key={feature.title}
              style={{
                opacity: feature.isEnabled ? 1 : 0.6,
                marginBottom: "15px",
                fontSize: "22px",
              }}
            >
              {feature.isEnabled ? (
                <i className="fa-solid fa-check pe-2"></i>
              ) : (
                <i className="fa-solid fa-xmark pe-2"></i>
              )}
              {feature.title}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="btn btn-primary w-100 rounded-5"
          style={{ opacity: btns.isEnable ? 1 : 0.7 }}
        >
          {btns.title}
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  plan: propTypes.string,
  price: propTypes.number,
  features: propTypes.array,
  btns: propTypes.string,
};

const Cards = () => {
  return (
    <div className="container h-100 bg-primary mt-5">
      <div className="row">
        {data.map((cardData) => (
          <div key={cardData.id} className="col-lg-4">
            <Card {...cardData} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

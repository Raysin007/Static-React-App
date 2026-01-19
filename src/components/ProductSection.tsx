import "./ProductSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faAmazon,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

interface ProductSectionProps {
  quantities: number[];
  onUpdateQuantity: (productIndex: number, change: number) => void;
}

function ProductSection({ quantities, onUpdateQuantity }: ProductSectionProps) {
  return (
    <>
      {/* Products container ONLY */}
      <div className="hero-content2">
        {/* Jacket product card */}
        <div className="product-card1">
          <img src="./assets/jacket1.jpg" />
          <p>Men's Blue Varsity Jacket</p>
          <div className="star">
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
          </div>
          <h3>$79.99</h3>
          <div className="qty-btn-jacket">
            <span className="minus" onClick={() => onUpdateQuantity(0, -1)}>
              -
            </span>
            <span className="num">{quantities[0]}</span>
            <span className="plus" onClick={() => onUpdateQuantity(0, 1)}>
              +
            </span>
          </div>
          <div className="buy-container">
            <button className="buy-btn-jacket">Buy</button>
          </div>
        </div>

        {/* Boots product card */}
        <div className="product-card2">
          <img src="./assets/boots.jpg" />
          <p>Men's Boots</p>
          <div className="star">
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
          </div>
          <h3>$79.99</h3>
          <div className="qty-btn-jacket">
            <span className="minus" onClick={() => onUpdateQuantity(1, -1)}>
              -
            </span>
            <span className="num">{quantities[1]}</span>
            <span className="plus" onClick={() => onUpdateQuantity(1, 1)}>
              +
            </span>
          </div>
          <div className="buy-container">
            <button className="buy-btn-jacket">Buy</button>
          </div>
        </div>

        {/* Pants product card */}
        <div className="product-card3">
          <img src="./assets/pants.jpg" />
          <p>Men's Denim Jeans</p>
          <div className="star">
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
          </div>
          <h3>$79.99</h3>
          <div className="qty-btn-jacket">
            <span className="minus" onClick={() => onUpdateQuantity(2, -1)}>
              -
            </span>
            <span className="num">{quantities[2]}</span>
            <span className="plus" onClick={() => onUpdateQuantity(2, 1)}>
              +
            </span>
          </div>
          <div className="buy-container">
            <button className="buy-btn-jacket">Buy</button>
          </div>
        </div>
      </div>

      {/* FAQ Section - FULL WIDTH */}
      <section className="faq-section">
        <div className="faq">
          <h2>Frequently Asked Questions</h2>
          <ul className="accordian">
            <li>
              <input type="radio" name="accordian" id="first" />
              <label htmlFor="first">Did you recieve a damaged product ?</label>
              <div className="content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptas cupiditate hic corrupti ipsam numquam beatae? Vero
                nobis eius quo? Ipsa quisquam, blanditiis laborum neque quidem
                reprehenderit culpa soluta? Recusandae, dolor.
              </div>
            </li>
            <li>
              <input type="radio" name="accordian" id="second" />
              <label htmlFor="second">What are the products made of ?</label>
              <div className="content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptas cupiditate hic corrupti ipsam numquam beatae? Vero
                nobis eius quo? Ipsa quisquam, blanditiis laborum neque quidem
                reprehenderit culpa soluta? Recusandae, dolor.
              </div>
            </li>
            <li>
              <input type="radio" name="accordian" id="third" />
              <label htmlFor="third">What is our return policy ?</label>
              <div className="content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptas cupiditate hic corrupti ipsam numquam beatae? Vero
                nobis eius quo? Ipsa quisquam, blanditiis laborum neque quidem
                reprehenderit culpa soluta? Recusandae, dolor.
              </div>
            </li>
            <li>
              <input type="radio" name="accordian" id="fourth" />
              <label htmlFor="fourth">
                Are you satisfied with our services ?
              </label>
              <div className="content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptas cupiditate hic corrupti ipsam numquam beatae? Vero
                nobis eius quo? Ipsa quisquam, blanditiis laborum neque quidem
                reprehenderit culpa soluta? Recusandae, dolor.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer Section - FULL WIDTH */}
      <footer>
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>
              We are committed to providing the best fashion products to our
              customers. <br /> Our mission is to deliver quality and style in
              every piece we offer.
            </p>
          </div>
          <div className="footer-section-links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faAmazon} />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email:studio@gmail.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Fashion St, Style City, Country</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default ProductSection;

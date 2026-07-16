export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">KITRO</div>
            <p style={{ maxWidth: 260, lineHeight: 1.6 }}>
              Fashion that moves with you. Elevated essentials for men,
              women and kids.
            </p>
          </div>
          <div className="footer-col">
            <h5>SHOP</h5>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Beauty</a>
          </div>
          <div className="footer-col">
            <h5>SUPPORT</h5>
            <a href="#">Track Order</a>
            <a href="#">Returns</a>
            <a href="#">Shipping Info</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="footer-col">
            <h5>COMPANY</h5>
            <a href="#">About KITRO</a>
            <a href="#">Careers</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2024 KITRO. All rights reserved.</span>
          <span>Made with care.</span>
        </div>
      </div>
    </footer>
  )
}

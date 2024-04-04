const SignUpForm = () => {
  return (
    <div className="wrapper">
      <main>
        <div className="layout">
          <section>
            <div className="newsletter-wrapper">
              <div className="signup">
                <h1 className="signup__title">Stay updated!</h1>
                <p className="signup__description">
                  Join 60,000+ product managers receiving monthly updates on:
                </p>
                <ul className="signup__features features">
                  <li className="feature__item feature__one">
                    <img src="/images/icon-list.svg" alt="List Icon" />
                    Product discovery and building what matters
                  </li>
                  <li className="feature__item feature__two">
                    <img src="/images/icon-list.svg" alt="List Icon" />
                    Measuring to ensure updates are a success
                  </li>
                  <li className="feature__item feature__three">
                    <img src="/images/icon-list.svg" alt="List Icon" />
                    And much more!
                  </li>
                </ul>
              </div>
              <div className="form-wrapper">
                <form className="form" action="">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email@company.com"
                  />
                  <button type="submit">Subscribe to monthly newsletter</button>
                </form>
              </div>
            </div>
          </section>
          <section>
            <div className="hero">
              <picture>
                <source
                  srcSet="/images/illustration-sign-up-mobile.svg"
                  media="(max-width: 800px)"
                />
                <img
                  className="hero__image"
                  src="/images/illustration-sign-up-desktop.svg"
                  alt="Illustration Sign Up SVG"
                />
              </picture>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
export default SignUpForm

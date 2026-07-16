import "./contact.css";
const Contact = () => {
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        contact us
      </h1>
      <p className="sub-title">
        contact us for more information and Get notified when I publish
        something new
      </p>

      <div className="flex">
        <form>
          <div className="flex">
            <label htmlFor="email">Email Address</label>
            <input required type="email" id="email" />
          </div>
          <div className="flex" style={{marginTop: "24px"}}>
            <label htmlFor="massage">Your massage</label>
            <textarea required name="" id="massage"></textarea>
          </div>
          <button className="submit">submit</button>
        </form>
        <div className="animation">animation</div>
      </div>
    </section>
  );
};

export default Contact;

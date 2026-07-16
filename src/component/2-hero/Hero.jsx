import "./hero.css";
const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <img src="./mmm.png" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title">Software designer</h1>
        <p className="sub-title">
          I'm Mohammad Ali , a software designer based in egypt
        </p>

        <div className="all-icons flex">
          <a className="flex" href="https://x.com/PRo88047549"target="_blank">
            <div className="icon icon-twitter"></div>
          </a>
          <a className="flex" href="https://www.instagram.com/mohamed124g?igsh=MTBpMmVzcWtqZHQxYg=="target="_blank">
            <div className="icon icon-instagram"></div>
          </a>
          <a className="flex" href="https://github.com/m1852210-collab"target="_blank">
            <div className="icon icon-github"></div>
          </a>
          <a className="flex" href="https://www.linkedin.com/in/%D9%85%D8%AD%D9%85%D8%AF-%D8%B9%D9%84%D9%8A-03499a334?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank">
            <div className="icon icon-linkedin"></div>
          </a>
        </div>
      </div>

      <div className="right-section animation "></div>
    </section>
  );
};

export default Hero;

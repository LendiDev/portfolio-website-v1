import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact-me">
      <div id="contact-me-inner">
        <h2>Contact me</h2>
        <form>
          <p>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name"/>
          </p>
          <p>
            <label htmlFor="email">E-Mail</label>
            <input type="email" id="email" placeholder="Enter your E-Mail address" />
          </p>
          <p>
            <label htmlFor="emain">Message</label>
            <textarea rows={10} placeholder="Leave a message for me"></textarea>
          </p>
          <button className="btn btn-regular-font"><i class="fa-solid fa-paper-plane"></i> Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

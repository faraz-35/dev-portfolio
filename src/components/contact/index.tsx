const ContactForm = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        Choose us for our commitment to quality, innovation, and delivering
        results that exceed expectations.
      </p>
      <div className="grid grid-cols-2 space-y-4 ">
        <div>
          <label>Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="col-span-2">
          <label>Budget</label>
          <input type="number" />
        </div>
        <div className="col-span-2">
          <label>Message</label>
          <textarea rows={4}></textarea>
        </div>
      </div>
      <button className="my-4 ">Submit</button>
    </div>
  );
};
export default ContactForm;

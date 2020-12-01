import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const contact = () => {
  return <Layout>
    <SEO title="Contact"
      description="Get in touch with Daniel Vega. He's desparate for human contact." />
    <section className="contact-page">
      <article className="contact-form">
        <h3>Hit me up</h3>
        <form action="https://formspree.io/f/mrgoaove" method="POST">
          <div className="form-group">
            <input type="text" name="name" placeholder="name"
              className="form-control" />
            <input type="email" name="email" placeholder="email"
              className="form-control" />
            <textarea name="message" rows="5"
              placeholder="message"
              className="form-control">
            </textarea>
          </div>
          <button type="submit" className="submit-btn btn">submit here</button>
        </form>
      </article>
    </section>
  </Layout>
}

export default contact;

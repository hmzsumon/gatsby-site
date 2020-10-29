import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        The best way to reach me is via on{" "}
        <a href="https://twitter.com/zakaria_sumon" target="_blank">
          @zakaria_sumon
        </a>{" "}
        Twitter
      </p>
    </Layout>
  )
}

export default ContactPage

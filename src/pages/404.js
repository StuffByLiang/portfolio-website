import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {Container, Row, Col} from 'react-bootstrap'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Not Found" />
    <section class="text-center bg-white">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={8}>
            <h1 class="mb-4">404 Not Found!</h1>
            <a href="/">Back to Safety!</a>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default NotFoundPage

import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import Link from '../components/link'
import Layout from '../components/layout'
import { FiAlertTriangle } from 'react-icons/fa'
import Styled from 'styled-components'
import Hr from '../components/hr'
import PageTitle from '../components/page-title'
import { graphql } from 'gatsby'
import SEO from "../components/seo"

let Cirle = Styled.div`
  height: 4rem;
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const AboutUs = () => (
  <Layout>
    <SEO title="About Us" />
    <PageTitle title="About Us"/>
    <Container>
      <Row className="py-5">
        <Col xs={6} lg={3} className="d-flex flex-column align-items-center" style={{wordBreak: 'break-word'}}>
        <h1>Coming Soon</h1>
        <hr/>
        <p>People will be added here soon.</p>
      </Col>
      </Row>
    </Container>
  </Layout>
)

export default AboutUs

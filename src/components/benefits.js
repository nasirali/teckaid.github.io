import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import { FaRocket, FaCogs} from 'react-icons/fa'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image/withIEPolyfill'
import styled from 'styled-components'

let StyledImg = styled(props => <Img {...props}/>)`
  perspective: 1500px;
  perspective-origin: left center;
  overflow: visible !important;
  picture, img {
    transform: rotateY(-35deg) rotateX(15deg);
    box-shadow: 25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2);
    border-radius: .625rem;
    transition: 1s !important;
    &:hover {
      transform: rotateY(-30deg) rotateX(15deg);
    }
  }
`

let Benefit = ({Icon, title, content}) => (
  <div className="d-flex mb-4">
    <Icon size={30} className="text-primary"/>
    <div className="ml-3">
      <h4>{title}</h4>
      <p className="m-0 text-muted">{content}</p>
    </div>
  </div>
)

let Benefits = ({data}) => (
  <Container className="py-5">
    <Row className="d-flex align-items-center">
      <Col md="6">
        <div className="mb-4">
          <h2 className="text-primary">Ready to take your brand on Amazon?</h2>
          <p className="text-muted">Achieve better and faster results. We can help.</p>
        </div>
        <Benefit Icon={FaRocket} title="Growth Management" content="TeckAid team will be your principal counselor, lend our expertise for growing on Amazon, helping your business use various Amazon solutions to fit your goals."/>
        <Benefit Icon={FaCogs} title="Proven Formula" content="TeckAid will identify strategic ways to increase revenue, reach new customers base and make confident action plan to drive powerful results."/>
      </Col>
      <Col md="6">
        <StyledImg fluid={data.file.childImageSharp.fluid} objectFit="contain" objectPosition="50% 50%"/>
      </Col>
    </Row>
  </Container>
)

export default () => (
  <StaticQuery
    query={graphql`
      query BenefitsQuery {
        file(relativePath: {eq: "ppcmarketing.png"}) {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <Benefits data={data}/>
    )}
  />
)

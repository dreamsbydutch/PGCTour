import React from 'react'
import { Container } from 'react-bootstrap'

function ErrorPage() {
    return (
        <Container fluid>
            <p className="h1 text-center m-5">
                Error!! The Page you are looking for does not exist
            </p>
        </Container>
    )
}

export default ErrorPage

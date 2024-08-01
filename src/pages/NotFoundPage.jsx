import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    background-color: #f8f9fa;
    `;

const Heading = styled.h1`
    font-size: 4rem;
    margin: 0;
    color: #343a40;
`;

const SubHeading = styled.h2`
    font-size: 1.5rem;
    margin: 16px 0;
    color: #6c757d;
`;

const StyledLink = styled(Link)`
    margin-top: 24px;
    padding: 12px 24px;
    font-size: 1rem;
    color: #ffffff;
    background-color: #007bff;
    text-decoration: none;
    border-radius: 4px;

    &:hover {
        background-color: #0056b3;
    }
`;

const NotFoundPage = () => (
    <Container>
        <Heading>404</Heading>
        <SubHeading>Página no encontrada</SubHeading>
        <StyledLink to="/">Volver al inicio</StyledLink>
    </Container>
);

export default NotFoundPage;
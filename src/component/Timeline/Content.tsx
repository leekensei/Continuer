import React from 'react';
import styled from 'styled-components';

import { useAppSelector } from '../../hooks/redux';

import palette from '../../utils/palette';
import mediaQuery from '../../utils/mediaQuery';
import Card from './Card';

const Wrapper = styled.main`
    width: 100%;
    height: 100vh;
    
    padding-bottom: 7rem;
    overflow: scroll;

    background: ${palette[3]};

    @media (min-width: ${mediaQuery.mobile}px) {
    }
    @media (min-width: ${mediaQuery.tablet}px) {
    }
    @media (min-width: ${mediaQuery.laptop}px) {
}
`;

const Container = styled.div`
    // padding: 0 2.5rem;
    padding: 0 1rem;

    @media (min-width: ${mediaQuery.tablet}px) {
        padding: 0 2.5rem;
    }
    @media (min-width: ${mediaQuery.laptop}px) {
        max-width: ${mediaQuery.tablet}px;
        margin: 0 auto;
    }
`;


const Content = () => {
    const data = useAppSelector(state => state.content.cardlist);
    return (
        <Wrapper>
            <Container>
                {data.map((v) => <Card text={v.text} date={v.date}/>)}
            </Container>
        </Wrapper>
    );
};

export default Content;
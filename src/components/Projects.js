import React from 'react';
import styled from 'styled-components';

function Projects(props) {
    return (
        <Wrapper>
            {props.data.map(item => {
                return (
                    <Row key={item.id}>
                        <img src={item.img} alt={item.name} />
                        <RowContent>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <ButtonWrapper>
                                <Button href={item.preview}>Visit Site</Button>
                                <Button href={item.github}>View Code</Button>
                            </ButtonWrapper>
                            <Tags>
                                {item.tags.map(tag => (
                                    <i className={` fab ${tag}`} />
                                ))}
                            </Tags>
                        </RowContent>
                    </Row>
                );
            })}
        </Wrapper>
    );
}

export default Projects;

const Wrapper = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    /* flex-direction: column; */
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
    padding: 45px 5px;
    background-color: #a9b4c2;
    -webkit-clip-path: polygon(0% 5%, 100% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0% 5%, 100% 0, 100% 100%, 0% 100%);
`;
const ButtonWrapper = styled.div`
    margin: 10px 0;
`;
const Button = styled.a`
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 1.2rem;
    background-color: #3c81e3;
    color: #fff;
    margin-right: 5px;
    &:hover {
        text-decoration: none;
        border-radius: 4px;
        background-color: #2f6dc4;
        color: #fff;
    }
`;

const Row = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 500px;
    width: 100%;
    padding: 5px;
    img {
        height: auto;
        width: 100%;
    }
`;

const RowContent = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    padding: 0 10px 10px 10px;

    h2 {
        font-weight: 300;
    }
    p {
        font-size: 1.3rem;
        margin: 5px 0;
    }
`;
const Tags = styled.div`
    font-size: 1.6rem;
    i {
        padding: 5px;
    }
`;

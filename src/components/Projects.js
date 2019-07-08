import React from 'react';
import styled from 'styled-components';

function Projects(props) {
    return (
        <Styles>
            <div className="SectionTitle">
                <div className="h1">PROJECTS</div>
            </div>
            <div className="ProjectWrapper">
                {props.data.map(item => {
                    return (
                        <div className="Project" key={item.id}>
                            <div>
                                <div className="ImgWrapper">
                                    <img
                                        className="IMG"
                                        alt={item.name}
                                        src={item.img}
                                    />
                                </div>
                                {/* <img src={item.img} alt={item.name} /> */}
                                <div className="RowContent">
                                    <div className="h2">{item.name}</div>
                                    <p>{item.description}</p>
                                    <div>
                                        {item.tags.map(tag => (
                                            <i className={`${tag}`} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="ButtonWrapper">
                                <a className="btn" href={item.preview}>
                                    Visit Site
                                </a>
                                <a className="btn" href={item.github}>
                                    View Code
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Styles>
    );
}

export default Projects;

const Styles = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
    padding: 45px 5px;
    background-color: #a9b4c2;
    -webkit-clip-path: polygon(0% 5%, 100% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0% 30px, 100% 0, 100% 100%, 0% 100%);
    .ImgWrapper {
        box-sizing: border-box;
        max-width: 400px;
        width: 100%;
        display: flex;
        padding: 20px;
        justify-content: center;
        background-color: #fff;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        border-bottom: 2px solid #5e6572;
    }
    .IMG {
        /* height: auto; */
        width: auto;
    }
    .ButtonWrapper {
        display: flex;
        align-self: flex-end;
    }
    .SectionTitle {
        max-width: 800px;
        width: 100%;
        margin: 0 auto;
        /* font-size: 2rem; */
        font-weight: 300;
    }
    .ProjectWrapper {
        display: flex;
        flex-direction: row;
        margin: 0 auto;
        @media (max-width: 900px) {
            flex-direction: column;
        }
    }
    .Project {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        background-color: #eef1ef;

        max-width: 400px;
        width: 100%;
        /* padding: 5px; */
        margin: 5px;
        border-radius: 4px;
        box-shadow: 2px 2px 4px gray;
    }

    .RowContent {
        box-sizing: border-box;
        display: flex;
        font-weight: 300;
        flex-direction: column;
        font-size: 1rem;
        padding: 10px;
        /* width: 100%;
        max-height: 400px;
        height: 100%; */
        /* background-color: #eef1ef; */
        color: #5e6572;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        p {
            /* font-size: 1.8rem; */
            margin: 5px 0;
        }
    }
    .Tags {
        font-size: 2rem;
        i {
            padding: 5px;
        }
    }
`;

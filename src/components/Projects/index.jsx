import React from 'react';
import styled, { keyframes } from 'styled-components';
import fadeIn from 'react-animations/lib/fade-in';
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
                            <div className="ImgWrapper">
                                <img
                                    className="IMG"
                                    alt={item.name}
                                    src={item.img}
                                />
                            </div>

                            {/* <img src={item.img} alt={item.name} /> */}
                            <div className="content">
                                <div>
                                    <div className="h2">{item.name}</div>
                                    <p>{item.description}</p>
                                    <div>
                                        {item.tags.map((tag, index) => (
                                            <i
                                                className={`${tag}`}
                                                key={index}
                                            />
                                        ))}
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
                        </div>
                    );
                })}
            </div>
            <div className="SectionTitle SectionTitle2">
                <div className="h1">SMALL PROJECTS</div>
                <div className="projectSmallWrapper">
                    <div className="Project projectSmall">
                        <div className="content">
                            <div>
                                <div className="h2">Num to String</div>
                                <p>Type in a number and get a string back.</p>
                            </div>
                            <div className="ButtonWrapper ButtonWrapperSmall">
                                <a
                                    className="btn"
                                    href="https://num.landers.dev">
                                    Visit Site
                                </a>
                                <a
                                    className="btn"
                                    href="https://github.com/mlanders/num_to_string">
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="Project projectSmall">
                        <div className="content">
                            <div>
                                <div className="h2">React ToDo</div>
                                <p>Simple Todo app using local storage.</p>
                            </div>
                            <div className="ButtonWrapper ButtonWrapperSmall">
                                <a
                                    className="btn"
                                    href="https://todo.landers.dev/">
                                    Visit Site
                                </a>
                                <a
                                    className="btn"
                                    href="https://github.com/mlanders/React-Todo">
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ProjectWrapper" />
        </Styles>
    );
}

export default Projects;
const fadeInAnimation = keyframes`${fadeIn}`;
const Styles = styled.div`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
    padding: 45px 5px;
    background-color: #a9b4c2;
    /* -webkit-clip-path: polygon(0% 5%, 100% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0% 30px, 100% 0, 100% 100%, 0% 100%); */
    .ImgWrapper {
        box-sizing: border-box;
        max-width: 300px;
        height: 300px;
        width: 100%;
        display: flex;
        /* padding: 20px; */
        justify-content: center;
        background-color: #fff;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        overflow: hidden;
        /* border-bottom: 2px solid #5e6572; */
        @media only screen and (max-width: 768) {
            display: none;
        }
    }
    .IMG {
        /* height: auto; */
        width: auto;
        /* height: 300px;
        width: 300px; */
    }
    i {
        margin-top: 15px;
    }
    .ButtonWrapper {
        width: 100%;
        display: flex;
        align-self: flex-end;
        margin-top: 15px;
    }
    .ButtonWrapperSmall {
        @media only screen and (max-width: 768px) {
            flex-direction: column;
        }
    }
    .SectionTitle {
        max-width: 800px;
        width: 100%;
        margin: 0 auto;
        /* font-size: 2rem; */
        font-weight: 400;
    }
    .SectionTitle2 {
        margin-top: 20px;
    }
    .projectSmallWrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .ProjectWrapper {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        @media (max-width: 900px) {
            flex-direction: column;
        }
    }
    .Project {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        background-color: #eef1ef;
        max-width: 800px;
        width: 100%;
        margin: 5px 0 30px;
        border-radius: 4px;
        animation: 2s ${fadeInAnimation};
        /* box-shadow: 2px 2px 4px gray; */
    }
    .projectSmall {
        width: 390px;
    }

    .content {
        box-sizing: border-box;
        display: flex;
        max-width: 500px;
        width: 100%;
        font-weight: 400;
        flex-direction: column;
        justify-content: space-between;
        font-size: 1rem;
        padding: 10px;
        /* width: 100%;
        max-height: 400px;
        height: 100%; */
        /* background-color: #eef1ef; */
        color: #333;
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

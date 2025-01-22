import React from 'react';
import Fade from 'react-reveal/Fade';

function SmallProjectCard({ name, description, siteUrl, githubUrl }) {
    return (
        <Fade>
            <div className="flex items-start justify-between bg-[#eef1ef] w-[390px] my-[5px] mb-[30px] rounded animate-fadeIn">
                <div className="box-border flex w-full font-normal flex-col justify-between p-6 text-gray-700">
                    <div>
                        <h2 className="text-4xl font-semibold text-gray-900 mb-4">{name}</h2>
                        <p className="text-2xl mb-4 leading-relaxed">{description}</p>
                    </div>
                    <div className="w-full flex self-end mt-6 md:flex-row flex-col gap-4">
                        {siteUrl && (
                            <a className="btn text-xl bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
                                href={siteUrl}
                                target="_blank"
                                rel="noopener noreferrer">
                                Visit Site
                            </a>
                        )}
                        {githubUrl && (
                            <a className="btn text-xl bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors"
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer">
                                View Code
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default SmallProjectCard; 
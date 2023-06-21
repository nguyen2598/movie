import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { VscMute, VscUnmute } from 'react-icons/vsc';
import styled from 'styled-components';
export default function Intro() {
    const [isMuted, setIsMuted] = useState(0);

    return (
        <IntroContainer>
            <ReactPlayer
                playing={true}
                loop={true}
                width="100%"
                height="100%"
                volume={1}
                muted={!isMuted}
                url="https://vimeo.com/579450739"
                className="videoIntro"
            />
            <div className="infoIntro">
                <h1 className="headingIntro">Netflix “Alien”</h1>
                <p className="overviewIntro">
                    Netflix "Alien" Composer - Kari Steinert Orchestrator - Louis Robert King Engineer - Roy Hendrickson
                    Producer - John "Scrapper" Sneider
                </p>
            </div>
            <div className="btnVolume" onClick={() => setIsMuted((prev) => !prev)}>
                {isMuted ? <VscUnmute /> : <VscMute />}
            </div>
            <div className="fadeBottom"></div>
        </IntroContainer>
    );
}

const IntroContainer = styled.div`
    background-color: var(--color-background);
    position: relative;
    color: var(--color-white);
    padding-top: 56%;

    .videoIntro {
        position: absolute;
        top: 0;
        left: 0;
    }

    .infoIntro {
        position: absolute;
        top: 140px;
        left: 30px;

        @media screen and (max-width: 800px) {
            top: 120px;
            left: 25px;
        }

        @media screen and (max-width: 600px) {
            top: 100px;
            left: 15px;
        }

        .headingIntro {
            font-size: 60px;
            transition: all 0.3s ease;

            @media screen and (max-width: 800px) {
                font-size: 40px;
            }
            @media screen and (max-width: 600px) {
                font-size: 28px;
            }
        }

        .overviewIntro {
            max-width: 560px;
            width: 100%;
            line-height: 1.3;
            padding-top: 25px;
            font-size: 18px;

            @media screen and (max-width: 800px) {
                font-size: 16px;
            }

            @media screen and (max-width: 600px) {
                font-size: 14px;
            }
        }
    }

    .btnVolume {
        position: absolute;
        height: 40px;
        width: 40px;
        border: 1px solid var(--color-white);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 5%;
        top: 50%;
        transform: translateY(-50%);
        font-size: 26px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            color: #fff;
            transform: translateY(-50%) scale(1.2);
            background-color: rgba(255, 255, 255, 0.18);
        }

        @media screen and (max-width: 800px) {
            height: 30px;
            width: 30px;
            font-size: 18px;
        }

        @media screen and (max-width: 600px) {
            height: 20px;
            width: 20px;
            font-size: 14px;
        }
    }
    .fadeBottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100px;
        background-image: linear-gradient(
            180deg,
            transparent,
            rgba(15, 15, 15, 0.6) 40%,
            rgb(17, 17, 17),
            rgb(17, 17, 17)
        );
    }
`;

import NetflixLogo from '../../assets/image/Netflix-logo.png';
import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useScrollY } from '../customHook';

function Navbar(props) {
    const [scrollY] = useScrollY();

    return (
        <Navigation
            style={scrollY < 200 ? { backgroundColor: 'transparent' } : { backgroundColor: 'var(--color-background)' }}
        >
            <div className="navContainer">
                <div className="logo">
                    <img src={NetflixLogo} alt="" />
                </div>
                <div className="navSearch">
                    <BiSearch className="iconSearch" />
                    <input type="text" placeholder="Phim tìm kiếm" />
                </div>
            </div>
        </Navigation>
    );
}
export default Navbar;

const Navigation = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    transition-timing-function: ease-in;
    transition: all 1s;
    z-index: 1200;

    @media only screen and (max-width: 600px) {
        height: 100px;
    }

    .navContainer {
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 100%;

        @media only screen and (max-width: 600px) {
            flex-direction: column;
        }

        .logo {
            width: 120px;
            cursor: pointer;
            img {
                width: 100%;
            }
        }

        .navSearch {
            color: var(--color-white);
            margin-right: 20px;
            display: flex;
            justify-content: flex-end;
            position: relative;

            &:hover .iconSearch {
                color: #fff;
            }

            .iconSearch {
                position: absolute;
                top: 0;
                left: 0;
                width: 20px;
                height: 20px;
                color: #bbb;
                transform: translate(5px, 50%);
                pointer-events: none;
            }
            input {
                width: 0;
                background-color: transparent;
                padding: 10px;
                font-size: 14px;
                border: 1px solid transparent;
                outline: none;
                color: #ff6600;
                opacity: 1;
                cursor: pointer;
                transition: all 0.5s;

                &::placeholder {
                    color: #ff6600;
                }

                &:focus {
                    padding-left: 32px;
                    width: 300px;
                    border: 1px solid #fff;
                    cursor: auto;
                    border-radius: 4px;
                }
            }
        }
    }
`;

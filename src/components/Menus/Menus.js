import React from 'react';
import { RiNetflixFill } from 'react-icons/ri';
import { BsStarFill } from 'react-icons/bs';
import { FaTheaterMasks } from 'react-icons/fa';
import { GiAlienFire, GiNinjaHeroicStance, GiGhost, GiRomanToga, GiBandageRoll } from 'react-icons/gi';
import styled from 'styled-components';
import MenuItem from './MenuItem';
export default function Menus() {
    return (
        <MenusPane>
            <MenuItem name="Netflix" Icon={RiNetflixFill} classIcon="Home" colorItem="#99FF66" to="netflixMovies" />
            <MenuItem name="Trending" Icon={GiAlienFire} classIcon="Trend" colorItem="#FFFF33" to="trendingMovies" />
            <MenuItem name="Top rated" Icon={BsStarFill} classIcon="TopRated" colorItem="#33CCFF" to="topRatedMovies" />
            <MenuItem
                name="Actions Movies"
                Icon={GiNinjaHeroicStance}
                classIcon="Action"
                colorItem="#0099FF"
                to="actionMovies"
            />
            <MenuItem
                name="Comedy Movies"
                Icon={FaTheaterMasks}
                classIcon="Comedy"
                colorItem="#FFFF33"
                to="comedyMovies"
            />
            <MenuItem name="Horror Movies" Icon={GiGhost} classIcon="Ghost" colorItem="#fff" to="horrorMovies" />
            <MenuItem
                name="Romance Movies"
                Icon={GiRomanToga}
                classIcon="Romance"
                colorItem="#66FF00"
                to="romanceMovies"
            />
            <MenuItem
                name="Documentaries"
                Icon={GiBandageRoll}
                classIcon="Document"
                colorItem="#33FFCC"
                to="documentMovies"
            />
        </MenusPane>
    );
}

const MenusPane = styled.div`
    position: fixed;
    top: 20%;
    left: 0;
    width: 46px;
    padding: 4px 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    transform-origin: left center;
    transition: all 0.3s linear;
    overflow: hidden;

    &:hover {
        width: 180px;
        background-color: rgba(0, 0, 0, 0.8);
    }

    .subMenu {
        display: flex;
        align-items: center;
        width: max-content;
        margin-left: 2px;
        padding: 4px 6px;
        cursor: pointer;

        .icon {
            font-size: 30px;
            margin-right: 8px;
        }

        span {
            font-size: 16px;
            font-weight: 400;
            color: rgba(255, 255, 266, 0.6);

            &:hover {
                color: #fff;
            }
        }
    }
`;

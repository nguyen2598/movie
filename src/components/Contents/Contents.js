import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImCircleUp } from 'react-icons/im';
import MoviesRow from './MoviesRow';
import * as ACTIONS from '../store/actions';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
import { useScrollY } from '../customHook';

const scrollToTop = () => {
    scroll.scrollToTop();
};

export default function Contents(props) {
    const dispatch = useDispatch();

    const [scrollY] = useScrollY();
    const {
        NetflixOriginals,
        TrendingMovies,
        TopRatedMovies,
        ActionMovies,
        ComedyMovies,
        HorrorMovies,
        RomanceMovies,
        Documentaries,
    } = useSelector((state) => state.infoMovies);

    useEffect(() => {
        dispatch(ACTIONS.getNetflixOriginals());
        dispatch(ACTIONS.getTrendingMovies());
        dispatch(ACTIONS.getTopRatedMovies());
        dispatch(ACTIONS.getActionMovies());
        dispatch(ACTIONS.getComedyMovies());
        dispatch(ACTIONS.getHorroryMovies());
        dispatch(ACTIONS.getRomanceMovies());
        dispatch(ACTIONS.getDocumentaries());
    }, [dispatch]);
    // console.log(NetflixOriginals);
    return (
        <div>
            <MoviesRow movies={NetflixOriginals} title="Netflix originals" isNetflix={true} idSection="netflixMovies" />
            <MoviesRow movies={TrendingMovies} title="Trending movies" idSection="trendingMovies" />
            <MoviesRow movies={TopRatedMovies} title="Top rated movies" idSection="topRatedMovies" />
            <MoviesRow movies={ActionMovies} title="Action movies" idSection="actionMovies" />
            <MoviesRow movies={ComedyMovies} title="Comedy movies" idSection="comedyMovies" />
            <MoviesRow movies={HorrorMovies} title="Horror movies" idSection="horrorMovies" />
            <MoviesRow movies={RomanceMovies} title="Romance movies" idSection="romanceMovies" />
            <MoviesRow movies={Documentaries} title="Documentaries" idSection="documentMovies" />
            <GoToTop
                onClick={() => scrollToTop()}
                style={{
                    visibility: `${scrollY > 600 ? 'visible' : 'hidden'}`,
                }}
            >
                <ImCircleUp />
            </GoToTop>
        </div>
    );
}
const GoToTop = styled.div`
    position: fixed;
    z-index: 1500;
    right: 70px;
    bottom: 50px;
    font-size: 50px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.5);
    transition: all 0.3s linear;

    &:hover {
        color: rgba(255, 255, 255, 1);
    }

    @media screen and (max-width: 600px) {
        right: 40px;
    }
`;

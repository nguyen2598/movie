import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { SmoothHorizontalScrolling } from '../../utils';
import { useViewport } from '../customHook';
import { useDispatch } from 'react-redux';
import { setMovieDetail } from '../store/actions';

export default function MoviesRow({ movies, title, isNetflix, idSection }) {
    const sliderRef = useRef();
    const movieRef = useRef();

    const [dragDown, setDragDown] = useState(0);
    const [dragMove, setDragMove] = useState(0);
    const [isDrag, setIsDrag] = useState(false);

    const [windowWidth] = useViewport();

    const dispatch = useDispatch();

    const handleSetMovie = (movie) => {
        dispatch(setMovieDetail(movie));
    };

    const handleScrollRight = () => {
        console.log(sliderRef.current.scrollWidth);
        console.log(sliderRef.current.clientWidth);

        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        console.log(maxScrollLeft);
        if (sliderRef.current.scrollLeft < maxScrollLeft) {
            SmoothHorizontalScrolling(
                sliderRef.current,
                250,
                movieRef.current.clientWidth * 2,
                sliderRef.current.scrollLeft,
            );
        }
    };

    const handleScrollLeft = () => {
        if (sliderRef.current.scrollLeft > 0) {
            SmoothHorizontalScrolling(
                sliderRef.current,
                250,
                -movieRef.current.clientWidth * 2,
                sliderRef.current.scrollLeft,
            );
        }
    };

    useEffect(() => {
        if (isDrag) {
            if (dragMove < dragDown) {
                handleScrollRight();
            }
            if (dragMove > dragDown) {
                handleScrollLeft();
            }
        }
    }, [dragDown, dragMove, isDrag]);

    const onDragStart = (e) => {
        setIsDrag(true);
        setDragDown(e.screenX);
    };

    const onDragEnd = (e) => {
        setIsDrag(false);
    };
    const onDragEnter = (e) => {
        setDragMove(e.screenX);
    };

    return (
        /*
        const sliderList = document.querySelector('.slider-list');
let isMouseDown = false;
let startX, scrollLeft;

sliderList.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.pageX - sliderList.offsetLeft;
  scrollLeft = sliderList.scrollLeft;
});

sliderList.addEventListener('mouseleave', () => {
  isMouseDown = false;
});

sliderList.addEventListener('mouseup', () => {
  isMouseDown = false;
});

sliderList.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.pageX - sliderList.offsetLeft;
  const walk = x - startX;
  sliderList.scrollLeft = scrollLeft - walk;
});

        */
        <MoviesRowContainer draggable="false" id={idSection}>
            <h1 className="movieHeading">{title}</h1>
            <MoviesSlider
                ref={sliderRef}
                // draggable="true"
                // onDragStart={onDragStart}
                // onDragEnd={onDragEnd}
                // onDragEnter={onDragEnter}
                draggable="false"
                onMouseDown={onDragStart}
                onMouseUp={onDragEnd}
                onMouseMove={onDragEnter}
                style={
                    movies && movies.length > 0
                        ? {
                              gridTemplateColumns: `repeat(${movies.length}, 
                            ${
                                windowWidth > 1200
                                    ? '360px'
                                    : windowWidth > 992
                                    ? '300px'
                                    : windowWidth > 768
                                    ? '250px'
                                    : '200px'
                            }
                            )`,
                          }
                        : {}
                }
            >
                {movies &&
                    movies.length > 0 &&
                    movies.map((movie, index) => {
                        if (movie.poster_path && movie.backdrop_path !== null) {
                            let imageUrl = isNetflix
                                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                                : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;

                            return (
                                <div
                                    key={index}
                                    className={`movieItem ${isNetflix && 'isNetflix'}`}
                                    ref={movieRef}
                                    draggable="false"
                                    onClick={() => handleSetMovie(movie)}
                                >
                                    <img src={imageUrl} alt="" draggable="false" />
                                    <div className="movieName">{movie.title || movie.name}</div>
                                </div>
                            );
                        }
                    })}
            </MoviesSlider>
            <div className={`btnLeft btnItemMovie ${isNetflix && 'isNetflix'}`} onClick={handleScrollLeft}>
                <MdChevronLeft />
            </div>
            <div className={`btnRight btnItemMovie ${isNetflix && 'isNetflix'}`} onClick={handleScrollRight}>
                <MdChevronRight />
            </div>
        </MoviesRowContainer>
    );
}

const MoviesRowContainer = styled.div`
    background-color: var(--color-background);
    color: var(--color-white);
    padding: 20px 20px 0;
    position: relative;
    width: 100%;
    height: 100%;

    .movieHeading {
        font-size: 18px;
        user-select: none;
    }

    .btnItemMovie {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 20;
        width: 28px;
        height: 28px;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 50%;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.3s linear;

        &:hover {
            color: rgba(0, 0, 0, 0.6);
            background-color: rgba(180, 180, 180, 0.6);
        }

        &:hover svg {
            transform: scale(1.2);
            opacity: 1;
        }

        svg {
            user-select: none;
            opacity: 0.7;
        }

        &.isNetflix {
            width: 40px;
            height: 40px;
            font-size: 36px;
        }
    }

    .btnLeft {
        left: 30px;
    }

    .btnRight {
        right: 30px;
    }
`;

const MoviesSlider = styled.div`
    display: grid;
    gap: 6px;
    transition: all 0.3s linear;
    user-select: none;
    overflow-y: hidden;
    overflow-x: auto;
    padding-top: 28px;
    padding-bottom: 28px;
    scroll-behavior: smooth;

    // custom thanh scroll
    &::-webkit-scrollbar {
        background-color: red;
        height: 1px !important;
        // display: none;
    }
    &::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 10px;
    }
    &:hover .movieItem {
        opacity: 0.5;
    }

    .movieItem {
        transform: scale(1);
        max-width: 400px;
        max-height: 500px;
        width: 100%;
        height: 100%;
        transition: all 0.3s linear;
        user-select: none;
        overflow: hidden;
        border-radius: 6px;
        transform: center left;
        position: relative;
        cursor: pointer;

        &:hover {
            opacity: 1;
            transform: scale(1.1);
            z-index: 10;
        }

        img {
            width: 100%;
            height: 100%;
            object-position: top;
            object-fit: cover;
        }

        .movieName {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 4px;
            text-align: center;
            font-size: 14px;
            background-color: rgba(0, 0, 0, 0.6);
            color: #fff;
        }
    }
`;

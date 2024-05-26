'use client';
import React from 'react';
import MovieList from './MovieList';
import useMovieList from '@/hooks/useMovieList';

const MovieListClient = () => {
    const { data: movies = [] } = useMovieList();

    return (
        <MovieList title="Trending Now" data={movies} />
    );
};

export default MovieListClient;

'use client';
import React from 'react';
import MovieList from './MovieList';
import useFavorites from '@/hooks/useFavorites';

const FavoriteMoviesClient = () => {
    const { data: favoriteMovies = [] } = useFavorites();

    return (
        <MovieList title="My List" data={favoriteMovies} />
    );
};

export default FavoriteMoviesClient;

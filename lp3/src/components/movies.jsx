import React, { Component } from 'react';
import { getMovies  } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService.js';
import MoviesTable from './moviesTable';
import Pagination from './common/pagination';
import { paginate } from '../utills/paginate';
import ListGroup from './common/listGroup';
import _ from 'lodash';

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        sortColumn: { path: 'title', order: 'asc' },
    };

    componentDidMount(){
        const genres = [{_id: '', name: 'All Genres'}, ...getGenres()];
        this.setState({
            movies: getMovies(),
            genres: genres,
        });
    }

    constructor(){
        super();
        this.deleteMovieFun = this.deleteMovieFun.bind(this);
    }

    deleteMovieFun = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies}); /* movies: movies (Key and value is the same hence only movies is writen) */
    }

    getPageData = () => {
        const { pageSize, currentPage, sortColumn, selectedGenre, movies: allMovies } = this.state;
        const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
        const movies = paginate(sorted, currentPage, pageSize);
        return { totalCount: filtered.length, data: movies };
    }

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({
            movies: movies    
        });
    }

    handlePageChange = (page) => {
        // console.log('handlePageChange = ', page);
        this.setState({ currentPage: page });
    }

    handleGenreSelect = genre => {
        // console.log('handleGenreSelect = ', genre);
        this.setState({
            selectedGenre: genre,
            currentPage: 1 
        });
    }

    handleSort = sortColumn => {
        this.setState({ sortColumn });
    }

    render(){
        const moviesLength = this.state.movies.length;
        const { pageSize, currentPage, sortColumn } = this.state;

        if(moviesLength === 0)
            return <p>There are no movies in the Database.</p>;

        const { totalCount, data: movies } = this.getPageData();

        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup // Default Props = textProperty: 'name', valueProperty: '_id'
                        items={this.state.genres} 
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <p>Showing {totalCount} movies in the database.</p>
                    <div className="container">
                        <MoviesTable 
                            movies={movies}
                            onLike={this.handleLike}
                            onDelete={this.deleteMovieFun}
                            onSort={this.handleSort}
                            sortColumn={sortColumn}
                        />
                        <Pagination 
                            itemsCount={totalCount} 
                            pageSize={pageSize} 
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange} 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Movies;
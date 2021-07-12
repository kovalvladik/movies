import React from "react";
import {Movies} from "../components/Movies";
import {Preloader} from "../components/Preloader";
import {Search} from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=iron man`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false})) //, loading:false (  падает в цикл)
    }

    SeachMovies = (str, type = 'all') => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
            type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false})) //, loading:false (  падает в цикл)
    }

    render() {
        const {movies, loading} = this.state
        return <main className={'container content'}>
            <Search SeachMovies={this.SeachMovies}/>
            {loading ? <Preloader/>
             :(<Movies movies={movies}/>)
            }
        </main>
    }
}


export {Main}
import React from "react";
import {render} from "react-dom";
class Search extends React.Component{
    state ={
        search:[],
        type: 'all'
    }
    handleKey = (event) =>{
        if (event.key === 'Enter'){
            this.props.SeachMovies(this.state.search,this.state.type )
        }
    }
   handleFilter = (event)=>{
        this.setState(()=>({type:event.target.dataset.type}),()=>
            this.props.SeachMovies(this.state.search,this.state.type)
        )

   }

    render(){
        return <div className="row">
                <div className="input-field ">
                    <input id="search"
                           type="search"
                           placeholder={'Search'}
                           className="validate"
                           value={this.state.search}
                           onChange={(e)=>this.setState({search:e.target.value })}
                           onKeyDown={this.handleKey}
                    />
                    <button className={'btn search-btn'}
                            onClick={()=>this.props.SeachMovies(this.state.search,this.state.type)}>
                        Search</button>
                    <p>
                        <label>
                            <input className="with-gap"
                                   name="type"
                                   type="radio"
                                   data-type='all'
                                   onChange={this.handleFilter}
                                   checked={this.state.type==='all'}
                            />
                            <span>All</span>
                        </label><label>
                            <input className="with-gap"
                                   name="type"
                                   type="radio"
                                   data-type='movie'
                                   onChange={this.handleFilter}
                                   checked={this.state.type==='movie'}

                            />
                            <span>Movies</span>
                        </label><label>
                            <input className="with-gap"
                                   name="type"
                                   type="radio"
                                   data-type='series'
                                   onChange={this.handleFilter}
                                   checked={this.state.type==='series'}

                            />
                            <span>Series</span>
                        </label>
                    </p>

                </div>
        </div>
    }
}

export {Search}
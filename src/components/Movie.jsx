

function Movie (props){
    const {
        Title,
        Year,
        imdbID,
        Type,
        Poster
    } = props
    return <div>
        <div id={imdbID} className="card movie">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={Poster} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{Title}</span>
                <p>{Year}
                    <span className={'right '}>{Type}</span>
                </p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Card Title<i
                    className="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
        </div>
    </div>

}
export {Movie}
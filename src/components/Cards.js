function Cards(props)
{
    return(
        <div class="card col-3 m-3">
            <img class="card-img-top" src={props.obj.thumbnail} alt="logo" style={{height:"300px"}}/>
            <div class="card-body">
                <h3 class="card-title">{props.obj.title}</h3>
                <p class="card-text">{props.obj.description}</p>
            </div>
        </div>
    )
}
export default Cards;


const NewsItemComponent = (props) => {
    return (
        <>
        {console.log("bhakkk........................................................................")}
            {/* <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src="https://www.reuters.com/resizer/5qvWHw5f9cKlb3T28tBhXn4aNbM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/X4LOAGXLVFIGLKSBWUY7C4NIAU.jpg" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Putin acknowledges Russia's war in Ukraine could be a long one - Reuters</h5>
                        <p className="card-text">Russian President Vladimir Putin has acknowledged that his army could be fighting in Ukraine</p>
                        <a href="https://www.reuters.com/world/europe/putin-acknowledges-russias-war-ukraine-could-be-long-one-2022-12-07/" className="btn btn-primary">Details</a>
                    </div>
            </div> */}
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={props.urlToImage} alt={props.alte}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href={props.url} className="btn btn-primary">Details</a>
                    </div>
            </div>
            </>
            )
}
            export default NewsItemComponent;
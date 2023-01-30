import { useEffect,useState } from "react"
import NewsItemComponent from "./newsItemComponent"
import Spinner from "./spinner"


const NewsItem = () => {
    const [data,setData]=useState([])
    const [countpage,setCount]=useState(1)
    const [loading,setloading]=useState(false)
    let apiurl="https://newsapi.org/v2/everything?q=cricket&apiKey=4cf0ca7f59464714ad700ebe58e6e8cd&page=1";
    // setloading(true)
    
    const fetchdata=()=>{
    fetch(apiurl).then((response)=>{
         return response.json();
    }).then((element)=>{
        let p=element.articles
        setloading(false)
        console.log(p);
        setData(p);

        // p&&p.map((d)=>{
        //     console.log(d)
        // })

    })
}
    useEffect(()=>{
        fetchdata();
    },[])

    function handlenext(){
        console.log("why");
        setCount(countpage+1);
            
        apiurl=`https://newsapi.org/v2/everything?q=cricket&apiKey=4cf0ca7f59464714ad700ebe58e6e8cd&page=${countpage}`;
        fetch(apiurl).then((response)=>{
            return response.json();
       }).then((element)=>{
           let p=element.articles
           console.log(p);
           setData(p);
   
        //    pp.map((d)=>{
        //        console.log(d)
        //    })
   
       })
    }
    function handleprevious(){
        console.log("hello");
        setCount(countpage-1);
        apiurl=`https://newsapi.org/v2/everything?q=cricket&apiKey=4cf0ca7f59464714ad700ebe58e6e8cd&page=${countpage}`;
        fetch(apiurl).then((response)=>{
            return response.json();
       }).then((element)=>{
           let p=element.articles
           console.log(p);
           setData(p);
   
        //    p.map((d)=>{
        //        console.log(d)
        //    })
   
       })
    }
    
    return (
        <>
        {/* {loading && <Spinner/>} */}

            <h3 style={{textAlign:"center"}}>this is newsitem hwere nes to be feed</h3>
            <div className="container my-3">
            <div className="row">
                {data && data.map(user=>(
                    
                    // {console.log(user)};
                    // {console.log("hello")};
                    // {console.log(user.urlToImage,user.title,user.description,user.url)}
                    
                    <div style={{textAlign:"center"}}>
                        
                    <div className="col-md-4"><NewsItemComponent urlToImage={user.urlToImage} url={user.url} description={user.description} title={user.title} alte="hello"/></div>
                    {/* <div classNameName="col-md-4"><NewsItemComponent /></div>
                    <div classNameName="col-md-4"><NewsItemComponent /></div>
                    <div classNameName="col-md-4"><NewsItemComponent /></div>
                    <div classNameName="col-md-4"><NewsItemComponent /></div>
                    <div classNameName="col-md-4"><NewsItemComponent /></div>
                    <div classNameName="col-md-4"><NewsItemComponent /></div> */}
                    </div>
                    
                    

                )

                )
                }
                </div>
                <div className="d-flex justify-content-between">
                <button className="btn btn-primary justify-content-between" type="submit" onClick={handleprevious}  disabled={countpage<=1}>&larr;Previous</button>
                <button className="btn btn-primary justify-content-between " type="submit" onClick={handlenext}>Next &rarr;</button>
                </div>
                </div>
            

            
        </>
    )
}
export default NewsItem
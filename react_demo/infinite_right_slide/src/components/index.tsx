import pic from './logo192.png'

const Detail = (props: any) => {
    return(
        <div style={{height:"auto", width: "100%"}}>
            <p>类目1</p>
            <div style={{overflowX:"auto", height: "auto"}}> 
                <ul style={{display: "flex", width: "max-content", padding: "0"}}>
                {videos()}
                </ul>
            </div> 
        </div>
    )
}

const videos = () => {
    var lis = []
    for (var i=0; i<30; i++){
        lis.push(
            <li style={{width: "50px", height: "50px", marginLeft: "20px", listStyleType: "none"}}>
                <img src={pic} style={{width: "100%", height: "100%"}}></img>
            </li>
        )
    }
    return lis
}

export default Detail
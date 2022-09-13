

const Banner = () =>{
    return(
        <div className="p-5 d-flex justify-content-between align-items-center banner" style={{background:'#fcc646',height:'88vh'}}>
            <div className="banner_left">
                <h5>IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGERS</h5>
                <h1>BURGER</h1>
                <h2>WEEK</h2>
            </div>
            <div className="banner_right">
                <img src="images/img2.png" alt="" />
                <div className="price">
                    <div className="price_border">
                        <h3>$5.49</h3>
                        <h3>ONLY</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
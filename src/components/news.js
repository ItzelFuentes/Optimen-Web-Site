import React from "react";
import Footer from "../layouts/footer";
import "../css/news.css";
import hannover from "../img/news/imgnoti2.png";
import aws from "../img/news/mundo.png";

const News = () => {
  return (
    <div className="center" >
      <div>
        <div class="boxesContainer" style={{  display: "flex",  justifyContent: "center"}}>
          <div class="cardBoxs">
            <div class="card-inno">
              <div class="front-inno">
                <h4>Forum BJXAEROSPACE</h4>
                <img src={hannover} width="170" height="170" />
              </div>
              <div class="back-inno">
                <h2>Forum BJXAEROSPACE</h2>
                <h6>
                  We invite you to participate in the "2nd Business Forum of the
                  Bajìo A.C Aerospace Cluster", follow the conferences, panels,
                  and meetups of the event on our platform and social networks.
                  Click on the link: bjxaerospace.org and Register!
                </h6>
                <div>
                <button>more..</button>
                </div>
              </div>
            </div>
          </div>

          <div class="cardBoxs">
            <div class="card-inno">
              <div class="front-inno">
                <h2>14th Anniversary OPTIMEN</h2>
                <img src={aws} width="200" height="150" />
              </div>
              <div class="back-inno">
                <h2>14th Anniversary OPTIMEN</h2>
                <h6>
                  14 years streamlining global mobility through a passionate
                  software developers team. Congratulations TEAM Optimen!
                </h6>
                <br>
                </br>
                <div>
                <button>more..</button>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
        <div className='card-title'>

        <div className='prim'  style={{  display: "flex", marginTop:"60px",  justifyContent: "center"}}>
          <div>
            <h1 >14th Anniversary OPTIMEN</h1>
             </div>
          <hr></hr>
        <img src={aws} alt="imagen" style={{ marginLeft: "50px",width: "580px", left:"10",height:"360px" }}/>
          </div> 
    </div>
        <br />
        <Footer/>
      </div>
    </div>
 
  );
};

export default News;

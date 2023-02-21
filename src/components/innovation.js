import React from 'react'
import Footer from '../layouts/footer';
import '../App.css';
import hannover from '../img/innovation/Hannover_Messe.png';
import ana from '../img/innovation/ana_avatar_XPrize.jpeg';
import innovation from '../img/innovation/innovation_hub_Optimen.png';
import educate from '../img/innovation/Educate_Optimen.png';
import aws from '../img/innovation/aws_mentefactura.png';


const Innovation = () => {
  return(
<div>
<div className=''>
        <div class="boxesContainer">

            <div class="cardBoxs" >
              <div class="card-inno">
                <div class="front-inno">
                  <h2>Hannover Messe</h2>
                  <img src={hannover} width="200" height="150"/>
                </div>
                  <div class="back-inno">
                    <h2>Hannover Messe</h2>
                    <h6>Optimen family present at " Industrial Transformation Mexico, Hannover Messe "HANNOVER MESSE is the most important international platform and hot spot for industrial transformation - with excellent innovations or unusual products.</h6>
              </div>
            </div>
            </div>

            <div class="cardBoxs">
            <div class="card-inno">
            <div class="front-inno">
            <h2>Ana Avatar XPrize</h2>
            <img src={ana} width="200" height="150"/>
            </div>
            <div class="back-inno">
            <h2>Ana Avatar XPrize</h2>
            <h6>Optimen teamed up with Inbiodroid are working together on ANA Avatar XPRIZE challenge that aims to create an Avatar system that can transport human presence to a remote location in real time.</h6>
            </div>
            </div>
            </div>
            
            

            <div class="cardBoxs">
            <div class="card-inno">
            <div class="front-inno">
            <h2>Innovation Hub</h2>
            <img src={innovation} width="200" height="150"/>
            </div>
            <div class="back-inno">
            <h2>Innovation Hub</h2>
            <h6>Optimen inaugurated its innovation center, a space focus on competencies development for the aeronautical sector.</h6>
            </div>
            </div>
            </div>

            <div class="cardBoxs">
            <div class="card-inno">
            <div class="front-inno">
            <h2>EDUCATE OPTIMEN</h2>
            <img src={educate} width="200" height="150"/>
            </div>
            <div class="back-inno">
            <h2>EDUCATE OPTIMEN</h2>
            <h6>EDUCATE OPTIMEN</h6>
            </div>
            </div>
            </div>
          


            <div class="cardBoxs">
            <div class="card-inno">
            <div class="front-inno">
            <h2>Aws Mentefactura GTO Challenge</h2>
            <img src={aws} width="200" height="150"/>
            </div>
            <div class="back-inno">
            <h2>Aws Mentefactura GTO Challenge</h2>
            <h6>Hackathon organized by the alliance between AWS, Optimen, Educafin, IdeaGTO, SEG and GAP with the purpose that students, Guanajuato talent, will execute innovative projects aimed at improving airport services.</h6>
            </div>
            </div>
            </div>
            <br/>
            <br/>

            </div>
       
      <br/> 
        </div>
        <Footer/>
    </div>
  );
}

export default Innovation

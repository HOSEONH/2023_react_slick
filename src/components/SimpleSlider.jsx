import React from "react";
import Slider from "react-slick";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faHourglass, faCircleUp, faPaperPlane, faFaceSmile } from '@fortawesome/free-regular-svg-icons'


export default function SimpleSlider() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    // 배열을 이용하여 map을 사용해 화면에 출력하기 위함
    const pictures = ['pic1.png', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

    return (
      <div>
        <Slider {...settings}>
          {
            pictures.map((pic)=>(
              <div>
                <img 
                src={require(`../img/${pic}`)} 
                alt="" 
                width={1000}
                height={600}
                style={{margin: "auto"}}
                />
              </div>
            ))
          }
        </Slider>
        <div className="icon">
          <FontAwesomeIcon icon={faBookmark}/>
          <FontAwesomeIcon icon={faHourglass}/>
          <FontAwesomeIcon icon={faCircleUp}/>
          <FontAwesomeIcon icon={faPaperPlane}/>
          <FontAwesomeIcon icon={faFaceSmile}/>
        </div>
      </div>
    );
}

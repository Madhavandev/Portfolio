import React, {useState} from 'react';
import "./Work.css";
import {BsPlusLg} from "react-icons/bs";
import {ImCancelCircle} from "react-icons/im";
import work1 from '../../assets/images/work_img_1.png'
import work2 from '../../assets/images/work_img_2.png'

const Work = () => {
    const [imageModal, setImageModal] = useState(false);
    const [imageSource, setImageSource] = useState("");

    const setImageOnModal = (src) => {
        setImageModal(true);
        setImageSource(src);
    }

  return (
    <div className='work section-p bg-grey' id = "work">
        <div className={imageModal ? "image-box show-image-box" : "image-box"}>
            <div className='image-box-content'>
                <img src = {imageSource} alt = "" />
                <span className='image-box-close-btn' onClick={() => setImageModal(false)}>
                    <ImCancelCircle size = {30} />
                </span>
            </div>
        </div>

        <div className='container'>
            <div className='work-content'>
                <div className='section-title'>
                    <h3 className='text-brown'>latest <span className='text-dark'>works</span></h3>
                    <p className='text'>I offer the right solutions for your digital business.</p>
                </div>

                <div className='work-list grid'>
                                <div className='work-item text-center' onClick = {() => setImageOnModal(work1)}>
                                   <a href="https://madhavandev.github.io/Frontend-eMART/"> 
                                    <img src = {work1} alt = "" />
                                    <span className='work-item-icon'>
                                        <BsPlusLg size = {38} className = "text-brown" />
                                    </span>
                                    </a>
                                </div>
                                <div className='work-item text-center' onClick = {() => setImageOnModal(work2)}>
                                    <img src = {work2} alt = "" />
                                    <span className='work-item-icon'>
                                        <BsPlusLg size = {38} className = "text-brown" />
                                    </span>
                                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work
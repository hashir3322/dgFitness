import React, { useRef, useEffect } from "react";
import './carousel.css';
import Quote from '../../images/Slider/quote.svg';
import VideoBg1 from "../../images/Slider/client2.jpg";
import VideoBg2 from "../../images/Slider/client_img.png";
import playBtn from "../../images/Video/playBtn.png";
import Video1 from "../../images/Slider/Eric_B.mp4";
import Video2 from "../../images/Slider/Geraldine_Y.mp4";
import Video3 from "../../images/Slider/Rania_Y.mp4";

const Carousel = () => {
    let swiperCarousel = useRef(null);
    let counter = 1;
    let totalSlides = 0;

    const vid = useRef(null);
    const control = useRef(null);
    let isVidPlaying = false;
    let display = true;
    
    const vid2 = useRef(null);
    const control2 = useRef(null);
    let isVid2Playing = false;
    let display2 = true;

    const vid3 = useRef(null);
    const control3 = useRef(null);
    let isVid3Playing = false;
    let display3 = true;

    useEffect(()=>{
        swiperCarousel.current.style.transition = "none";
        swiperCarousel.current.style.transform = "translateX(-20%)";
        totalSlides = swiperCarousel.current.children.length
    },[])
    function nextButtonHandler(){
        if (swiperCarousel.current !== null){
            if(counter >= totalSlides -1 ){
                return
            }else{
                swiperCarousel.current.style.transition = "all 300ms ease-out";
                counter++;
                swiperCarousel.current.style.transform = "translateX("+(-20*counter)+"%)";
            }
            videoChecker("next called");
        }
    }
    function prevButtonHandler(){
        if (swiperCarousel.current !== null){
            if(counter <= 0 ){
                return
            }else{
                swiperCarousel.current.style.transition = "all 300ms ease-out";
                counter--;
                swiperCarousel.current.style.transform = "translateX("+(-20*counter)+"%)";
            }
            videoChecker("prev called");
        }
    }

    
    function transitionHandler(){
        if(swiperCarousel.current.children[counter].id === 'last-clone'){
            swiperCarousel.current.style.transition = "none";
            counter = totalSlides - 2;
            swiperCarousel.current.style.transform = "translateX("+(-20*counter)+"%)";
        }else if(swiperCarousel.current.children[counter].id === 'first-clone'){
            swiperCarousel.current.style.transition = "none";
            counter = totalSlides - counter;
            swiperCarousel.current.style.transform = "translateX("+(-20*counter)+"%)";
        }
    }


    function VidControl() {
        if (display === true) {
          if (vid.current !== null) {
                vid.current.play();
                control.current.style.opacity = "0";
                display = false;
                isVidPlaying = true;
            }
    } else if (display !== true) {
        if (vid.current !== null) {
                vid.current.pause();
                control.current.style.opacity = "1";
                display = true;
                isVidPlaying = false;
            }
        }
    }


    function VidControl2() {
        if (display2 === true) {
            if (vid2.current !== null) {
                vid2.current.play();
                control2.current.style.opacity = "0";
                display2 = false;
                isVid2Playing = true;
            }
        } else if (display2 !== true) {
            if (vid2.current !== null) {
                vid2.current.pause();
                control2.current.style.opacity = "1";
                display2 = true;
                isVid2Playing = false;
            }
        }
    }

    function VidControl3() {
        if (display3 === true) {
            if (vid3.current !== null) {
                vid3.current.play();
                control3.current.style.opacity = "0";
                display3 = false;
                isVid3Playing = true;
            }
        } else if (display3 !== true) {
            if (vid3.current !== null) {
                vid3.current.pause();
                control3.current.style.opacity = "1";
                display3 = true;
                isVid3Playing = false;
            }
        }
    }

    function videoChecker(st){
        console.log(st);
        if(isVidPlaying){
            vid.current.currentTime = 0;
            vid.current.pause();
            control.current.style.opacity = "1";
            display = true;
            isVidPlaying = false;
        }
        else if(isVid2Playing){
            vid2.current.currentTime = 0;
            vid2.current.pause();
            control2.current.style.opacity = "1";
            display2 = true;
            isVid2Playing = false;
        }
        else if(isVid3Playing){
            vid3.current.currentTime = 0;
            vid3.current.pause();
            control3.current.style.opacity = "1";
            display3 = true;
            isVid3Playing = false;
        }
    }

return(
    <section className="slider__section">
        <h1 className="slider__title">Your Results are <span className="slider__title--yellow"> our results</span></h1>
        <div className="swiper__container">
            <div className="swiper__wrapper">
                <div className="swiper__carousel" onTransitionEnd={transitionHandler} ref={swiperCarousel}>
                    <div class="swiper__slide slide" id="last-clone">
                        <div class="video__container">
                            <video
                            controls
                            className="slider__video"
                            controlsList="nodownload"
                            >
                                <source src={Video3} type="video/mp4" />
                            </video>
                            <div className="controls__container">
                                <img src={VideoBg2} className="thumbnail" alt="Video Bg" />
                                <div className="play__btn">
                                    <img src={playBtn} alt="Play Btn" />
                                </div>
                            </div>
                        </div>
                        <div class="content">
                            <img src={Quote} alt=""/>
                            <p class="testimonial">
                                AMAZING workout with denis! he is supper cool and he will know exactly how to push you beyond 
                                your limit to make you get the max out of the session.
                            </p>
                            <h2 class="author">
                            Rania
                            </h2>
                        </div>
                    </div>
                    
                    <div className="swiper__slide slide">
                        <div class="video__container" onClick={VidControl}>
                            <video
                            controls
                            className="slider__video v1"
                            ref={vid}
                            controlsList="nodownload"
                            >
                                <source src={Video1} type="video/mp4" />
                            </video>
                            <div className="controls__container" ref={control}>
                                <img src={VideoBg1} className="thumbnail" alt="Video Bg" />
                                <div className="play__btn">
                                    <img src={playBtn} alt="Play Btn" />
                                </div>
                            </div>
                        </div>
                        <div class="content">
                            <img src={Quote} alt="" />
                            <p class="testimonial">
                                AMAZING workout with denis! he is supper cool and he will know exactly how to push you beyond 
                                your limit to make you get the max out of the session. 
                            </p>
                            <h2 class="author">
                            Eric
                            </h2>
                        </div>
                    </div>
                    
                    <div class="swiper__slide slide">
                        <div class="video__container" onClick={VidControl2}>
                            <video
                            controls
                            className="slider__video v2"
                            ref={vid2}
                            controlsList="nodownload"
                            >
                                <source src={Video2} type="video/mp4" />
                            </video>
                            <div className="controls__container" ref={control2}>
                                <img src={VideoBg2} className="thumbnail" alt="Video Bg" />
                                <div className="play__btn">
                                    <img src={playBtn} alt="Play Btn" />
                                </div>
                            </div>
                        </div>
                        <div class="content">
                            <img src={Quote} alt=""/>
                            <p class="testimonial">
                                AMAZING workout with denis! he is supper cool and he will know exactly how to push you beyond 
                                your limit to make you get the max out of the session.
                            </p>
                            <h2 class="author">
                            Geraldine
                            </h2>
                        </div>
                    </div>
                    
                    <div class="swiper__slide slide">
                        <div class="video__container" onClick={VidControl3}>
                            <video
                            controls
                            className="slider__video v3"
                            ref={vid3}
                            controlsList="nodownload"
                            >
                                <source src={Video3} type="video/mp4" />
                            </video>
                            <div className="controls__container" ref={control3}>
                                <img src={VideoBg2} className="thumbnail" alt="Video Bg" />
                                <div className="play__btn">
                                    <img src={playBtn} alt="Play Btn" />
                                </div>
                            </div>
                        </div>
                        <div class="content">
                            <img src={Quote} alt=""/>
                            <p class="testimonial">
                                AMAZING workout with denis! he is supper cool and he will know exactly how to push you beyond 
                                your limit to make you get the max out of the session.
                            </p>
                            <h2 class="author">
                            Rania
                            </h2>
                        </div>
                    </div>

                    <div className="swiper__slide slide" id="first-clone">
                        <div class="video__container">
                            <video
                            controls
                            className="slider__video"
                            controlsList="nodownload"
                            >
                                <source src={Video2} type="video/mp4" />
                            </video>
                            <div className="controls__container">
                                <img src={VideoBg1} className="thumbnail" alt="Video Bg" />
                                <div className="play__btn">
                                    <img src={playBtn} alt="Play Btn" />
                                </div>
                            </div>
                        </div>
                        <div class="content">
                            <img src={Quote} alt="" />
                            <p class="testimonial">
                                AMAZING workout with denis! he is supper cool and he will know exactly how to push you beyond 
                                your limit to make you get the max out of the session. 
                            </p>
                            <h2 class="author">
                            Eric
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="next__btn" onClick={nextButtonHandler}></div>
            <div class="prev__btn" onClick={prevButtonHandler}></div>
        </div>
    </section>
    );
};

export default Carousel;
import React, { useEffect, useRef, useState } from "react";


const Timer=()=>{
    // const [timeUp,setTimeUp]=useState(false);
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval=useRef();

    const startTimer = () =>{
        const countDownDate = new Date('February 18, 2022 18:0:00').getTime();

        interval=setInterval(() => {

            const now = new Date().getTime();
            const distance = countDownDate - now;
            const days=Math.floor(distance/(1000*60*60*24));
            const hours=Math.floor((distance%(1000*60*60*24)/(1000*60*60)));
            const minutes=Math.floor((distance%(1000*60*60))/(1000*60));
            const seconds=Math.floor((distance / 1000) % 60);
            if(distance<0)
            {
                clearInterval(interval.current);
                // setTimeUp(true);
            }else{
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        },1000);

    }
    useEffect(() => {
        let intervalref=null;
        startTimer();
        if(interval.current){
         intervalref=interval.current;
        }
        return()=>{
            clearInterval(intervalref);
        }
      });
    return(
        <section
      id="timer"
      className="relative overflow-hidden lg:mt-12 lg:p-6"
    >
            <div className="container mx-auto lg:mt-24">
                <div className="flex flex-col items-center w-full text-white">
                    {/* { timeUp ?
                        (<div className="text-8xl pb-4">
                            <span>Time's Up</span>
                        </div>) : */}
                        <div className="flex md:items-stretch md:p-10">
                            <div className="flex flex-col items-center counter-cell">
                                <span className="text-4xl md:text-6xl lg:text-7xl p-4 md:p-5 text-pink-400">{('0'+timerDays).slice(-2)}</span>
                                <div className=" w-full text-center p-2 md:p-3 md:text-xl rounded-b-lg" style={{backgroundColor:"#1b141c"}}>
                                    <span className="">Days</span>
                                </div>
                            </div>
                            <span className="text-3xl md:text-8xl px-2 pt-4">:</span>
                            <div className="flex flex-col items-center counter-cell">
                                <span className="text-4xl md:text-6xl lg:text-7xl p-4 md:p-5 text-pink-400">{('0'+timerHours).slice(-2)}</span>
                                <div className=" w-full text-center p-2 md:p-3 md:text-xl rounded-b-lg" style={{backgroundColor:"#1b141c"}}>
                                    <span className="">Hours</span>
                                </div>
                            </div>
                            <span className="text-3xl md:text-8xl px-2 pt-4">:</span>
                            <div className="flex flex-col items-center counter-cell">
                                <span className="text-4xl md:text-6xl lg:text-7xl p-4 md:p-5 text-pink-400">{('0'+timerMinutes).slice(-2)}</span>
                                <div className=" w-full text-center p-2 md:p-3 md:text-xl rounded-b-lg" style={{backgroundColor:"#1b141c"}}>
                                    <span className="">Minutes</span>
                                </div>
                            </div>
                            <span className="text-3xl md:text-8xl px-2 pt-4">:</span>
                            <div className="flex flex-col items-center counter-cell">  
                                <span className="text-4xl md:text-6xl lg:text-7xl p-4 md:p-5 text-pink-400">{('0'+timerSeconds).slice(-2)}</span>
                                <div className=" w-full text-center p-2 md:p-3 md:text-xl rounded-b-lg" style={{backgroundColor:"#1b141c"}}>
                                    <span className="">Seconds</span>
                                </div>
                            </div>
                        </div>
                        {/* } */}
                </div>
                {/* <div className="w-full text-center text-xl content-theme">
                <span>The tech realm is going to reign supreme on 18th February 2022 !</span>
                </div> */}
            </div>
      </section>
    );

}
export default Timer;
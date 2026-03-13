import SideBar from '../Components/SideBar'
import TopBar from '../Components/TopBar'
import { ArrowClockwise, CaretLeft, Pause, Play } from 'phosphor-react'
import { GoBack } from '../Scripts/Navigation'
import { PadStart } from '../Scripts/Strings'
import { useState, useRef, useEffect } from "react";

const TimerTool = () => {
    const IntervalRef = useRef<any | null>(null);

    const [InitialSeconds, SetInitialSeconds] = useState(10);
    const [TotalSeconds, SetTotalSeconds] = useState(10);
    const [IsRunning, SetIsRunning] = useState(false);

    function StartTimer() {
        if (IntervalRef.current) return;

        SetIsRunning(true);

        IntervalRef.current = setInterval(() => {
            SetTotalSeconds((Seconds) => {
                if (Seconds <= 0) {
                    StopTimer();
                    return 0;
                }

                return Seconds - 1;
            });
        }, 1000);
    }

    function StopTimer() {
        if (IntervalRef.current) {
            clearInterval(IntervalRef.current);
            IntervalRef.current = null;
        }

        SetIsRunning(false);
    }

    function ResetTimer() {
        StopTimer();
        SetTotalSeconds(0);
    }

    function AddSeconds(Seconds: number) {
        SetTotalSeconds(Current => {
            const NewTime = Current + Seconds
            SetInitialSeconds(NewTime)
            return NewTime
        })
    }

    function ConvertTime() {
        const Hours = Math.floor(TotalSeconds / 3600);
        const Minutes = Math.floor((TotalSeconds % 3600) / 60);
        const Seconds = TotalSeconds % 60;

        return {
            Hours,
            Minutes,
            Seconds
        };
    }

    const Time = ConvertTime();

    useEffect(() => {
        return () => StopTimer();
    }, []);

    return (
        <div>
            <SideBar selected="Tools"></SideBar>
            <TopBar></TopBar>

            <div className="Main">
                <button className="White-Button" onClick={() => GoBack()}>
                    <CaretLeft weight='bold' size={17} className='Button-Icon'></CaretLeft>
                    Back to Tools
                </button><br></br><br></br><br></br>
                <div className='Tool Center Column'>
                    <h1>Timer</h1>

                    <div className='Row'>
                        <h1 className='Big-Heading'>{PadStart(Time.Hours.toString())}:{PadStart(Time.Minutes.toString())}:{PadStart(Time.Seconds.toString())}</h1>
                    </div>

                    <progress value={TotalSeconds}
                        max={InitialSeconds} className='Timer-Range'></progress>
                    <div className='Row'>
                        <div className='Chip'>+0:30</div>
                        <div className='Chip'>+1:00</div>
                        <div className='Chip'>+5:00</div>
                    </div><br></br><br></br>
                    <div className='Row'>
                        {
                            IsRunning ? (
                                <>
                                    <button onClick={StopTimer}>
                                        <Pause weight='bold' size={18}></Pause>
                                        <p className='Button-Icon'>Pause</p>
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button onClick={StartTimer}>
                                        <Play weight='bold' size={18}></Play>
                                        <p className='Button-Icon'>Play</p>
                                    </button>
                                </>
                            )
                        }
                        <button className='White-Button' onClick={ResetTimer}>
                            <ArrowClockwise weight='bold' size={18}></ArrowClockwise>
                            <p className='Button-Icon'>Restart</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TimerTool;
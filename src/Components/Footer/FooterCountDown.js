import React from 'react'
import './FooterCountDown.css'

const FooterCountDown = () => {

    // function component
    const AnimatedCard = ({ animation, digit }) => {
        return (
            <>
                <div className={`flipCard ${animation}`}>
                    <span>{digit}</span>
                </div>
            </>
        );
    };

    // function component
    const StaticCard = ({ position, digit }) => {
        return (
            <div className={position}>
                <span>{digit}</span>
            </div>
        );
    };

    // function component
    const FlipUnitContainer = ({ digit, shuffle, unit }) => {

        // assign digit values
        let currentDigit = digit;
        let previousDigit = digit + 1;

        // to prevent a negative value
        if (unit !== 'hours') {
            previousDigit = previousDigit === -1
                ? 59
                : previousDigit;
        } else {
            previousDigit = previousDigit === -1
                ? 23
                : previousDigit;
        }

        // add zero
        if (currentDigit < 10) {
            currentDigit = `0${currentDigit}`;
        }
        if (previousDigit < 10) {
            previousDigit = `0${previousDigit}`;
        }

        // shuffle digits
        const digit1 = shuffle
            ? previousDigit
            : currentDigit;
        const digit2 = !shuffle
            ? previousDigit
            : currentDigit;

        // shuffle animations
        const animation1 = shuffle
            ? 'fold'
            : 'unfold';
        const animation2 = !shuffle
            ? 'fold'
            : 'unfold';

        return (
            <div className={'flipUnitContainer'}>
                <StaticCard
                    position={'upperCard'}
                    digit={currentDigit}
                />
                <StaticCard
                    position={'lowerCard'}
                    digit={previousDigit}
                />
                <AnimatedCard
                    digit={digit1}
                    animation={animation1}
                />
                <AnimatedCard
                    digit={digit2}
                    animation={animation2}
                />
                <div className='text-center' style={{color:'white'}}> {unit} </div>
            </div>
        );
    };
    function convertMiliseconds(miliseconds, format) {
        var days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;

        total_seconds = parseInt(Math.floor(miliseconds / 1000));
        total_minutes = parseInt(Math.floor(total_seconds / 60));
        total_hours = parseInt(Math.floor(total_minutes / 60));
        days = parseInt(Math.floor(total_hours / 24));

        seconds = parseInt(total_seconds % 60);
        minutes = parseInt(total_minutes % 60);
        hours = parseInt(total_hours % 24);

        switch (format) {
            case 's':
                return total_seconds;
            case 'm':
                return total_minutes;
            case 'h':
                return total_hours;
            case 'd':
                return days;
            default:
                return { d: days, h: hours, m: minutes, s: seconds };
        }
    };

    // class component
    class FlipClock extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                hours: 0,
                hoursShuffle: true,
                days: true,
                daysShuffle: true,
                minutes: 0,
                minutesShuffle: true,
                seconds: 0,
                secondsShuffle: true,
            };
        }

        componentDidMount() {
            this.timerID = setInterval(
                () => this.updateTime(),
                50
            );
        }

        componentWillUnmount() {
            clearInterval(this.timerID);
        }


        updateTime() {
            // get new date
            const time1 = new Date();
            const time2 = new Date('04/12/2023');
            // get total seconds between the times
            const delta = convertMiliseconds(time2 - time1)
            const time = new Date;


            // // set time units
            const days = delta.d
            const hours = delta.h;
            const minutes = delta.m;
            const seconds = delta.s;


            if (days !== this.state.days) {
                const daysShuffle = !this.state.daysShuffle;
                this.setState({
                    days,
                    daysShuffle
                });
            }
            // on hour chanage, update hours and shuffle state
            if (hours !== this.state.hours) {
                const hoursShuffle = !this.state.hoursShuffle;
                this.setState({
                    hours,
                    hoursShuffle
                });
            }
            // on minute chanage, update minutes and shuffle state
            if (minutes !== this.state.minutes) {
                const minutesShuffle = !this.state.minutesShuffle;
                this.setState({
                    minutes,
                    minutesShuffle
                });
            }
            // on second chanage, update seconds and shuffle state
            if (seconds !== this.state.seconds) {
                const secondsShuffle = !this.state.secondsShuffle;
                this.setState({
                    seconds,
                    secondsShuffle
                });
            }
        }

        render() {

            // state object destructuring
            const {
                days,
                hours,
                minutes,
                seconds,
                daysShuffle,
                hoursShuffle,
                minutesShuffle,
                secondsShuffle
            } = this.state;

            return (
                <div className={'flipClock'}>
                    <FlipUnitContainer
                        unit={'days'}
                        digit={days}
                        shuffle={daysShuffle}
                    />
                    <FlipUnitContainer
                        unit={'hours'}
                        digit={hours}
                        shuffle={hoursShuffle}
                    />
                    <FlipUnitContainer
                        unit={'minutes'}
                        digit={minutes}
                        shuffle={minutesShuffle}
                    />
                    <FlipUnitContainer
                        unit={'seconds'}
                        digit={seconds}
                        shuffle={secondsShuffle}
                    />
                </div>
            );
        }
    }




    return (
        <>
            <FlipClock />

        </>
    )
}

export default FooterCountDown
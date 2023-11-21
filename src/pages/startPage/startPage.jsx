
import AuthBar from './components/AuthBar/AuthBar.jsx';
import TrackLabel from './components/TrackLabel/TrackLabel.jsx';

const startPage = () => {
    return (
        <>
            <div>
                <section>
                    <h1>TRACKUBODY</h1>
                    <h3>Goal tracking App</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Autem id est aperiam nihil temporibus ipsam laborum voluptates architecto provident error.
                    </p>
                </section>
                <AuthBar/>
            </div>
            <div>
                <section>
                    <img src='../../../images/mobx1.jpg' alt='fitnes hero'/>
                    <TrackLabel/>
                    <div>
                        <h3>Set your goals or habits</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, provident?</p>
                    </div>
                    <div>
                        <h3>Keep on your schedule</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, provident?</p>
                    </div>
                    <div>
                        <h3>Fix and share your results</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, provident?</p>
                    </div>
                </section>
            </div>
        </>
    )
}
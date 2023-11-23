
import AuthBar from '../../components/AuthBar/AuthBar';
import TrackLabel from '../../components/TrackLabel/TrackLabel';

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
                    <img src='https://www.pexels.com/ru-ru/photo/175708/' alt='fitnes hero'/>
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

export default startPage
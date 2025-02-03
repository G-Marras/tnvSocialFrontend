

import './HomePage.css';
import './PostSection/PostSection.jsx';
import ButtonGuestToTheLogin from "./Buttons/ButtonGuestToTheLogin.jsx";
import ProfileSection from "./ProfileSection/ProfileSection.jsx";
import ButtonCreazionePost from "./Buttons/ButtonCreazionePost.jsx";
import {Outlet} from "react-router-dom";


const Loggato = true;


function HomePage() {
    return (
        <div>

            {
                Loggato ? <div>
                    <div className='HomepageHeader'>
                        <h1>Welcome back </h1>
                    </div>
                    <div className='FixedProfile'>
                        <ProfileSection/>
                        <ButtonCreazionePost/>
                    </div>

                </div> : <div>
                    <div className='HomepageHeader'>
                        <h1>Welcome</h1>
                    </div>
                    <div className='FixedProfile'>
                        Per commentare e creare post
                        <br/>
                        <ButtonGuestToTheLogin></ButtonGuestToTheLogin>
                    </div>

                </div>
            }
            <div className='HomepageMain'>
                Qua si caricano i post vari
            </div>
            <Outlet />
        </div>


    )
}

export default HomePage
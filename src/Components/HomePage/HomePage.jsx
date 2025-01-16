import React from 'react';

import './HomePage.css';
import './PostSection/PostSection.jsx';
import './CommentSection/CommentSection.jsx';
import './ProfileSection/ProfileSection.jsx';
import './Buttons/ButtonGuestToTheLogin.jsx';
import './PostSection/PostSection.jsx';
import ButtonGuestToTheLogin from "./Buttons/ButtonGuestToTheLogin.jsx";
import ButtonCreazionePost from "./Buttons/ButtonCreazionePost.jsx";
import ProfileSection from "./ProfileSection/ProfileSection.jsx";

const Loggato = true;


function HomePage() {
    return (
        <div>

            {
                Loggato ? <p>
                    <div className='HomepageHeader'>
                        <h1>Welcome back </h1>
                        <ProfileSection />
                    </div>
                    <ButtonCreazionePost></ButtonCreazionePost>
                </p> : <p>
                    <div className='HomepageHeader'>
                        <h1>Welcome</h1>
                        <ButtonGuestToTheLogin></ButtonGuestToTheLogin>
                    </div>
                </p>
            }
            <div className='HomepageMain'>
                Qua si caricano i post vari
            </div>
        </div>


    )
}

export default HomePage
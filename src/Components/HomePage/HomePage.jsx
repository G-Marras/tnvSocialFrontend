import './HomePage.css'
import './PostSection/PostSection.jsx'
import TokenManagement from "./TokenManagement/TokenManagement.jsx";
import ButtonGuestToTheLogin from "./Buttons/ButtonGuestToTheLogin.jsx"
import ProfileSection from "./ProfileSection/ProfileSection.jsx"
import ButtonCreationPost from "./Buttons/ButtonCreationPost.jsx"
import PostSection from "./PostSection/PostSection.jsx"
import {useState,useEffect} from "react";


function HomePage() {

    const [Logged,setLogged]=useState(null)

    useEffect(() => {
        setLogged(TokenManagement());
    }, []);



    return (
        <div className="HomePageContainer">



            {Logged ?
                <div>
                    <nav className='navigationBar'>
                        <div className='MindShareLogo'>
                            <img className='MindShareLogoPNG' src='MINDSHAREicon.PNG' alt='Logo' />
                            MIND SHARE
                        </div>
                        <div className='FixedProfile'>
                            <ProfileSection/>
                            <ButtonCreationPost/>
                        </div>
                    </nav>
                </div>
                :
                <div>
                    <nav className='navigationBar'>
                    <div className='MindShareLogo'>
                        <img className='MindShareLogoPNG' src='MINDSHAREicon.PNG' alt='Logo' />
                        MIND SHARE
                        </div>

                        <div className='FixedProfile'>
                            To create a post & to write a comment
                            <ButtonGuestToTheLogin></ButtonGuestToTheLogin>
                        </div>
                    </nav>


                </div>
            }
            <div className='HomepageMain'>
                <PostSection/>
            </div>
        </div>


    )
}

export default HomePage
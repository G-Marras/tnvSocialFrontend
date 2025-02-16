import './HomePage.css'
import './PostSection/PostSection.jsx'
import ButtonGuestToTheLogin from "./Buttons/ButtonGuestToTheLogin.jsx"
import ProfileSection from "./ProfileSection/ProfileSection.jsx"
import ButtonCreationPost from "./Buttons/ButtonCreationPost.jsx"
import PostSection from "./PostSection/PostSection.jsx"


const Logged = true





function HomePage() {
    return (
        <div className="HomePageContainer">



            {Logged ?
                <div>
                    <nav className='navigationBar'>
                        <div className='MindShareLogo'>
                            Image here
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
                            Image here
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
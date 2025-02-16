import './HomePage.css'
import './PostSection/PostSection.jsx'
import ButtonGuestToTheLogin from "./Buttons/ButtonGuestToTheLogin.jsx"
import ProfileSection from "./ProfileSection/ProfileSection.jsx"
import ButtonCreationPost from "./Buttons/ButtonCreationPost.jsx"
import PostSection from "./PostSection/PostSection.jsx"


const Logged = false


function HomePage() {
    return (
        <div>
            <nav className='navigationBar'>

            </nav>

            {Logged ?
                <div>
                    <div className='HomepageHeader'>
                        <h1>Welcome back </h1>
                    </div>
                    <div className='FixedProfile'>
                        <ProfileSection/>
                        <ButtonCreationPost/>
                    </div>

                </div>
                :
                <div>
                    <div className='HomepageHeader'>
                        <h1>Welcome</h1>
                    </div>
                    <div className='FixedProfile'>
                        To create a post & to write a comment
                        <br/>
                        <ButtonGuestToTheLogin></ButtonGuestToTheLogin>
                    </div>

                </div>
            }
            <div className='HomepageMain'>
                <PostSection/>
            </div>
        </div>




    )
}

export default HomePage
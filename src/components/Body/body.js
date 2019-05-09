import React from 'react';
import Fishing from '../Assets/Images/fishing.jpg';
import Fishes from '../Assets/Images/schoolOfFishes.jpg';
import Icon from '../Assets/Images/fishIcon.jpg';
import MenInBoat from '../Assets/Images/somaliMenSitting.jpeg';
import ManWithFish from '../Assets/Images/manWithFish.jpeg';
import './body.css';


const body = () => {
    return (
        <div className='container'>
            <div className='detail-and-image'>
                <div className='detail-card'>
                <a name="Home"></a>
                    <div className='title'>
                        <bold>Business background</bold>
                        <hr className='divider'/>
                    </div>
                    <div>
                    East Africa Fishing Company (EAFC) is a private women’s registered fish and seafood company that is owned by 10 women who started the company in 2014 and raised capital through personal funds. The EAFC is close to entering its fourth year of operation. The company has been well received and marketing is now critical to its continued success and future profitability. The basic market need is to offer individuals and families star rated hotels and restaurants as well as fresh, attractive fish and seafood
                    The EAFC will supply its largest sales, via the new fish shop, to local restaurants for their customers. The company will maintain its market through its high-quality products in partnerships with local agents, suppliers, and its own employees. It’s currently operates from its head office located in Kismayo, Jubbaland, Somalia.
                    In addition to selling fish directly to the public and other food outlet businesses in Kismayo as well as  surrounding areas, our company will train women to sell fish using our main fish shop as a base.  Through this training process we will create jobs for women and young people and get quality seafood to higher volumes of consumers.
                    <br/><br/> 
                    </div>
                </div>
                <div className='detail-image-card'>
                    <div>
                        <img src={Fishing} className='fishers' />
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
            <div className='whiteSpace'>
            <img src={Icon} className='icons' />
            <img src={Icon} className='icons' />
            <img src={Icon} className='icons' />
            </div>
            <div className='detail-and-image'>
            <div className='detail-card'>
            <a name="About"></a>
                    <div className='fish-title'>
                        <b>Mission statement:</b>
                        <hr className='divider'/>
                    </div>
                    <div className='mission-statement'>
                     <br/> A private registered fish and seafood company owned by businesswomen.<br/><br/>
                    <b>Vision:</b><br/><br/>
                    The East African Fishing Company was established in response to the need for women empowerment through business investment and welfare uplifting all while educating the large population of neglected women how they  can empower themselves through business opportunities in the fishing sector.
                    Objectives:
                    To provide meaningful work and trusted opportunities to the local women of Jubbaland, Somalia. This will include, but be not be limited to, teaching local women to handle fish, how to cook fish, and educating them on the many nutritional benefits adding fish may have to a woman’s diet. 
                    <br/><br/>
                    <b>Gender mainstreaming:</b><br/><br/>
                    During our initial group formation, at least 55% of our enrolls will be female heads of household. Thus, our future will adequately address gender themes regarding control over resources, ease on labor, and equitable income distributions amongst the most disadvantaged women.
                    </div>
                </div>
                <div className='detail-image-card'>
                    <div>
                        <img src={Fishes} className='fishers' />
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
            <div className='whiteSpace'>
            <img src={Icon} className='icons' />
            <img src={Icon} className='icons' />
            <img src={Icon} className='icons' />
            </div>
            <div className='detail-and-image-for-contact'>
            <div className='footer-images'>
                <img src={ManWithFish} className='contact-detail-image' />
                <img src={MenInBoat} className='contact-detail-image' />
            </div>
            <div className='contact-detail-card'>
            <a name="Contact"></a>
                    <div className='contact-title'>
                        <bold>Contact Us</bold>
                        <hr className='divider'/>
                    </div>
                    <div>
                    Email: hailsudi@gmail.com.<br/>
                    <br/>
                    Phone: (612) 517-7558
                    </div>
                </div>
                {/* <div className='detail-image-card'>
                    <div>
                        <img src={Fishes} className='conatct-detail' />
                    </div>
                    <div>
                        
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default body;
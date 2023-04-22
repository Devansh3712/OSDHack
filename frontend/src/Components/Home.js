import React from 'react'
import simplecloud from './images/simple cloud.png'
import cuteplant from './images/cute plant.png'
import nightcat from './images/night-cat copy.png'
import smiley from './images/smiley.png'
import mountain from './images/mountain-img.png'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <>


            {/* <!-- BOOTSTRAP LIBRARY INSTALLATION --> */}


            {/* <!-- MAIN CSS FILE --> */}


            {/* <!-- TOP CONTAINER --> */}
            <div className="top-container">
                <img className="top-cloud" src={simplecloud} alt="cloud-img" />
                <h1>nasake</h1>
                <h2 id="description">a comfort space for your <br /> mental peace</h2>
                <img className="bottom-cloud" src={simplecloud} alt="cloud-img" />
                <img className="mountain" src={mountain} alt="mountain-img" />
            </div>

            {/* <!-- MIDDLE CONTAINER --> */}
            <br />
            <div className="middle-container">

                <div className="smiley">
                    <img className="smiley-img" src={smiley} alt="barbie-profile-img" />
                    <h2>hello there, fighter.</h2>
                    <p className="smiley-description">As Confucius said, "It does not matter how slowly you go as long as you do not stop." So, just hang in there buddy and you'll see this world in all its glory.</p>
                </div><br />
                <hr />

                <div className="smiley">
                    {/* <!-- <img className="smiley-img" src="images/smiley.png" alt="barbie-profile-img"> --> */}
                    <h1 id="n-logo">n</h1>
                    <h2>about us</h2>
                    <p className="smiley-description">なさけ (nasake) means affection or sympathy in Japanese. Our aim is to help you to get the support you need and deserve. You are not alone in this journey to self- help and fullfilment.</p>
                </div><br />
                <hr />

                <div className="skills">
                    <div className="sleep">
                        <img className="night-cat" src={nightcat} alt="design and dev img" />
                        <h3>Try getting a good night's sleep!</h3>
                        <p>Good sleep improves your brain performance, mood, and health. Not getting enough quality sleep regularly raises the risk of many diseases and disorders. So, stop scrolling and go to sleep!</p>
                    </div>
                    <div className="happy">
                        <img className="cute-plant" src={cuteplant} alt="writing img" />
                        <h3>Be happy like this little planty!</h3>
                        <p>Besides feeling good, positive emotions do good things for our brains and bodies. They lower stress hormones, help ease anxiety and depression, and improve our immune system. Feeling some positive emotions every day has a big effect on our happiness and well-being.</p>
                    </div>
                </div>
                <hr /><br />

                <div className="contact-me">
                    <h2>not feeling so great?</h2><br />
                    <h4>It's alright, everyone has their own ups and downs. Don't worry we've got your back.<br />
                    Click to join our whatsapp support group.</h4>
                    <br /><br />
                    <Link className="btn" to="https://api.whatsapp.com/send?phone=919999666555">JOIN US</Link>
                </div>
            </div>

            {/* <!-- BOTTOM CONTAINER --> */}
            <div className="bottom-container">
                <p className="copyright">© WuShang Clan.</p>
            </div>

        </>
    );
}
export default Home; 
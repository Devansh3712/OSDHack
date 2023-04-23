import React from 'react'
import simplecloud from './images/simple cloud.png'
import cuteplant from './images/cute plant.png'
import nightcat from './images/night-cat copy.png'
import smiley from './images/smiley.png'
import mountain from './images/mountain-img.png'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>


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

            {/* <div oncontextmenu='return false' className='snippet-body'>
                <section className="pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <h3 className="mb-3">Carousel cards title </h3>
                            </div>
                            <div className="col-6 text-right">
                                <Link className="btn btn-primary mb-3 mr-1" to="#carouselExampleIndicators2" role="button" data-slide="prev">
                                    <i className="fa fa-arrow-left"></i>
                                </Link>
                                <Link className="btn btn-primary mb-3 " to="#carouselExampleIndicators2" role="button" data-slide="next">
                                    <i className="fa fa-arrow-right"></i>
                                </Link>
                            </div>
                            <div className="col-12">
                                <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row">

                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Special title treatment</h4>
                                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Special title treatment</h4>
                                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Special title treatment</h4>
                                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">

                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Special title treatment</h4>
                                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Special title treatment</h4>
                                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Special title treatment</h4>
                                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">

                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Special title treatment</h4>
                                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Special title treatment</h4>
                                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Special title treatment</h4>
                                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div> */}
            {/* </body> */}

            {/* <!-- BOTTOM CONTAINER --> */}
            <div className="bottom-container">
                <p className="copyright">© WuShang Clan.</p>
            </div>

        </div>
    );
}
export default Home; 
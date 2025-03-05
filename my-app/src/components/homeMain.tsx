import './../App.css'
import HeroCard from './heroCard'

function HomeMain() {

    return (
        <>
            <main>
                <div className='main-hero'>
                <div className='hero-section container'>
                    <h1>This is <br />Enterprise AI</h1>
                    <p className='hero-tagline'>15 Years of Enterprise AI Success</p>
                    <div className='hero-cards-wrap'>
                        <HeroCard description="C3 Transform 2025:
                Join us for a two-day event and discover how we are reshaping the future of business."
                            linkHref="#"
                            linkText="Register Your Interest" />
                        <HeroCard
                            description="C3 AI and Microsoft Forge
                Strategic Alliance to Accelerate Enterprise AI Adoption"
                            linkHref="#"
                            linkText="Learn More" />
                        <HeroCard description="Jumpstart Your AI Initiatives with 
                the C3 Generative AI Accelerator" linkHref="#" linkText="Register Now" />
                    </div>
                </div>
                </div>
                <div className='section-two container'>
                    <h2>C3 AI Applications</h2>
                    <p>C3 AI provides over 130 turnkey Enterprise AI applications that meet the business-critical needs of global enterprises in manufacturing, financial services, government, utilities, oil and gas, chemicals, agribusiness, defense and intelligence, and more.</p>
                    <div className='customer-cards'>
                        <div className='cust-card'>
                            <div className='cust-img-wrap'>
                            <img src="/images/C3-AI-Holcim-Video-Image.png" alt="" />
                            </div>
                          <div>
                            <img src="/images/Holcim-Logo-White.png" alt="" />
                            <h3>Holcim Redefines the Future of Building with Enterprise AI</h3>
                            <div>
                                <a href="#">Customer Video</a>
                                <a href="#">News Release</a>
                            </div>
                          </div>
                        </div>
                        <div className='cust-card'>
                            <div className='cust-img-wrap'>
                            <img src="/images/C3-AI-Holcim-Video-Image.png" alt="" />
                            </div>
                          <div>
                            <img src="/images/Holcim-Logo-White.png" alt="" />
                            <h3>Holcim Redefines the Future of Building with Enterprise AI</h3>
                            <div>
                                <a href="#">Customer Video</a>
                                <a href="#">News Release</a>
                            </div>
                          </div>
                        </div>
                        <div className='cust-card'>
                            <div className='cust-img-wrap'>
                            <img src="/images/C3-AI-Holcim-Video-Image.png" alt="" />
                            </div>
                          <div>
                            <img src="/images/Holcim-Logo-White.png" alt="" />
                            <h3>Holcim Redefines the Future of Building with Enterprise AI</h3>
                            <div>
                                <a href="#">Customer Video</a>
                                <a href="#">News Release</a>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomeMain

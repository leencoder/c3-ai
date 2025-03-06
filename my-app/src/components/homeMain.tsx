import './../App.css'
import AiTabs from './aiTabs'
import CustomerCard from './customerCard'
import HeroCard from './heroCard'

function HomeMain() {

    return (
        <>
            <main>
                <div className='main-hero'>
                    <div className='hero-section container-two' style={{ paddingBottom: '0' }}>
                        <h1>This is <br />Enterprise AI.</h1>
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
                <div className='section-two section-space'>
                    <div className='container-two'>
                        <h2>C3 AI Applications</h2>
                        <p className='section-desc'>C3 AI provides over 130 turnkey Enterprise AI applications that meet the business-critical needs of global enterprises in manufacturing, financial services, government, utilities, oil and gas, chemicals, agribusiness, defense and intelligence, and more.</p>
                        <div className='customer-cards'>
                            <CustomerCard imgLink='/images/C3-AI-Holcim-Video-Image.png' brandImg='/images/Holcim-Logo-White.png' title='Holcim Redefines the Future of Building with Enterprise AI' />
                            <CustomerCard imgLink='/images/shell_homepage_new.jpg' brandImg='/images/Shell.svg' title='Shell Chooses C3 AI to Digitally Transform Shell' />
                            <CustomerCard imgLink='/images/usairforce-1.png' brandImg='/images/usaf-logo-white.svg' title='U.S. Air Force Increases Aircraft Readiness Using C3 AI Readiness' />
                            <CustomerCard imgLink='/images/koch_homepage_new.jpg' brandImg='/images/Koch_Industries.svg' title='Koch Uses Enterprise AI at Scale' />
                            <CustomerCard imgLink='/images/case-study-conedison.jpg' brandImg='/images/ConEd_clr.svg' title='Enterprise Data Analytics Platform and AMI Operations' />
                            <CustomerCard imgLink='/images/baker-hughes.jpg' brandImg='/images/Baker_Hughes.svg' title='Baker Hughes Uses C3 AI for Digital Transformation of Energy Industry' />
                        </div>
                    </div>
                </div>
                <div className='section-three section-space'>
                    <div className='container-two'>
                        <h2>C3 AI Software</h2>
                        <AiTabs />
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomeMain

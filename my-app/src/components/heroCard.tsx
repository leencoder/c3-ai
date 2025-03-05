import './../App.css'

interface HeroCardProps {
  description: string;
  linkHref: string;
  linkText: string;
}
const HeroCard: React.FC<HeroCardProps>=({ description, linkHref, linkText })=> {

  return (
    <>
      <div className='col'>
        <p>{description}</p>
        <a href={linkHref}>{linkText}</a>
      </div>
    </>
  )
}

export default HeroCard

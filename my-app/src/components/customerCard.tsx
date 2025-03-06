import './../App.css'

interface CustomerCardProps {
    imgLink: string;
    brandImg: string;
    title: string;
}
const CustomerCard: React.FC<CustomerCardProps> = ({ imgLink, brandImg, title }) => {

    return (
        <>
            <div className='cust-card'>
                <div className='cust-img-wrap'>
                    <img src={imgLink} alt="" />
                </div>
                <div className="wrapper">
                    <div className='brand-img-wrap'>
                        <img decoding="async" src={brandImg} />
                    </div>
                    <h3>{title}</h3>
                    <div className="links">
                        <a href="#">Customer Video</a>
                        <a href="#">News Release</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerCard

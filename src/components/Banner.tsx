
interface Props {
    title: string;
    description: string
}


const Banner = ({title, description}: Props) => {
    return (
        <section className="home-hero">
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
              
            </div>
        </section>
    )
}

export default Banner

import { Link } from "react-router-dom";

const ImgCard = () => {
    return (
        <article>
            <section>
                <h4>Common Name</h4>
                <img src="https://placehold.co/100x100" alt="#" />
                <Link to={'/species_sheet'}>
                    <p>Species sheet</p>
                </Link>
                
            </section>
            <section>
                <h3>Location</h3>
            </section>
        </article>
    )
}

export default ImgCard;
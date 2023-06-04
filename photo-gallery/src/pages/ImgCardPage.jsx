import ImgCard from "../components/ImgCard";

const ImgCardPage = () => {
    return (
        <article>
            <section>
                <h2>Image Card Page</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti mollitia adipisci eveniet inventore, eaque ex. Sint sunt dolorum sit qui!</p>
            </section>
            <section>
                <ImgCard />
                <ImgCard />
                <ImgCard />
            </section>
        </article>
    )
}

export default ImgCardPage;
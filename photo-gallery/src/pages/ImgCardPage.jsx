import ImgCard from "../components/ImgCard";

const ImgCardPage = () => {
    return (
        <article>
            <section>
                <h2>Image Card Page</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti mollitia adipisci eveniet inventore, eaque ex. Sint sunt dolorum sit qui!</p>
            </section>
            <section>

                {/* use map to map through our data and display all the cards by category 
                (either plants or animals) this will depend on what the user clicks, if click animals, 
                category should be animal and so on */}
                <ImgCard />
                <ImgCard />
                <ImgCard />
            </section>
        </article>
    )
}

export default ImgCardPage;
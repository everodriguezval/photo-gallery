import "../assets/styles/homepage.css"
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <article>            
            <h1>Natural History Photo Gallery</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia fuga odio officiis repellat sunt nemo laborum? Porro eaque sapiente tempora reiciendis, consequuntur iure molestiae explicabo quibusdam ullam quam voluptate labore dicta libero repudiandae omnis architecto aperiam officiis repellendus! Rem vero doloremque nesciunt ea dignissimos</p>
            <Link to={`/gallery`}>            
                <section className="animal-card">
                    <h2>Animals</h2>
                </section>
            </Link>
            <Link>
                <section className="plant-card">
                    <h2>Plants</h2>               
                </section>
            </Link>
        </article>
    )
}

export default HomePage;
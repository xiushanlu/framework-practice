import './styles.css';

function About(){
    return(
        <div className="bg-amber-50 p-10 sm:flex gap-10">
            <img className="w-1/2 rounded-full m-auto sm:w-1/4 mb-8 sm:mb-0" src="https://phlebotomycareertraining.com/wp-content/uploads/2023/11/default-avatar-photo-placeholder-icon-grey-vector-38519922-e1699300466746.jpg" alt="Placeholder profile image"/>
            <div>
                <h2>About Me</h2>
                <p>Hey! I’m Xiushan — an incoming CS student at UC Berkeley. I build cool things on the web (and sometimes in real life, too).</p>
                <p>When I’m not coding, I’m probably painting, organizing events, or deep in a design rabbit hole.</p>
            </div>
        </div>
    )
}

export default About;
import Card from './Card.tsx';
import './styles.css';

export default function Project(){
    return (
        <section className="bg-amber-50 flex-col md:p-10">
            <h2 className="mb-8 text-center">Projects</h2>
            <div className="grid justify-items-center content-evenly gap-8 md:grid-cols-2 lg:grid-cols-4">
                <Card imagePath="https://adaptcommunitynetwork.org/wp-content/uploads/2022/01/ef3-placeholder-image.jpg" name="Therapicasso" desc="A site built for an art therapy business using Webflow + custom UI work."/>
                <Card imagePath="https://adaptcommunitynetwork.org/wp-content/uploads/2022/01/ef3-placeholder-image.jpg" name="NaVis Bakery" desc="A full branding and web dev project for a cultural community bakery."/>
                <Card imagePath="https://adaptcommunitynetwork.org/wp-content/uploads/2022/01/ef3-placeholder-image.jpg" name="Project 3" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                <Card imagePath="https://adaptcommunitynetwork.org/wp-content/uploads/2022/01/ef3-placeholder-image.jpg" name="Project 4" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            </div>
        </section>
    )
}
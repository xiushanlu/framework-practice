import './styles.css';

export default function Card(props:{[key:string]:string}){
    return (
        <div className="bg-white shadow-md rounded-xl p-6 w-76 lg:w-68">
            <img className="mb-6 rounded-xl shadow-md" src={props.imagePath} alt={`${props.name} project screenshot`}></img>
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
        </div>
    )
}
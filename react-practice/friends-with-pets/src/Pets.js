function Pets(props){
// The Pets component is a simple functional component that renders a JS structure

    return(
        <div className='pet-container'>
{/* It has a <div> with a class name of 'pet-container', representing the container for pet information */}
            <div className='pet-name'>
                <h1>pet name:</h1>
                <h1>{props.info.name}</h1>
            </div>
            <div className='pet-breed'>
                <h1>pet breed:</h1>
                <h1>{props.info.breed}</h1>
            </div>
        </div>
    )
}



export default Pets

// Inside this container, there are two nested <div> elements, each with a class name of 'pet-name' and 'pet-breed' respectively
// For each section, it displays an <h1> heading with text ('pet name:' or 'pet breed:') and another <h1> with the actual pet information obtained from props.info
// The component expects a prop named info, which should be an object containing properties like name and breed
// The pet's name is displayed in the <h1> under 'pet name:', and the pet's breed is displayed under 'pet breed:'
import Pets from './Pets'



function Friends (props){
    const petList = props.data.pets.map(info => {
        return(
                    <Pets 
                    info = {info}
                    />
                )
            })

// This component assumes that props.data contains information about a person, 
// including their name (props.data.name), age (props.data.age), and an array of pets (props.data.pets)
// The map function is then used to iterate over the array of pets and create a list of Pets components, passing each pet's information as props
        

    return(
        <div className='friend-container'>
            <div className='name-age'>
                <h1 className='name'>{props.data.name}</h1>
                <h4 className=' age'>Age: {props.data.age}</h4>
                <h1 className='pet-header'>Pets</h1>
            </div>
            
            {petList}
        </div>
    )
}

export default Friends


// React functional component called Friends.
// This component takes props as an argument and renders information about a person, 
// including their name, age, and a list of pets. The pet information is passed down to another component called Pets.
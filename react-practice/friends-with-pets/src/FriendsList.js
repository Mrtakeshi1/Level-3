import './App.css'
import friends from './Data'
import Friends from './Friends'



function FriendList() {
// Using the map function to create Friends components for each friend's data
  const friendData = friends.map(data =>{
    return(
        <Friends
        data = {data}
        />
    
      )
 
  })
// Returning a div containing the array of Friends components
  return (
    
    <div className="app">
        {friendData}
    </div>
  )
}

export default FriendList

// The FriendList component uses the map function to go through each friend's data in the friends array
// For each friend's data, it creates an instance of the Friends component and passes the data as a prop
// The result is an array of Friends components representing each friend, and this array is wrapped in a <div> with the class name "app."
// Finally, the FriendList component is exported as the default export of the module
import React from 'react'
import {auth} from '../firebase'
import ChatBubble from 'react-chat-bubble';
import TextField from '@mui/material/TextField';
import '../components/CSS/style.css';


const Chat = () => {
  const [newMsg, setNewMsg] = React.useState('')
  const [msgArray,setMsgArray]=React.useState(
    [{
      "type" : 0,
      "image": "cat.jpg",
      "text": "Hello! Good Morning!",
      email:"suiii"
  }, {
      "type": 1,
      "image": "dog.jpg",
      "text": "Hello! Good Afternoon!"
  },{
    "type" : 0,
    "image": "cat.jpg",
    "text": "Hello! Good Morning!"
},{
  "type" : 0,
  "image": "cat.jpg",
  "text": "Hello! Good Morning!"
},{
"type" : 0,
"image": "cat.jpg",
"text": "Hello! Good Morning!"
},{
"type" : 0,
"image": "cat.jpg",
"text": "Hello! Good Morning!"
},{
"type" : 0,
"image": "cat.jpg",
"text": "Hello! Good Morning!"
},{
"type" : 0,
"image": "cat.jpg",
"text": "Hello! Good Morning!"
},{
"type" : 0,
"image": "cat.jpg",
"text": "Hello! Good Morning!"
},{
"type" : 2,
"image": "cat.jpg",
"text": "Hello! Good Morning!"
},{
"type" : 0,
"image": "cat.jpg",
"text": "Hello! Good Morning!"
},{
"type" : 0,
"image": "cat.jpg",
"text": "Hello! Good Morning!"
},
{
"type" : 0,
"image": "cat.jpg",
"text": "Hello! Good Morning!"
},
{
"type" : 0,
"image": "cat.jpg",
"text": "Hello! Good Morning!"
},
{
"type" : 0,
"image": "cat.jpg",
"text": "Hello! Good Morning!"
}]
  )
 
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      let tempData={
        "type" : 0,
        "image": "cat.jpg",
        "text": newMsg,
      }
      let data=[...msgArray,tempData]
      setMsgArray(data)
      setNewMsg("")
      
    }
  }

  return (
    <div className='chat-body' style={{height:'100vh'}}>
      {<ChatBubble style={{width:'500px'}}  messages = {msgArray} />}
      <input value={newMsg} placeholder="Message Here" style={ { position: 'fixed',fontSize:'2em',
      height: '50px', bottom: 0, left: 0, right: 0, zIndex: 9999} } onChange={(event)=>setNewMsg(event.target.value) } onKeyDown={handleKeyDown}  />
    </div>
     
 
   
  )
}

export default Chat
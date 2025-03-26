import './App.css'
import ToDo from './toDo'

function App() {
 return(
  <>
  <h1>React Core Concept</h1>

  <ToDo task="learn react" isDone={true}></ToDo>
  {/* <Person></Person>
  <Sports></Sports>
  <Pet></Pet> */}
  {/* <Student></Student>
  <Person></Person>
  <Devaloper></Devaloper>
  <Devaloper name="mozumder" tech='TALWIND CSS'></Devaloper>
  <Devaloper name="Dipu" tech='CSS'></Devaloper>
  <Devaloper name="Rafi" tech='JS'></Devaloper>
  <Devaloper name="Sabana"  tech='HTML'></Devaloper>
  <Player name="rafi" runs="10"></Player>
  <Player name="TAMIN" runs="5000"></Player>

  <Salami event="Graduation" amount="500" ></Salami>
<Salami></Salami> */}

  </>

  
  
 )

  function Student(){
    return(
     <div className='student'>
      <p>Name:</p>
      <p>Dept:</p>
     </div>

    )
  }


function Salami({event,amount=0}){
    return(
     <div className='student'>
      <p>Salami for:{event}</p>
      <p>Amount:{amount}</p>
     </div>

    )
  }

}
function Devaloper (props){
  console.log(props)
  return(
    
    <div style={{
      border:"2px solid green",
      borderRadius:"20px"

    }}>
      <h2>Devaloper {props.name}</h2>
      <p>techonology {props.tech}</p>
    </div>
  )
}

function Person(){
  const age =17;
  const name="Joli";
  const personStyle = {
    color: "red",
    textAlign:"right"
  }
  return(
    <p id='' title='' style={personStyle}>I am a person: {name} {age}</p>
  )
}

// const {name,runs}={name:"Rafi" , runs:"17"}
function Player ({name,runs}){
  return(
    <div className='student'>
      <h3>Name:{name}</h3>
      <p>Runs:{runs}</p>
    </div>
    
  )
}



function Sports(){
  return(
    <div>
      <h3>Cricket</h3>
      <p>Playing and losing</p>
    </div>
  )
}

export default App

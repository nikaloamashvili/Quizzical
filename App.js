import React from "react"
import Qustion from "./components/Qustion"
import {nanoid} from "nanoid"





export default function App(){
    function toggle(){
    setStart(x=>{return(!x)})    
    }    
    const [qustions, setQustions] = React.useState(null)
    
    const [cans, setcans] = React.useState(0)
    
    const [Start, setStart] = React.useState(false)
    const [End, setEnd] = React.useState(false)
    
    const [rEnd, rsetEnd] = React.useState(false)

let er=false;
        React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => {
                setQustions(data.results.map(z => {
                return  {data:z,rof:false,id:nanoid()} })
                ) 
                    })
                    }, [rEnd])
                    
function checkAns(){
    setcans(x=>(x+1))
}
let qustionsElement 
if(qustions!=null){


    qustionsElement= (qustions).map(qustion => (
        <Qustion 
            props={qustion.data} 
            rof={qustion.rof} 
            id={qustion.id} 
            new={rEnd}
            endo={End}
            fun={checkAns}
        />))

}

function endGame(){
    if(End){
        rsetEnd(x=>(!x));
        setcans(0);
        setEnd(x=>(!x));
    }else{

        setEnd(x=>(!x));

    }
}





    return(
           Start==false? 

        <div className="firstPage">

        <h1 className="firstPageh1">Quizzical</h1>
        <p className="firstPagep">Some description if needed</p>
        <button className="firstPageb" onClick={()=>toggle()}>   <span>Start quiz</span>  </button>
          </div>
:       <div>

        {qustionsElement}
        <div>
        {End?<span> you scored {cans}/5 right ans</span>:null}
        <button className="secPageb" onClick={endGame} >  {End?"new test":"Check answers"}   </button>
        </div>

        </div>
    )
}

// 

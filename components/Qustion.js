import React from "react"
import Answers from "./Answers"
import {nanoid} from "nanoid"


export default function Qustion(props){
    const [answers,setAnswers]=React.useState([])
  
    React.useEffect(()=>{
        
                if(props.endo){
         
           setAnswers(olds => olds.map(ans => {
            if(ans.show2==true){
                            return {...ans, show: true}     
            }else if(ans.real==true){
                return {...ans, show: true}
            }else{
                return ans
            }
        }))
    }else{
                 let arrr=[];
    arrr[Math.floor(Math.random() * (props.props.incorrect_answers.length+1))]={ans:props.props.correct_answer,real:true, show:false, id:props.id,aid:nanoid(),endo:props.endo,show2:false};
        let inum=0;
        for(let i=0;i<props.props.incorrect_answers.length;i++){
        if(arrr[i]==undefined){
            arrr[i]={ans:props.props.incorrect_answers[inum],real:false, show:false, id:props.id,aid:nanoid(),endo:props.endo,show2:false};
            inum++;
        }
    } 
setAnswers(arrr)
    }
        
         
    },[props.endo]);
    //props.new,

    
    
    
        function showw(id) {
        for(let t=0;t<answers.length;t++){
            if(answers[t].aid==id){
                let rid=answers[t].id;
                if(answers[t].show){
                }else{
                    if(answers[t].real){
                        props.fun()
                    }
            setAnswers(olds => olds.map(ans => {
            // return ans.id === rid ? 
            return ans.aid === id ? 
                {...ans, show2: true} :
                {...ans, show2: false}
        }))

                }
            }else{
            }

        }
        
    }
    
            function showw2(id) {
            }
    
    
    

        
        
let answersElement ;
if(answers!=null){
    answersElement = answers.map(answer => (
        <Answers 
            props={answer} 
            fun={showw}     
            fun2={showw2}
        />))
}


        


    
    
    

    return(
        <div className="quss" >
        <h1 className="qus">{props.props.question}</h1>
        <div className="ans">
            {answersElement}
            </div>
        </div>   
    )
}



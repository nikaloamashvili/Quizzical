import React from "react"


export default function Answers(props){
    
    let styles = {
        backgroundColor: ""}

    if(props.props.show){
        if(props.props.real){
            styles={backgroundColor: "#94D7A2"}
        }else{
            styles={backgroundColor: "#F8BCBC"}
        }
    }else{
        if(props.props.show2){
                    styles={backgroundColor: "#D6DBF5"}
        }else{
                    styles={backgroundColor: ""}

        }
    }
      
 
 function all(){
     
 }
 

     return(
        <div className="an" style={styles} onClick={()=>props.fun(props.props.aid)}>        
        <span className="textins">{props.props.ans}</span> 


        </div>
    )
}
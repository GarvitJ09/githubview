

 
import React from "react";
import './style.css';

 

class HomePage extends React.Component{
    state={
        info:[],
        arr:["fabpot","andrew","taylorotwell","egoist","ornicar "]
    }
     

    render(){
        return( 
            <div className="home-page">
        <h3 style={{textAlign:'center'}}>Github Account Details of Some user</h3>
        <table className="table">
        <tr>
            <th>Name</th>
            <th>Followers</th>
            <th>Following</th>
            <th>Email</th>
            <th>Company</th>
        </tr>
            { 
                    this.state.arr.map(function(item,i){
                        //console.log(item)
                        fetch(`https://api.github.com/users/${item}`).then(res=>res.json())
                        .then(data=>{   
                        console.log(data.name) ;
                        <Frame  name={data.name}
                        followers={data.followers}
                        following={data.following}
                        email={data.email}
                        company={data.company} /> 
                        
                    })
        
                    }) 
              }
              </table>
        </div>
        )
    }
}
const Frame = ({name,followers,following,email,company}) => {  
    if(!email)
        email="none"
    if(!company)
        company="none"
    return (  
        <tr>
            <td>{name}</td>
            <td>{followers}</td>
            <td>{following}</td>
            <td>{email}</td>
            <td>{company}</td>
        </tr>
    );
}
export {HomePage}

import React from 'react'
import './style.css'
class GithubProfile extends React.Component{
    state={
        searchWord:'',
        info:[]
    }
    componentDidMount() {
        this.searchWord='GarvitJ09';
        fetch(`https://api.github.com/users/${this.searchWord}`).then(res=>res.json())
        .then(data=>{ 
            this.setState({ info : data });  
        })
      }
     
    render(){  
        const handleSearch=(e)=>{
            this.searchWord=e.target.value;
        }
        const handleSubmit=(e)=>{  
            e.preventDefault();
            fetch(`https://api.github.com/users/${this.searchWord}`).then(res=>res.json())
            .then(data=>{
                if(data["message"]=="Not Found")
                    alert("No user found")
                else
                    this.setState({ info : data }); 
            })
        }
        return(
            <div className="github-profile">
            <form onSubmit={handleSubmit} style={{display:'flex',marginBottom:'10px'}}>
                <div>
                    <input placeholder="github-user" name="github-user" onChange={handleSearch} className="search-box"></input>
                </div>
                <div>
                    <button className="btn-md btn-primary" type="submit">Submit</button>
                </div>
            </form>
            <div className="card" style={{width: '18rem'}} >
            <img className="card-img-top" src={this.state.info.avatar_url} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{this.state.info.login}</h5>
                
                <p className="card-text"> Name: {this.state.info.name} </p>
                <p className="card-text">Email: {this.state.info.email}</p> 
                <p className="card-text">Company: {this.state.info.company}</p>
                <p className="card-text">Followers: {this.state.info.followers}</p>
                <p className="card-text">Following: {this.state.info.following}</p>
                <a href={this.state.info.url} className="btn btn-primary" target="_blank" >Github Profile</a>
            </div>
            </div>
        </div>
        );
    }

}
export {GithubProfile}



import React,{useState,useEffect} from 'react'
import user from '../../Assets/user.png'
import './style.css'

const GithubProfile=()=> {
    const [name,setName]=useState('');
    const [userName,setUsername]=useState('');
    const [followers,setFollowers]=useState('');
    const [following,setFollowing]=useState('');
    const [repos,setRepos]=useState('');
    const [avatar,setAvatar]=useState(`${user}`);
    const [email,setEmail]=useState('');
    const [company,setCompany]=useState('');
    const [url,setUrl]=useState('');
    const [userInput,setUserInput]=useState('GarvitJ09');
    const [error,setError]=useState(null); 
    useEffect(()=>{
        fetch(`https://api.github.com/users/${userInput}`).then(res=>res.json())
        .then(data=>{
            setData(data)
        })

    },[]);
     
 
    const setData=({message,name,login,followers,following,email,html_url,company,public_repos,avatar_url})=>{
        setName(name);
        setUsername(login);
        setFollowers(followers);
        setFollowing(following);
        setRepos(public_repos);
        setAvatar(avatar_url);
        setEmail(email);
        setCompany(company);
        setUrl(html_url);
        setError(message);
    }
    const handleSearch=(e)=>{
        setUserInput(e.target.value);
    }
    const handleSubmit=(e)=>{ 
        if(userInput=='')
            alert("Enter user");
        else if(error=="Not Found"){
            alert("User not found");
        }else{
        e.preventDefault();
        fetch(`https://api.github.com/users/${userInput}`).then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    }
    }

    return (

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
            <img className="card-img-top" src={avatar} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{userName}</h5>
                
                <p className="card-text"> Name: {name} </p>
                <p className="card-text">Email: {email}</p> 
                <p className="card-text">Company: {company}</p>
                <p className="card-text">Followers: {followers}</p>
                <p className="card-text">Following: {following}</p>
                <a href={url} className="btn btn-primary" target="_blank" >Github Profile</a>
            </div>
            </div>
        </div>
    )
}
export {GithubProfile};
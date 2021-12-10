import React,{useState,useEffect} from 'react'
import './style.css';
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

const HomePage=()=> {
    const [name,setName]=useState(''); 
    const [followers,setFollowers]=useState('');
    const [following,setFollowing]=useState(''); 
    const [email,setEmail]=useState('');
    const [company,setCompany]=useState('');
    const [info , setInfo] = useState([]);  
    const arr=["fabpot","andrew","taylorotwell","egoist","ornicar "];

    const fetchBlogs=()=>{
        arr.forEach((item)=>{
            fetch(`https://api.github.com/users/${item}`).then(res=>res.json())
            .then(data=>{
                setInfo(arr=>[...arr , data]);
            })
        })
  }


    useEffect(() => {
        fetchBlogs();
      }, [])
    console.log(info)
    return (
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
            (info.map((data) => (
            <Frame   
                name={data.name}
                followers={data.followers}
                following={data.following}
                email={data.email}
                company={data.company}
            />
            )))
            }
            </table>
        </div>
    )
}
export {HomePage};

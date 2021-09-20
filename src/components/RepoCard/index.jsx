import './style.css'
import { AiFillGithub } from "react-icons/ai";

export default function RepoCard ({repository: { owner, name, description, html_url} }) {
    
    return(
        <div className='card'>
            <div className='card-repo'> 
            <img src={owner.avatar_url} alt={owner.login}/>
            <div className='card-info'>
            <h4>{name}</h4>
            {description ? (
                <p>{description}</p>
            ) : (
                <p>Sem descrição</p>
            )
            }
            </div>
            
            
            </div>
            
            <div className='card-link'>
            <p>Get to Repository page:</p>
            <a href={html_url}>
            <AiFillGithub />
            </a>
                
            </div>
        </div>
    );
}
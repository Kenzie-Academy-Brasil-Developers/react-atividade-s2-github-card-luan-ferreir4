import './style.css'
import RepoCard from '../RepoCard'
export default function Repositories ({ result: { owner, name, description, url } }) {
    
    return(
        <div className='reposContainer'>
            <RepoCard ownerData={owner}repoName={name} repoDscpt={description}/>
        </div> 
    );
}
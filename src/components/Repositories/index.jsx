import './style.css'
import RepoCard from '../RepoCard'

export default function Repositories ({ result }) {
    console.log(result)
    return(
        <div className='reposContainer'>
            <RepoCard result={result}/>
        </div> 
    );
}
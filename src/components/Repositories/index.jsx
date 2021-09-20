import './style.css'
import RepoCard from '../RepoCard'

export default function Repositories ({ resultList }) {
    console.log(resultList)
    return(
        <div className='reposContainer'>
            {resultList.map(repository => <RepoCard repository={repository}/>) }
        </div> 
    );
}
import './style.css'
export default function RepoCard ({ ownerData, repoName, repoDscpt }) {
    
    return(
        <div className='card'>
            <img src={ownerData.avatar_url} alt={ownerData.login}/>
            <h4>{repoName}</h4>
            {repoDscpt ? (
                <p>{repoDscpt}</p>
            ) : (
                <p>Sem descrição</p>
            )
            }
        </div>
    );
}
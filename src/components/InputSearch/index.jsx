import "./style.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function InputSearch({ notFound, searchRepos }) {

  const validate = yup.object().shape({
    repoPath: yup.string().required("Empty field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validate),
  });

  const getRepos = (search) => {
    console.log(search);
    const searchText = search.repoPath;
    const dividedSearch = searchText.split("/");
    searchRepos(dividedSearch[0], dividedSearch[1]);
  };
   
  return (
    <div className="searchContainer">
      <h2>Search for repositories</h2>
      <form className="formSearch" onSubmit={handleSubmit(getRepos)}>
        
        <input type="text" {...register("repoPath")} />
        <div className="alertContainer">
        {errors.repoPath?.message && <small className='alert'>{errors.repoPath.message}</small>}
        {notFound && <small className='alert'>Not found</small>}
        </div>
        
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

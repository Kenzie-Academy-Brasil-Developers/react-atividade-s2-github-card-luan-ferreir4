import "./style.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

export default function InputSearch({ setResult }) {
  const [notFound, setNotFound] = useState(false);
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
  const searchRepos = (user, repo) => {
    fetch(`https://api.github.com/repos/${user}/${repo}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.message) {
          setNotFound(true);
        } else {
          setNotFound(false);
          setResult(response);
        }
      });
  };
  return (
    <div className="searchContainer">
      <form className="formSearch" onSubmit={handleSubmit(getRepos)}>
        <input type="text" {...register("repoPath")} />
        {errors.repoPath?.message && <small>{errors.repoPath.message}</small>}
        {notFound && <small>Not found</small>}
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

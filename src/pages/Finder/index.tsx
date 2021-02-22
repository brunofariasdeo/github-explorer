import React from 'react';
import { useState } from 'react';
import ButtonIcon from '../../core/components/ButtonIcon';
import { makeRequest } from '../../core/utils/request';
import ImageLoader from './components/Loaders/ImageLoader';
import InfoLoader from './components/Loaders/InfoLoader';
import Profile from './components/Profile';
import './styles.scss';

type UserState = {
  avatar_url: string;
  blog: string;
  created_at: string; 
  company: string;
  followers: number;
  following: number;
  html_url: string;
  location: string;
  login: string;
  public_repos: string;
}

const Finder = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isUserFound, setIsUserFound] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    makeRequest({ user: userData.login })
      .then(response => {
        const data = response.data;

        setIsUserFound(true);
        setIsFormSubmitted(true);
        setIsLoading(false);

        setUserData({
          avatar_url: data.avatar_url,
          blog: data.blog,
          company: data.company,
          created_at: data.created_at,
          followers: data.followers,
          following: data.following,
          html_url: data.html_url,
          location: data.location,
          login: data.login,
          public_repos: data.public_repos,
        })
      }).catch(() => {
        setIsFormSubmitted(true);
        setIsLoading(false);
        setIsUserFound(false);
      }
      )
  }

  const [userData, setUserData] = useState<UserState>({
    avatar_url: '',
    blog: '',
    company: '',
    created_at: '',
    followers: 0,
    following: 0,
    html_url: '',
    location: '',
    login: '',
    public_repos: '',
  });

  return (
    <form 
      onSubmit={handleSubmit}
    >
      <div className="finder-container">
        <div className="row finder-content">
          <div className="col-6">
            <h2 className="finder-text-title">
              Encontre um perfil no Github
            </h2>
            <input 
              className="finder-form" 
              onChange={event => setUserData({...userData, login: event.target.value})}
              type="text"   
            />
            <ButtonIcon 
              text="Encontrar"
              type="submit"
            />
          </div>
        </div>
      </div>
      {isLoading ?
        <div className="finder-loader">
          <ImageLoader />
          <InfoLoader />
        </div>        
      :
      isUserFound &&
        <Profile 
          user={userData}
        /> 
      }
      {isFormSubmitted && !isUserFound && !isLoading &&
        <p className="finder-user-not-found">Usuário não encontrado</p>
      } 
      
    </form>
  )
}

export default Finder;
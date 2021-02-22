import React from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from '../../../../core/components/ButtonIcon';
import { User } from '../../../../core/types/User';
import dayjs from 'dayjs';
import './styles.scss';

type Props = {
  user: User;
}

const Profile = (
  {user} : Props
) => {
  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-left">
          <img className="profile-image" src={user.avatar_url} alt="Github profile"/>
          <Link to={{ pathname: user.html_url}} target="_blank">
            <ButtonIcon 
              text="Ver perfil"
              type="button"
            />
          </Link>
        </div>
        <div className="profile-right">
          <ul className="profile-stats">
            <li>
              Repositórios públicos: {user.public_repos}
            </li>
            <li>
              Seguidores: {user.followers}
            </li>
            <li>
              Seguindo: {user.following}
            </li>
          </ul>
          <div className="profile-info">
            <h2 className="profile-info-header">
              Informações
            </h2>
            <ul className="profile-info-content">
            <li>
              Empresa: {user.company}
            </li>
            <li>
              Website/Blog: {user.blog}
            </li>
            <li>
              Local: {user.location}
            </li>
            <li>
              Membro desde: {dayjs(user.created_at).format('DD/MM/YYYY').toString()}
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Profile;
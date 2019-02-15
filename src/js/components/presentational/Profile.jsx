import React from "react";
import style from "./profile.css";
import PropTypes from "prop-types";

const Profile = ({
  name,
  profileImage,
  profileUrl,
  job,
  title,
  description,
  links
}) => {
  const liElems = links.map((l, index) => {
    const time = `${Math.random() + 1.5}s`;
    const delay = 0.2 + index / 20;

    return (
      <li
        key={index}
        style={{ animationDuration: time, animationDelay: delay }}
      >
        <a href={l.url}>
          <img src={l.icon} />
        </a>
      </li>
    );
  });

  const descriptionSplitted = description.split('\n').map((t, i) => {
    return <p key={i} style={{margin: "0px"}}>{t}</p>
  })
  return (
    <div className={style.profileContainer}>
      <aside className={style.profileCard}>
        <header>
          <a href={profileUrl}>
            <img src={profileImage} />
          </a>

          <h1> {name}</h1>
          <h2> {job}</h2>
        </header>

        <div className={style.profileBio}>
          <p>{title}</p>
            {descriptionSplitted}
        </div>

        <ul className={style.profileSocialLinks}>{liElems}</ul>
      </aside>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired
};

export default Profile;

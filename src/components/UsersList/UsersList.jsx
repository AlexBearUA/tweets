import { UserCard } from "../UserCard/UserCard";

import css from "./UsersList.module.scss";

export const UsersList = ({ users }) => {
  return (
    <ul className={css.usersList}>
      {users &&
        users.map(({ user, tweets, followers, avatar, id, following }) => (
          <li key={id}>
            <UserCard
              user={user}
              tweets={tweets}
              followers={followers}
              avatar={avatar}
              id={id}
              following={following}
            />
          </li>
        ))}
    </ul>
  );
};

import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useUpdateUserMutation } from "../../redux/usersAPI";
import { convertNumber } from "../../helpers/convertNumber";
import css from "./UserCard.module.scss";

export const UserCard = ({
  user,
  tweets,
  followers,
  avatar,
  following,
  id,
}) => {
  const [updateUser, { isLoading, isSuccess, isError }] =
    useUpdateUserMutation();

  const handleFollowingStatus = () => {
    updateUser({
      id,
      following: !following,
      followers: !following ? (followers += 1) : (followers -= 1),
    });
  };

  useEffect(() => {
    isSuccess && !following && toast.success(`You are following ${user} now`);
    isSuccess && following && toast.success(`You stoped following ${user}`);
    isError && toast.error(`Ooops, something going wrong...`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError]);

  return (
    <div className={css.userCard}>
      <p className={css.userName}>{user}</p>
      <div className={css.avatarThumb}>
        <img className={css.avatar} src={avatar} alt="avatar" />
      </div>
      <p className={css.cardText}>{convertNumber(tweets)} tweets</p>
      <p className={css.cardText}>{convertNumber(followers)} followers</p>

      {following ? (
        <button
          onClick={handleFollowingStatus}
          disabled={isLoading}
          type="button"
          className={css.followingBtn}
        >
          {isLoading ? <>Changing status...</> : <>Following</>}
        </button>
      ) : (
        <button
          onClick={handleFollowingStatus}
          disabled={isLoading}
          className={css.followBtn}
          type="button"
        >
          {isLoading ? <>Changing status...</> : <>Follow</>}
        </button>
      )}
    </div>
  );
};

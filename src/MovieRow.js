import {ReactComponent as New} from './assets/new.svg';

export default function MovieRow({movie}) {
  return (
    <li>
      <span>{movie.title}</span>
      {movie.addedToday && (
        <New
          data-testid="move-added-today-icon"
          fill="orange"
          width="30"
          height="30"
        />
      )}
    </li>
  );
}

import css from "../Options/Options.module.css";

export default function Options({ onCount, onReset, total }) {
  return (
    <>
      <div className={css.container}>
        <button
          onClick={() => {
            onCount("good");
          }}
          className={css.btn}
        >
          Good
        </button>
        <button
          onClick={() => {
            onCount("neutral");
          }}
          className={css.btn}
        >
          Neutral
        </button>
        <button
          onClick={() => {
            onCount("bad");
          }}
          className={css.btn}
        >
          Bad
        </button>
        {total > 0 && (
          <button onClick={onReset} className={css.btn}>
            Reset
          </button>
        )}
      </div>
    </>
  );
}

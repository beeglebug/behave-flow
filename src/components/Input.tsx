import styles from "./Input.module.css";

type InputProps = {
  value: string;
  label: string;
};

export default function Input({ value, label }: InputProps) {
  return (
    <div className={styles.row}>
      <label className={styles.label}>{label}</label>
      <input type="text" className={styles.input} value={value} />
    </div>
  );
}

import styles from "./HeaderItem.module.css";
import { useRouter } from "next/router";
const HeaderItem = ({ Icon, title }) => {
  const router = useRouter();
  return (
    <div
      className={styles.headerItem}
      onClick={() => {
        if (title === "Home") {
          router.push(`/?recommended`);
        } else if (title === "Trending") {
          router.push(`/?trending`);
        }
      }}
    >
      <Icon className={styles.headerItem__icon} />
      <p>{title}</p>
    </div>
  );
};

export default HeaderItem;

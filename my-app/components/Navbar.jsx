import styles from "../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 24 24"
            fill="orangered"
          >
            <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
          </svg>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>CALL ME!</div>
          <div className={styles.text}>010 9972 0152</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M7.488 24h-.001c-.266 0-.487-.216-.487-.487v-.513c-1.104 0-2-.896-2-2v-13c0-1.104.896-2 2-2h2v-5c0-.552.448-1 1-1h4c.553 0 1 .449 1 1v5h2c1.105 0 2 .896 2 2v13c0 1.104-.895 2-2 2v.488c0 .283-.228.512-.512.512h-.001c-.265 0-.487-.214-.487-.487v-.513h-8v.488c0 .283-.229.512-.512.512m-.488-3h10v-13h-10v13zm2.008-10h-.508c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h7c.277 0 .5.224.5.5s-.223.5-.5.5h-4.532c.262.304.463.665.578 1.003l1.289.003 3.528 3.542-2.833 2.823-3.529-3.543.003-1.476c-.607-.415-1.068-1.314-.996-2.352m3.642 3.271l1.821 1.821-.354.353-1.82-1.82.353-.354zm.684 1.745l-.354.353-1.214-1.214.354-.353 1.214 1.214zm-.154-2.275l1.821 1.821-.353.353-1.821-1.82.353-.354zm-1.572-.726c-.092.274-.333.462-.606.539.042.417.551.6.85.303.281-.278.139-.755-.244-.842m-2.097-2.015c-.053.687.156 1.287.494 1.682l.002-.682 1.003.002c-.189-.434-.466-.774-.764-1.002h-.735zm4.489-5v-3.5c0-.276-.223-.5-.5-.5h-3c-.276 0-.5.224-.5.5v3.5h4z" />
          </svg>
          <li className={styles.listItem}>Menu</li>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z" />
          </svg>
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

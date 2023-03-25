import styles from "./side-menu.module.css";

export default function SideMenu() {
  return (
    <nav className={styles.side_menu}>
      <div className={styles.nav_items}>
        <li>Party</li>
        <li>All Entries & Bills</li>
        <li>Stock</li>
        <li>Item</li>
        <li>Reports</li>
        <li>Manage Staff</li>
        <li>Setting</li>
        <li>Paid Plan</li>
        <li>Help & Support</li>
      </div>
    </nav>
  );
}

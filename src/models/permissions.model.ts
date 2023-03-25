type PermissionType = {
  title: string;
  name: string;
  permission_list: Array<string>;
};

const permissions: Array<PermissionType> = [
  {
    title: "Store Admin Permissions",
    name: "admin",
    permission_list: [
      "View all entries & download reports",
      "Add, edit, delete any type of entry",
      "View total sale, purchase",
      "View all added items, add new item, edit item, delete item",
      "Add new party, view all added parties and their entries",
      "Download & share all reports, bills",
    ],
  },

  {
    title: "Sale Operator Permissions",
    name: "operator",
    permission_list: [
      "View opening stock, remaining stock of all items",
      "Add sale entry, stock out entry",
      "Add new party",
      "View added sale bill and share to party",
    ],
  },

  {
    title: "Sale Purchase Operator Permissions",
    name: "purchase_operator",
    permission_list: [
      "View opening stock, remaining stock of all items",
      "Add sale entry, stock out entry",
      "Add new party",
      "View added sale bill and share to party",
    ],
  },
];

export default permissions;

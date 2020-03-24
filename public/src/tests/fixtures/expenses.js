import moment from "moment";

export default [
  {
    id: "1",
    amount: 195,
    description: "Gum",
    note: "",
    createdAt: moment(0)
  },
  {
    id: "2",
    amount: 1000,
    description: "Rent",
    note: "",
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    amount: 4500,
    description: "Credit Card",
    note: "",
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];

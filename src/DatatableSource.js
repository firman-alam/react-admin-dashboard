// temporary data
export const userCols = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.image} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 200 },
  { field: "age", headerName: "Age", width: 90 },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Jon Snow",
    image:
      "https://images.pexels.com/photos/6743887/pexels-photo-6743887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    status: "active",
    email: "JonSnow@gmail.com",
    age: 20,
  },
  {
    id: 2,
    username: "Jaime Lannister",
    image:
      "https://images.pexels.com/photos/6743887/pexels-photo-6743887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    status: "pending",
    email: "Jaime.Lannister@gmail.com",
    age: 35,
  },
  {
    id: 3,
    username: "Tyrion Lannister",
    image:
      "https://images.pexels.com/photos/6743887/pexels-photo-6743887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    status: "active",
    email: "Tyrion.Lannister@gmail.com",
    age: 30,
  },
  {
    id: 4,
    username: "Daenerys Targaryen",
    image:
      "https://images.pexels.com/photos/6743887/pexels-photo-6743887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    status: "active",
    email: "Dany.Targaryen@gmail.com",
    age: 20,
  },
  {
    id: 5,
    username: "Arya Stark",
    image:
      "https://images.pexels.com/photos/6743887/pexels-photo-6743887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    status: "active",
    email: "NoOne@gmail.com",
    age: 15,
  },
  {
    id: 6,
    username: "Oberyn Martell",
    image:
      "https://images.pexels.com/photos/6743887/pexels-photo-6743887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    status: "passive",
    email: "Red.Viper@gmail.com",
    age: 40,
  },
  {
    id: 7,
    username: "Margaery Tyrell",
    image:
      "https://images.pexels.com/photos/6743887/pexels-photo-6743887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    status: "passive",
    email: "Young.Queen@gmail.com",
    age: 18,
  },
];

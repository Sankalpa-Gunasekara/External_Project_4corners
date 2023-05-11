const MoratuwaTeam = () => {
  const items = [
    {
      name: "Hasitha Chaminda",
      designation: "Engineer",
      contactNumber: "011 2644222",
    },
    {
      name: "T.G.A Eronie",
      designation: "Senior Executive Assistant Engineer",
      contactNumber: "011 2645381",
    },
    {
      name: "Malathie Welaratne",
      designation: "Assistant Engineer",
      contactNumber: "011 2647068",
    },
    {
      name: "K. Sumanthiran",
      designation: "Assistant Engineer",
      contactNumber: "011 2027556 / 071 4311764",
    },
    {
      name: "Gayani Mahawatte",
      designation: "Telecommunication Technical Officer",
      contactNumber: "011 2027554",
    },
    {
      name: "Sasheena Mohomed",
      designation: "IT & Network Officer",
      contactNumber: "011 2027551",
    },
    {
      name: "Kanchana Weerakoon",
      designation: "IT & Network Officer",
      contactNumber: "011 2027577",
    },
    {
      name: "Milroy Jayasinghe",
      designation: "Demonstrator",
      contactNumber: "",
    },
  ];

  return `<div>
            <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Designation</th>
                <th scope="col">Contact Number</th>
              </tr>
            </thead>
            <tbody>
              ${items.map(
                (item) => ` 
                  <tr>
                      <td>${item.name}</td>
                      <td>${item.designation}</td>
                      <td>${item.contactNumber}</td>
                  </tr>
            `
              )}
            </tbody>
          </table>
          </div>
        `;
};

export default MoratuwaTeam;

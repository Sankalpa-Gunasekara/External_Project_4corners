const PeradeniyaTeam = () => {
  const items = [
    {
      name: "Mahinda Hewage",
      designation: "Assistant Engineer",
      contactNumber: "081 2388500",
    },
    {
      name: "Saman Jayasundara",
      designation: "Assistant Engineer",
      contactNumber: "081 2388500",
    },
    {
      name: "Asanka Chaminda",
      designation: "Demonstrator",
      contactNumber: "081 2238850",
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

export default PeradeniyaTeam;

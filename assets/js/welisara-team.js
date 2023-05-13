const WelisaraTeam = () => {
  const items = [
    {
      name: "Asiri Indika",
      designation: "Deputy General Manager",
      contactNumber: "011 2956726",
    },
    {
      name: "Manoj Herath",
      designation: "Engineer",
      contactNumber: "011 2956256",
    },
    {
      name: "Tilani Gunawardena",
      designation: "Engineer",
      contactNumber: "011 2956250",
    },
    {
      name: "Sameera Bandaranayake",
      designation: "Engineer",
      contactNumber: "011 2956026",
    },
    {
      name: "Darshana Bandara",
      designation: "Engineer",
      contactNumber: "011 3605056",
    },
    {
      name: "Dilan Fernando",
      designation: "Engineer",
      contactNumber: "071 6800076",
    },
    {
      name: "Nisansala Karunarathne",
      designation: "Manager",
      contactNumber: "011 2956252",
    },
    {
      name: "Nadie Rohana Bernadge",
      designation: "Senior Executive Assistant Engineer",
      contactNumber: "011 2958056",
    },
    {
      name: "Thushari Senevirathna",
      designation: "Senior Assistant Engineer",
      contactNumber: "011 2957222",
    },
    {
      name: "Pubudu Wijerathna",
      designation: "Assistant Engineer",
      contactNumber: "011 2027878",
    },
    {
      name: "Mohamed Fasley",
      designation: "Telecommunication Technical Officer",
      contactNumber: "011 2956727",
    },
    {
      name: "Kelum Dahanayake",
      designation: "Telecommunication Technical Officer",
      contactNumber: "011 2027869",
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

export default WelisaraTeam;

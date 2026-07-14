import { Link } from "react-router-dom";
import "./ProgramsAdmin.css";

const ProgramList = () => {

  const programs = [
    {
      id: 1,
      title: "Child Education",
      category: "Education",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7"
    },
    {
      id: 2,
      title: "Women Empowerment",
      category: "Women",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
    },
    {
      id: 3,
      title: "Healthcare",
      category: "Health",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef"
    }
  ];

  return (
    <div className="admin-page">

      <div className="page-header">

        <h2>Programs</h2>

        <Link to="/admin/programs/add" className="add-btn">
          + Add Program
        </Link>

      </div>

      <table className="admin-table">

        <thead>

          <tr>
            <th>Image</th>
            <th>Program</th>
            <th>Category</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {programs.map((item) => (

            <tr key={item.id}>

              <td>
                <img src={item.image} alt="" />
              </td>

              <td>{item.title}</td>

              <td>{item.category}</td>

              <td>

                <Link
  to={`/admin/programs/edit/${item.id}`}
  className="edit-btn"
>

Edit

</Link>

                <button className="delete-btn">
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default ProgramList;
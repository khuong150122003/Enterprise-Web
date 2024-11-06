import React, { useState } from "react";
import "./CoordinatorDetail.css";

function CoordinatorDetail({ coordinator, onSave, onCancel }) {
  const [name, setName] = useState(coordinator.name);
  const [email, setEmail] = useState(coordinator.email);
  const [role, setRole] = useState(coordinator.role || "Coordinator");
  const [image, setImage] = useState(coordinator.photo);

  const handleSave = () => {
    onSave({
      ...coordinator,
      name,
      email,
      role,
      photo: image,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Coordinator Detail</h3>
        <div className="avatar">
          <img src={image} alt="Avatar" />
        </div>
        <h4>{name}</h4>
        <form>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Manager">Manager</option>
            <option value="Coordinator">Coordinator</option>
            <option value="Student">Student</option>
          </select>

          <label>Image</label>
          <input type="file" onChange={handleFileChange} />

          <div className="actions">
            <button type="button" className="save-btn" onClick={handleSave}>
              Save
            </button>
            <button type="button" className="cancel-btn" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CoordinatorDetail;

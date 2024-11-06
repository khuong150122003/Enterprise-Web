import React, { useState } from "react";
import Pagination from "../components/Pagination";
import CoordinatorDetail from "../components/CoordinatorDetail";
import "./CoordinatorPage.css";

function CoordinatorPage() {
  const [coordinators, setCoordinators] = useState([
    {
      id: 1,
      name: "Alex John",
      faculty: "Math",
      email: "data@fpt.edu.vn",
      photo: "/img/profile.jpg",
      role: "Coordinator",
    },
    {
      id: 2,
      name: "Sara Smith",
      faculty: "Math",
      email: "sara@fpt.edu.vn",
      photo: "/img/profile.jpg",
      role: "Coordinator",
    },
    {
      id: 3,
      name: "Tuan Nguyen",
      faculty: "Math",
      email: "tuanbao@fpt.edu.vn",
      photo: "/img/profile.jpg",
      role: "Coordinator",
    },
    {
      id: 4,
      name: "Khuong Tran",
      faculty: "Math",
      email: "khuongtn@fpt.edu.vn",
      photo: "/img/profile.jpg",
      role: "Coordinator",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [selectedCoordinator, setSelectedCoordinator] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null); // Biến để quản lý modal xóa

  // Hàm để mở modal chi tiết chỉnh sửa
  const handleEditClick = (coordinator) => {
    setSelectedCoordinator(coordinator);
  };

  // Hàm để lưu lại thông tin đã chỉnh sửa
  const handleSave = (updatedCoordinator) => {
    setCoordinators((prevCoordinators) =>
      prevCoordinators.map((coordinator) =>
        coordinator.id === updatedCoordinator.id
          ? updatedCoordinator
          : coordinator
      )
    );
    setSelectedCoordinator(null);
  };

  // Hàm để hủy chỉnh sửa
  const handleCancel = () => {
    setSelectedCoordinator(null);
  };

  // Hàm để mở modal xác nhận xóa
  const handleDeleteClick = (coordinator) => {
    setDeleteConfirmation(coordinator);
  };

  // Hàm xóa người dùng khỏi danh sách sau khi xác nhận
  const confirmDelete = () => {
    setCoordinators((prev) =>
      prev.filter((coordinator) => coordinator.id !== deleteConfirmation.id)
    );
    setDeleteConfirmation(null);
  };

  // Hàm hủy xóa
  const cancelDelete = () => {
    setDeleteConfirmation(null);
  };

  // Lọc danh sách dựa trên tìm kiếm
  const filteredCoordinators = coordinators.filter((coordinator) =>
    coordinator.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Tính toán dữ liệu cho trang hiện tại
  const totalPages = Math.ceil(filteredCoordinators.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCoordinators.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="coordinator-page">
      <h2>Coordinator List</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>🔍</button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Faculty</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((coordinator) => (
              <tr key={coordinator.id}>
                <td>
                  <img
                    src={coordinator.photo}
                    alt="Profile"
                    className="profile-photo"
                  />
                </td>
                <td>{coordinator.name}</td>
                <td>{coordinator.faculty}</td>
                <td>{coordinator.email}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => handleEditClick(coordinator)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteClick(coordinator)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {/* show detail to edit */}
      {selectedCoordinator && (
        <CoordinatorDetail
          coordinator={selectedCoordinator}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}

      {/* Modal delete */}
      {deleteConfirmation && (
        <div className="modal">
          <div className="modal-content">
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to delete {deleteConfirmation.name}?</p>
            <button className="confirm-delete-btn" onClick={confirmDelete}>
              Delete
            </button>
            <button className="cancel-delete-btn" onClick={cancelDelete}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CoordinatorPage;

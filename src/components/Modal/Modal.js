import React, { useState, useEffect, useRef } from "react";
import "./Modal.css";

export default function Modal() {
  const [modalOpen, setModalOpen] = useState(true);

  const showEditModal = (event) => {
    event.preventDefault();
    setModalOpen(!setModalOpen);
  };

  console.log(modalOpen);

  return (
    modalOpen && (
      <article id="modalWrap">
        <form id="modal">
          <div id="modalTop">
            <span>2022년 12월 30일 대한민국 서울</span>
            <button onClick={showEditModal} type="button">
              X
            </button>
          </div>
        </form>
      </article>
    )
  );
}

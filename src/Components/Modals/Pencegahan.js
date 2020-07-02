import React from "react";

function Pencegahan() {
  return (
    <div className="modal fade" id="pencegahan">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">
              Bagaimana Melakukannya ?
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <img
              src="./img/cegah.JPG"
              style={{ width: "100%" }}
              alt="https://corona.jakarta.go.id/id"
            />
            <div style={{ textAlign: "right" }}>
              <small>Sumber: https://corona.jakarta.go.id/id</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pencegahan;

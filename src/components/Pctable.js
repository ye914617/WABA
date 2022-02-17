import React from "react";

const Pctable = () => {
  return (
    <>
      <div className="pc-table">
        <div className="pc-id single-col">
          <span className="pc-id-title pc-title">ID</span>
          <span className="pc-id-content pc-content">01</span>
          <span className="pc-id-content pc-content even">02</span>
          <span className="pc-id-content pc-content">03</span>
          <span className="pc-id-content pc-content even">04</span>
          <span className="pc-id-content pc-content">05</span>
        </div>
        <div className="pc-user single-col">
          <span className="pc-user-title pc-title">USER NAME</span>
          <span className="pc-user-content pc-content">WABOW</span>
          <span className="pc-user-content pc-content even">FLYDOVE</span>
          <span className="pc-user-content pc-content">WACA</span>
          <span className="pc-user-content pc-content even">FLYFOVE</span>
          <span className="pc-user-content pc-content">WACA</span>
        </div>
        <div className="pc-email single-col">
          <span className="pc-email-title pc-title">EMAIL</span>
          <span className="pc-email-content pc-content">hello@wabow.com</span>
          <span className="pc-email-content pc-content even">
            fltdove@wabow.com
          </span>
          <span className="pc-email-content pc-content">waca@wabow.com</span>
          <span className="pc-email-content pc-content even">
            fltdove@wabow.com
          </span>
          <span className="pc-email-content pc-content">waca@wabow.com</span>
        </div>
        <div className="pc-status single-col">
          <span className="pc-status-title pc-title">STATUS</span>
          <span className="pc-status-content pc-content denied">Denied</span>
          <span className="pc-status-content pc-content approved even">
            Approved
          </span>
          <span className="pc-status-content pc-content denied">Denied</span>
          <span className="pc-status-content pc-content approved even">
            Approved
          </span>
          <span className="pc-status-content pc-content denied">Denied</span>
        </div>
      </div>
    </>
  );
};

export default Pctable;

import { useLocation } from "react-router";
type FlashType = {
  message: string;
  type: "success" | "error" | "info";
};

const Flash = () => {
  const location = useLocation();
  const flash: FlashType | undefined = location.state?.flash;
  console.log("Flash", flash);

  return (
    <>
      {flash && (
        <div
          className={`toast show align-items-center text-bg-primary border-0`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">{flash.message}</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      )}
    </>
  );
};
export default Flash;

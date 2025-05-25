import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import "./Flash.css";

type FlashType = {
  message: string;
  type: "success" | "error" | "info";
};

const FADE_DURATION = 400; // ms
const AUTOHIDE_DELAY = 3000; // ms
const SHOW_DELAY = 300; // 画面遷移後に出すまでの遅延(ms)

const Flash = () => {
  const location = useLocation();
  const flash: FlashType | undefined = location.state?.flash;
  const [show, setShow] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (flash) {
      setIsVisible(true);
      // 画面遷移後に少し待ってから表示
      const showTimer = setTimeout(() => setShow(true), SHOW_DELAY);
      // 一定時間後に非表示
      const hideTimer = setTimeout(
        () => setShow(false),
        SHOW_DELAY + AUTOHIDE_DELAY
      );
      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [flash, location.key]);

  useEffect(() => {
    if (!show && isVisible) {
      const timer = setTimeout(() => setIsVisible(false), FADE_DURATION);
      return () => clearTimeout(timer);
    }
  }, [show, isVisible]);

  if (!flash || !isVisible) return null;

  const bgClass =
    flash.type === "success"
      ? "text-bg-success"
      : flash.type === "error"
      ? "text-bg-danger"
      : "text-bg-primary";

  return (
    <div
      className={`toast shadow align-items-center ${bgClass} border-0 flash-animate${
        show ? " show" : ""
      }`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-bs-config={`{"animation":true,"autohide":true,"delay":${AUTOHIDE_DELAY}}`}
      style={{
        position: "fixed",
        top: 70,
        right: 20,
        zIndex: 9999,
        minWidth: 350,
        maxWidth: 500,
        fontSize: "1.25rem",
        padding: "1.2rem 1.5rem",
      }}
    >
      <div className="d-flex">
        <div className="toast-body">{flash.message}</div>
        <button
          type="button"
          className="btn-close btn-close-white me-2 m-auto"
          aria-label="Close"
          onClick={() => setShow(false)}
        ></button>
      </div>
    </div>
  );
};
export default Flash;

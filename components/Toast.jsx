// components/Toast.jsx
export default function Toast({ message, icon }) {
  return (
    <div className="toast animate-toast-in">
      <span className="toast-icon">{icon}</span>
      <span>{message}</span>
    </div>
  );
}

import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";
import "./Toast.css";

export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <div className="toast-viewport">
      {toasts.map(function ({ id, title, description, variant, ...props }) {
        return (
          <div 
            key={id} 
            className={`toast ${variant === 'destructive' ? 'destructive' : ''}`}
            {...props}
          >
            <div className="toast-content">
              {title && <div className="toast-title">{title}</div>}
              {description && (
                <div className="toast-description">{description}</div>
              )}
            </div>
            <button 
              onClick={() => dismiss(id)} 
              className="toast-close"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        );
      })}
    </div>
  );
}

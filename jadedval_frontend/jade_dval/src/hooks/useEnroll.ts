// hooks/useEnroll.ts
import { useState } from "react";

const useEnroll = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const enroll = async (formData: any) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Enrollment failed");
      }

      const data = await response.json();
      setSuccess(true);
      console.log("Enrollment successful", data);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return {
    enroll,
    loading,
    error,
    success,
  };
};

export default useEnroll;

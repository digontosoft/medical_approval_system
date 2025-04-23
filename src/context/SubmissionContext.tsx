import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import {
  Submission,
  getAllSubmissions,
  addSubmission as addSubmissionService,
  updateSubmissionStatus as updateSubmissionStatusService,
  deleteSubmission as deleteSubmissionService,
} from "../services/submissionService";

interface SubmissionContextType {
  submissions: Submission[];
  refreshSubmissions: () => void;
  addSubmission: (
    submission: Omit<Submission, "id" | "status" | "submittedDate">
  ) => Submission;
  updateSubmissionStatus: (
    id: number,
    status: Submission["status"]
  ) => Submission | null;
  deleteSubmission: (id: number) => boolean;
}

const SubmissionContext = createContext<SubmissionContextType | undefined>(
  undefined
);

export const useSubmissions = () => {
  const context = useContext(SubmissionContext);
  if (!context) {
    throw new Error("useSubmissions must be used within a SubmissionProvider");
  }
  return context;
};

interface SubmissionProviderProps {
  children: ReactNode;
}

export const SubmissionProvider: React.FC<SubmissionProviderProps> = ({
  children,
}) => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  const refreshSubmissions = () => {
    setSubmissions(getAllSubmissions());
  };

  // Initialize submissions on mount
  useEffect(() => {
    refreshSubmissions();
  }, []);

  const addSubmission = (
    submission: Omit<Submission, "id" | "status" | "submittedDate">
  ) => {
    const newSubmission = addSubmissionService(submission);
    setSubmissions((prev) => [...prev, newSubmission]);
    return newSubmission;
  };

  const updateSubmissionStatus = (id: number, status: Submission["status"]) => {
    const updatedSubmission = updateSubmissionStatusService(id, status);
    if (updatedSubmission) {
      setSubmissions((prev) =>
        prev.map((sub) => (sub.id === id ? updatedSubmission : sub))
      );
    }
    return updatedSubmission;
  };

  const deleteSubmission = (id: number) => {
    const isDeleted = deleteSubmissionService(id);
    if (isDeleted) {
      setSubmissions((prev) => prev.filter((sub) => sub.id !== id));
    }
    return isDeleted;
  };

  const value = {
    submissions,
    refreshSubmissions,
    addSubmission,
    updateSubmissionStatus,
    deleteSubmission,
  };

  return (
    <SubmissionContext.Provider value={value}>
      {children}
    </SubmissionContext.Provider>
  );
};

export default SubmissionContext;

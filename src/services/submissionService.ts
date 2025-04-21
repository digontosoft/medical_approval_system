export interface Submission {
  id: number;
  softwareName: string;
  softwareDetails: string;
  contactPerson: string;
  contactNumber: string;
  email: string;
  version: string;
  useCases: string;
  status: 'pending' | 'in_review' | 'approved' | 'rejected';
  submittedDate: string;
}

// Initial data to populate when no data exists in localStorage
const initialSubmissions: Submission[] = [
  {
    id: 1,
    softwareName: "MediTrack Pro",
    softwareDetails: "Patient monitoring system that tracks vital signs and medication schedules",
    contactPerson: "John Doe",
    contactNumber: "+1 (555) 123-4567",
    email: "john.doe@meditrack.com",
    version: "2.1.0",
    useCases: "Hospital patient monitoring, home care, elderly care facilities",
    status: "pending",
    submittedDate: "2023-09-15"
  },
  {
    id: 2,
    softwareName: "DiagnosticAI",
    softwareDetails: "AI-powered diagnostic tool for radiologists",
    contactPerson: "Sarah Johnson",
    contactNumber: "+1 (555) 987-6543",
    email: "sarah@diagnosticai.com",
    version: "3.5.2",
    useCases: "Radiology departments, diagnostic centers",
    status: "approved",
    submittedDate: "2023-08-23"
  },
  {
    id: 3,
    softwareName: "HealthLink Connect",
    softwareDetails: "Patient data sharing platform across healthcare providers",
    contactPerson: "Michael Chen",
    contactNumber: "+1 (555) 456-7890",
    email: "mchen@healthlink.org",
    version: "1.0.8",
    useCases: "Inter-hospital communication, primary care to specialist referrals",
    status: "rejected",
    submittedDate: "2023-09-02"
  },
  {
    id: 4,
    softwareName: "MedScript",
    softwareDetails: "Electronic prescription system with drug interaction warnings",
    contactPerson: "Lisa Garcia",
    contactNumber: "+1 (555) 234-5678",
    email: "lisa@medscript.io",
    version: "4.2.1",
    useCases: "Pharmacies, doctor's offices, hospitals",
    status: "pending",
    submittedDate: "2023-09-20"
  },
  {
    id: 5,
    softwareName: "VitalSync",
    softwareDetails: "Real-time integration of medical devices with EHR systems",
    contactPerson: "David Wilson",
    contactNumber: "+1 (555) 765-4321",
    email: "dwilson@vitalsync.med",
    version: "2.3.4",
    useCases: "ICUs, operating rooms, emergency departments",
    status: "in_review",
    submittedDate: "2023-09-10"
  }
];

// Storage key for localStorage
const STORAGE_KEY = 'medicalSoftwareSubmissions';

/**
 * Initialize the data store
 */
const initializeData = (): void => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialSubmissions));
  }
};

/**
 * Get all submissions
 */
export const getAllSubmissions = (): Submission[] => {
  initializeData();
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
};

/**
 * Add a new submission
 */
export const addSubmission = (submission: Omit<Submission, 'id' | 'status' | 'submittedDate'>): Submission => {
  const submissions = getAllSubmissions();
  
  // Generate a new ID (maximum ID + 1)
  const newId = submissions.length > 0 
    ? Math.max(...submissions.map(s => s.id)) + 1 
    : 1;
  
  // Format today's date as YYYY-MM-DD
  const today = new Date();
  const submittedDate = today.toISOString().split('T')[0];
  
  // Create the new submission with defaults
  const newSubmission: Submission = {
    ...submission,
    id: newId,
    status: 'pending',
    submittedDate
  };
  
  // Update the storage
  const updatedSubmissions = [...submissions, newSubmission];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSubmissions));
  
  return newSubmission;
};

/**
 * Update a submission's status
 */
export const updateSubmissionStatus = (id: number, newStatus: Submission['status']): Submission | null => {
  const submissions = getAllSubmissions();
  
  // Find the submission to update
  const submissionIndex = submissions.findIndex(s => s.id === id);
  
  if (submissionIndex === -1) {
    return null; // Submission not found
  }
  
  // Update the status
  const updatedSubmission = {
    ...submissions[submissionIndex],
    status: newStatus
  };
  
  // Replace the old submission with the updated one
  submissions[submissionIndex] = updatedSubmission;
  
  // Save to storage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
  
  return updatedSubmission;
};

/**
 * Delete a submission
 */
export const deleteSubmission = (id: number): boolean => {
  const submissions = getAllSubmissions();
  
  // Filter out the submission to delete
  const filteredSubmissions = submissions.filter(s => s.id !== id);
  
  // If no submissions were removed, return false
  if (filteredSubmissions.length === submissions.length) {
    return false;
  }
  
  // Save to storage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredSubmissions));
  
  return true;
};

// Initialize data when the service is first imported
initializeData(); 
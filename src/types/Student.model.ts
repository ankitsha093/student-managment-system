import type { Class, House, Section } from "./academics.modal";
// Student Modal -----------------------------------
export type Student = {
  personalInfo: PersonalInfo;
  parentGuardianInfo: ParentGuardianInfo;
  sibling: SiblingInfo;
  addressInfo: AddressInfo;
  transportInfo: TransportInfo;
  hostelInfo: HostelInfo;
  documentInfo: DocumentInfo;
  medicalHistory: MedicalHistory;
  previousSchoolInfo: PreviousSchoolInfo;
  otherInfo: OtherInfo;
};

// Student Modal > Personal Info -----------------------------------
export type Status = "active" | "inactive";
export type Gender = "Male" | "Female";
export type BloodGroup =
  | "A+"
  | "A-"
  | "B+"
  | "B-"
  | "AB+"
  | "AB-"
  | "O+"
  | "O-";

export type Category = "SC" | "ST" | "OBC" | "GEN" | "EWS";

export type PersonalInfo = {
  profileImageUrl: string;
  admissionNumber: string;
  admissionDate: string;
  rollNumber: string;
  status: Status;
  firstName: string;
  lastName: string;
  class: Class;
  section: Section;
  gender: Gender;
  bloodGroup: BloodGroup;
  house: House;
  religion: string;
  category: Category;
  primaryContactNumber: string;
  email: string;
  caste: string;
  motherTongue: string;
  languageKnown: string[];
};

// Student Modal > Parent / Guardian Info -----------------------------------
export type ParentGuardianInfo = {
  father: ParentInfo;
  mother: ParentInfo;
  guardian: GuardianInfo;
};

export type ParentInfo = {
  profileImage: string;
  name: string;
  email: string;
  phoneNumber: string;
  occupation: string;
};

export type GuardianType = "Parents" | "Guardian" | "Others";

export type GuardianInfo =
  | {
      guardianType: "Parents";
    }
  | {
      guardianType: "Guardian" | "Others";
      profileImage: string;
      name: string;
      relation: string;
      phoneNumber: string;
      email: string;
      occupation: string;
      address: string;
    };

// Student Modal > Sibling Info -----------------------------------
export type SiblingInfo = {
  isSiblingStudyingInSameSchool: boolean;
  siblings?: Sibling[];
};

export type Sibling = {
  name: string;
  rollNumber: string;
  admissionNumber: string;
  class: Class;
};

// Student Modal > Address Info -----------------------------------
export type AddressInfo = {
  currentAddress: string;
  permanentAddress: string;
};

// Student Modal > Transport Info -----------------------------------
export type Route = {
  id: string;
  name: string;
};

export type Vehicle = {
  id: string;
  vehicleNumber: string;
};

export type PickupPoint = {
  id: string;
  name: string;
};
export type TransportInfo = {
  isTransportEnabled: boolean;
  route?: Route;
  vehicle?: Vehicle;
  pickupPoint?: PickupPoint;
};

// Student Modal > Hostel Info -----------------------------------
export type Hostel = {
  id: string;
  name: string;
};

export type Room = {
  id: string;
  roomNumber: string;
};
export type HostelInfo = {
  isHostelEnabled: boolean;
  hostel?: Hostel;
  room?: Room;
};

// Student Modal > Document Info -----------------------------------
export type DocumentInfo = {
  medicalConditionDocument?: StudentDocument;
  transferCertificate?: StudentDocument;
};
export type StudentDocument = {
  fileName: string;
  fileUrl: string;
  fileType: string;
  fileSize: number;
};
// Student Modal > Medical Condition -----------------------------------
export type MedicalCondition = "Good" | "Bad" | "Others";
export type MedicalHistory = {
  medicalCondition: MedicalCondition;
  allergies: string[];
  medications: string[];
};
// Student Modal > Previous School Info -----------------------------------
export type PreviousSchoolInfo = {
  schoolName: string;
  address: string;
};

// Student Modal > Other Info -----------------------------------
export type OtherInfo = {
  bankDetails: BankDetails;
  additionalInformation?: string;
};
export type BankDetails = {
  bankName: string;
  branch: string;
  ifscCode: string;
};

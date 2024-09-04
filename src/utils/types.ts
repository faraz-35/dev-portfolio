interface IPersonData {
  firstName: string;
  lastName: string;
  cnic: string;
  passport: string;
  cnicImageFront: string;
  cnicImageBack: string;
  passportImage1: string;
  passportImage2: string;
  ageGroup: "Adult" | "Child";
  roomType: "Double" | "Triple" | "Quad";
}

interface IPackage {
  metadata: {
    isArchived: boolean;
  };
  _id: string;
  packageName: string;
  startDate: string;
  endDate: string;
  totalSeats: number;
  availableSeats: number;
  priceAdult: number;
  priceChild: number;
  createdAt: string;
  updatedAt: string;
  coupon?: string;
}

type Booking = {
  package: IPackage;
  persons: IPersonData[];
  billing: any;
  user?: User;
  _id: string;
  bookingId: string;
  createdAt: string;
};

type Metadata = {
  isArchived: boolean;
};

interface IBankAccount {
  _id?: string;
  bank: string;
  title: string;
  iban: string;
  isActive?: string;
}

interface ITransaction {
  type: "referral" | "cashout" | "payment";
  state: "pending" | "successful" | "unsuccessful";
  date: string;
  transactionProof: string;
  balanceBefore: number;
  balanceAfter: number;
  amount: number;
  bookingId: Booking;
  requestId: string;
}

type Wallet = {
  metadata: Metadata;
  _id: string;
  availableAmount: number;
  pendingCashout: number;
  bankAccounts: IBankAccount[];
  transactions: ITransaction[];
  createdAt: string;
  updatedAt: string;
};

interface ITrackings {
  linkClicks: string[];
  pageViews: string[];
  signups: {
    timestamp: string;
    user: string;
  }[];
  addToCarts: {
    timestamp: string;
    booking: string;
  }[];
  checkouts: {
    timestamp: string;
    booking: string;
  }[];
}

interface ITracking {
  referralId: string;
  commissionPercentage: number;
  affiliateType: "Primary" | "Secondary";
  amountEarned: number;
  trackings: ITrackings;
  metadata: Metadata;
  createdAt?: Date;
  updatedAt?: Date;
}

type User = {
  metadata: Metadata;
  _id: string;
  username?: string;
  email: string;
  password: string;
  mobile?: string;
  address?: string;
  birthDate?: string;
  picture?: string;
  referrer?: string;
  isAffiliate: boolean;
  tripHistory: Booking[];
  createdAt: string;
  updatedAt: string;
  wallet: Wallet;
  tracking?: ITracking;
};

interface ILoginData {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export type { IPersonData, IPackage, User, ILoginData, Booking, ITrackings };

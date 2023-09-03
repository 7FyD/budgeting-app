type User = {
  id: number; // Adjust the type of 'id' as needed
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  name: string | null;
  hashedPassword: string | null;
  budgetId: number;
};

export default User;

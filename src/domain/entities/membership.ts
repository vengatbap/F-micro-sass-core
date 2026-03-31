export interface Membership {
  id: string;
  userId: string;
  tenantId: string;
  role: 'admin' | 'member';
  createdAt: Date;
}
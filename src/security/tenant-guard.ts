export function tenantGuard(tenantId: string, userTenantId: string) {
  if (tenantId !== userTenantId) {
    throw new Error('Access denied');
  }
}
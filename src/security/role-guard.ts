export function roleGuard(userRole: string, requiredRole: string) {
  if (userRole !== requiredRole && userRole !== 'admin') {
    throw new Error('Insufficient permissions');
  }
}
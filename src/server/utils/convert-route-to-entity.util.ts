const mapping: Record<string, string> = {
  companies: 'company',
  'performance-evaluations': 'performance_evaluation',
  projects: 'project',
  tasks: 'task',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

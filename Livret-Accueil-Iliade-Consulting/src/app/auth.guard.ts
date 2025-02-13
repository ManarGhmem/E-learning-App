import { inject } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './service/auth.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService  = inject(AuthService);
  const router = inject(Router);
  

  if (!authService.isAuthenticated()) {
    // If the user is not authenticated, redirect to the login page
    router.navigate(['/login']);
    return false;
  }

  const roles = route.data['roles'] as Array<string>;
  if (roles) {
    const userRole = authService.getRole();
    if (!userRole || !roles.includes(userRole)) {
      // If the user does not have the required role, redirect to the unauthorized page
      router.navigate(['/unauthorized']);
      return false;
    }
  }

  // If the user is authenticated and has the required role, allow access
  return true;
};
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardWorkingDaysGuard implements CanActivate, CanDeactivate<unknown> {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    const isWorkingDay = new Date().getDay() !== 0 && new Date().getDay() !== 6;
    const returnedValue = !isWorkingDay;
    if (returnedValue) {
      this.router.navigate(['/all']);
    }
    return returnedValue;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return true;
  }

}

import { CanActivateFn } from '@angular/router';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { map,switchMap, of, from  } from 'rxjs';

export const rutaProtegidaGuard: CanActivateFn = (route, state)  => {
  return true;
};

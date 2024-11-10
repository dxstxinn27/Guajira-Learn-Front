import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');

  if (token) {
    // Si hay un token, permite el acceso a la ruta protegida
    return true;
  } else {
    // Si no hay token, redirige al inicio de sesión
    const router = new Router();
    router.navigate(['/usuarios/estudiante/iniciar-sesion']);
    return false;
  }
};

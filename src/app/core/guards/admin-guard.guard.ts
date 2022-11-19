import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import Swal from 'sweetalert2';

import { AuthService } from '../../auth/services/auth.service';
import { Roles } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AdminGuardGuard implements CanActivate {
  constructor(public _UsuarioService: AuthService, public router: Router) {}
  async canActivate() {
    if (
      (await this._UsuarioService.HaveSession()) &&
      this._UsuarioService.usuario &&
      this._UsuarioService.usuario.role === Roles.ADMIN
    ) {
      return true;
    } else {
      Swal.fire(`Sin acceso!`, `Necesita ser administrador!`, 'warning');
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 2000);
      return false;
    }
  }
}

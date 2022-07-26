import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interface/user.interface';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
})
export class TablaUsuariosComponent implements OnInit {

  // Variable de tipo Usuario
  usuarios: Usuario[] = []

  constructor(private usuarioService: UsuariosService){

  }



  ngOnInit(): void {
    this.usuarioService.consultaInformacion()
    .subscribe( (usuario) => {
      this.usuarios = usuario
    });
  }

}

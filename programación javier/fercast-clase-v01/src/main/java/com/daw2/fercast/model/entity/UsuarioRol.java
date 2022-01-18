package com.daw2.fercast.model.entity;

import javax.persistence.*;

@Entity
@Table(name = "usuarios_roles")
public class UsuarioRol {
    private Usuario usuario;
    private Rol rol;


    @ManyToOne
    @JoinColumn(name = "id_usuario",nullable = false)
    public Usuario getUsuario() {
        return usuario;
    }
    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

   // @PrimaryKeyJoinColumn(name = "id_rol")
    @ManyToOne
    @JoinColumn(name = "id_rol",nullable = false)
    public Rol getRol() {
        return rol;
    }
    public void setRol(Rol rol) {
        this.rol = rol;
    }
}

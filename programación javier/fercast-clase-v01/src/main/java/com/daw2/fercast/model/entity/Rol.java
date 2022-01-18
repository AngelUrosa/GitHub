package com.daw2.fercast.model.entity;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Entity
@Table(name = "roles")
public class Rol {
    private Integer id;
    private String rol;
    private String descripcion;
    private List<UsuarioRol> usuarioRols;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    @NotBlank
    @Column(unique = true,nullable = false,length = 15)
    public String getRol() {
        return rol;
    }
    public void setRol(String rol) {
        this.rol = rol;
    }

    @Column(length = 25)
    public String getDescripcion() {
        return descripcion;
    }
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    @OneToMany(mappedBy = "rol")
    public List<UsuarioRol> getUsuarioRols() {
        return usuarioRols;
    }
    public void setUsuarioRols(List<UsuarioRol> usuarioRols) {
        this.usuarioRols = usuarioRols;
    }
}

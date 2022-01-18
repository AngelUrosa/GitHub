package com.daw2.fercast.model.entity;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
@Table(name = "register")
public class Register {
    private Integer id;
    private String codigoSolicitud;
    private String email;
    private Usuario usuario;
    private Date createAt;

    @PrePersist
    public void init() {
        createAt = new Date();
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    @NotBlank
    @Column(nullable = false,unique = true,length = 50, name = "codigo_solicitud")
    public String getCodigoSolicitud() {
        return codigoSolicitud;
    }
    public void setCodigoSolicitud(String codigoSolicitud) {
        this.codigoSolicitud = codigoSolicitud;
    }

    @Email
    @Column(unique = true,nullable = false,length = 75)
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    @OneToOne(fetch = FetchType.LAZY)
    public Usuario getUsuario() {
        return usuario;
    }
    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    @Column(nullable = false,name = "create_at")
    public Date getCreateAt() {
        return createAt;
    }
    public void setCreateAt(Date createAt) {
        this.createAt = createAt;
    }
}

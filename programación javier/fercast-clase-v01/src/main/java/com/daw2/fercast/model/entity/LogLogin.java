package com.daw2.fercast.model.entity;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
@Table(name = "log_login")
public class LogLogin {

    private Integer id;
    private String username;
    private String ip;
    private String codOperacion;
    private String descripcion;
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
    @Column(length = 75)
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    @NotBlank
    @Column(length = 20)
    public String getIp() {
        return ip;
    }
    public void setIp(String ip) {
        this.ip = ip;
    }



    @NotBlank
    @Column(length = 12,name = "cod_operacion")
    public String getCodOperacion() {
        return codOperacion;
    }
    public void setCodOperacion(String codOperacion) {
        this.codOperacion = codOperacion;
    }


    @NotBlank
    @Column(length = 200)
    public String getDescripcion() {
        return descripcion;
    }
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }


    @Column(name = "create_at")
    public Date getCreateAt() {
        return createAt;
    }
    public void setCreateAt(Date createAt) {
        this.createAt = createAt;
    }
}

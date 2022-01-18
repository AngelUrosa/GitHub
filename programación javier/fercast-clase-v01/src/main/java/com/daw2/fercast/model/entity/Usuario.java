package com.daw2.fercast.model.entity;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "usuarios")
public class Usuario {

    private Integer id;
    private String username;
    private String password;
    private String email;
    private String nombre;
    private String apellido1;
    private String apellido2;
    private Boolean activo;
    private Boolean bloqueado;
    private int numIntentos;
    private Date ultimoAcceso;
    private Date createAt;
    private Date modifiedAt;
    private List<Cliente> clientes;


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
    @Column(unique = true,nullable = false,length = 75)
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    @NotBlank
    @Column(length = 60)
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    @NotBlank
    @Column(unique = true,nullable = false,length = 75)
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    @NotBlank
    @Column(length = 20,nullable = false)
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @NotBlank
    @Column(length = 20,nullable = false)
    public String getApellido1() {
        return apellido1;
    }
    public void setApellido1(String apellido1) {
        this.apellido1 = apellido1;
    }

    @NotBlank
    @Column(length = 20,nullable = false)
    public String getApellido2() {
        return apellido2;
    }
    public void setApellido2(String apellido2) {
        this.apellido2 = apellido2;
    }

    @Column(nullable = false)
    public Boolean getActivo() {
        return activo;
    }
    public void setActivo(Boolean activo) {
        this.activo = activo;
    }

    @Column(nullable = false)
    public Boolean getBloqueado() {
        return bloqueado;
    }
    public void setBloqueado(Boolean bloqueado) {
        this.bloqueado = bloqueado;
    }

    @Column(nullable = false,name = "num_intentos")
    public int getNumIntentos() {
        return numIntentos;
    }
    public void setNumIntentos(int numIntentos) {
        this.numIntentos = numIntentos;
    }

    @Column(name = "ultimo_acceso")
    @Temporal(TemporalType.TIMESTAMP)
    public Date getUltimoAcceso() {
        return ultimoAcceso;
    }
    public void setUltimoAcceso(Date ultimoAcceso) {
        this.ultimoAcceso = ultimoAcceso;
    }

    @Column(name = "create_at", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    public Date getCreateAt() {
        return createAt;
    }
    public void setCreateAt(Date createAt) {
        this.createAt = createAt;
    }

    @Column(name = "modified_at")
    @Temporal(TemporalType.TIMESTAMP)
    public Date getModifiedAt() {
        return modifiedAt;
    }
    public void setModifiedAt(Date modifiedAt) {
        this.modifiedAt = modifiedAt;
    }

    @OneToOne(fetch = FetchType.LAZY)

    public List<Cliente> getClientes() {
        return clientes;
    }
    public void setClientes(List<Cliente> clientes) {
        this.clientes = clientes;
    }
}

package com.daw2.fercast.model.entity;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Entity
@Table(name = "categorias")
public class Categoria {
    private Integer id;
    private String ref;
    private String descripcion;
    private Double iva;
    private List<SubCategoria> subCategoria;




    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    @NotBlank
    @Column(unique = true,nullable = false,length = 10)
    public String getRef() {
        return ref;
    }
    public void setRef(String ref) {
        this.ref = ref;
    }

    @NotBlank
    @Column(nullable = false, length=50)
    public String getDescripcion() {
        return descripcion;
    }
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Double getIva() {
        return iva;
    }
    public void setIva(Double iva) {
        this.iva = iva;
    }

    @OneToMany(mappedBy = "categoria")
    public List<SubCategoria> getSubCategoria() {
        return subCategoria;
    }
    public void setSubCategoria(List<SubCategoria> subCategoria) {
        this.subCategoria = subCategoria;
    }
}

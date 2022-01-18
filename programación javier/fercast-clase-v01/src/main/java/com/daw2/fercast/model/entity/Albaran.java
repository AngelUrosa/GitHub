package com.daw2.fercast.model.entity;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "albaranes")
public class Albaran {
    private Integer id;
    private String ref;
    private Date fecha;
    private List<DetalleAlbaran> detalleAlbaranes;

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
    public String getRef() {
        return ref;
    }
    public void setRef(String ref) {
        this.ref = ref;
    }

    @Column(nullable = false)
    public Date getFecha() {
        return fecha;
    }
    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    @OneToMany(mappedBy = "albaran")
    public List<DetalleAlbaran> getDetalleAlbaranes() {
        return detalleAlbaranes;
    }
    public void setDetalleAlbaranes(List<DetalleAlbaran> detalleAlbaranes) {
        this.detalleAlbaranes = detalleAlbaranes;
    }
}

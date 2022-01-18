package com.daw2.fercast.model.entity;

import javax.persistence.*;

@Entity
@Table(name = "detalle_albaranes")
public class DetalleAlbaran {
    private Integer id;
    private Double precioCompra;
    private Articulo articulo;
    private Albaran albaran;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    @Column(name = "precio_compra")
    public Double getPrecioCompra() {
        return precioCompra;
    }
    public void setPrecioCompra(Double precioCompra) {
        this.precioCompra = precioCompra;
    }

    @ManyToOne
    @JoinColumn(name = "id_articulo",nullable = false)
    public Articulo getArticulo() {
        return articulo;
    }
    public void setArticulo(Articulo articulo) {
        this.articulo = articulo;
    }

    @ManyToOne
    @JoinColumn(name = "id_albaran",nullable = false)
    public Albaran getAlbaran() {
        return albaran;
    }
    public void setAlbaran(Albaran albaran) {
        this.albaran = albaran;
    }
}

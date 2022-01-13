package com.daw2.fercast.model.entity;

import javax.persistence.*;

@Entity
@Table(name = "detalles_facturas")
public class DetalleFactura {

    private Integer id;
    private Double precioCompra;
    private Double precio;
    private Double unidades;
    private Double dto;
    private Articulo articulo;
    private Factura factura;

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

    public Double getPrecio() {
        return precio;
    }
    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public Double getUnidades() {
        return unidades;
    }
    public void setUnidades(Double unidades) {
        this.unidades = unidades;
    }

    public Double getDto() {
        return dto;
    }
    public void setDto(Double dto) {
        this.dto = dto;
    }

    @ManyToOne
    @JoinColumn(name = "id_articulo")
    public Articulo getArticulo() {
        return articulo;
    }
    public void setArticulo(Articulo articulo) {
        this.articulo = articulo;
    }

    @ManyToOne
    @JoinColumn(name = "id_factura")
    public Factura getFactura() {
        return factura;
    }
    public void setFactura(Factura factura) {
        this.factura = factura;
    }
}

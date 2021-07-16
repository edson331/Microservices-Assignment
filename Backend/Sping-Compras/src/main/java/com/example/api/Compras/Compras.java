package com.example.api.Compras;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="Compras")
public class Compras {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "Nombre")
	private String Nombre;

	@Column(name = "Cantidad")
	private int Cantidad;
	
	@Column(name = "Estado")
	private int Estado;
	
	public Compras() {
		
	}
	
	public Compras(String Nombre, int Cantidad, int Estado) {
		super();
		this.Nombre = Nombre;
		this.Cantidad = Cantidad;
		this.Estado = Estado;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getNombree() {
		return Nombre;
	}
	public void setNombre(String Nombre) {
		this.Nombre = Nombre;
	}
	public int getCantidad() {
		return Cantidad;
	}
	public void setCantidad(int Cantidad) {
		this.Cantidad = Cantidad;
	}
	public int getEstado() {
		return Estado;
	}
	public void setEstado(int Estado) {
		this.Estado = Estado;
	}
}

package com.example.api.usuarios;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Profile;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="Usuarios")
public class Usuarios {
    
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "Nombre")
	private String Nombre;

	@Column(name = "Estado")
	private int Estado;
	
	@Column(name = "Usuario")
	private String Usuario;
	
	@Column(name = "Password")
	private String Password;
	public Usuarios() {
		
	}
	
	public Usuarios(String Nombre, int Estado, String Usuario, String Password) {
		super();
		this.Nombre = Nombre;
		this.Estado = Estado;
		this.Usuario = Usuario;
		this.Password = Password;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	public String getNombre() {
		return Nombre;
	}
	
	public void setNombre(String Nombre) {
		this.Nombre = Nombre;
	}
	
	public int getEstado() {
		return Estado;
	}
	
	public void setEstado(int Estado) {
		this.Estado = Estado;
	}
	
	public String getdUsuario() {
		return Usuario;
	}
	
	public void setUsuario(String Usuario) {
		this.Usuario = Usuario;
	}

	public String getPassword() {
		return Password;
	}
	
	public void setPassword(String Password) {
		this.Password = Password;
	}
}
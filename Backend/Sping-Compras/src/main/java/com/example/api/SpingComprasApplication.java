package com.example.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.api.Compras.Compras;
import com.example.api.Compras.ComprasRepository;
import com.example.api.execption.ResourceNotFoundException;
import com.example.api.usuarios.Usuarios;
import com.example.api.usuarios.UsuariosRepository;

import javax.annotation.PostConstruct;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@SpringBootApplication
@RestController

public class SpingComprasApplication {
	public static void main(String[] args) {
		SpringApplication.run(SpingComprasApplication.class, args);
	}
	
	@Autowired
	private UsuariosRepository usuariosRepository;

	@Autowired
	private ComprasRepository comprasRepository;

	/******************************************************************************
	 * Usuarios
	 ******************************************************************************/
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/getUsuarios")
	public List<Usuarios> getUsuarios(){
		return usuariosRepository.findAll();
	}
	
	////////API CREATE
	@CrossOrigin(origins = "http://localhost:4200")
	
	@PostMapping("/getUsuarios")
	public Usuarios createUsuario	(@RequestBody Usuarios usuarios) {
		return usuariosRepository.save(usuarios);
	}
	
	//////// API UPDATE
	@PutMapping("/getUsuarios/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<Usuarios> updateUsuario(@PathVariable Long id, @RequestBody Usuarios UsuarioDetails){
		Usuarios usuarios = usuariosRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existe id de Usuario  :" + id));
		
		usuarios.setUsuario(UsuarioDetails.getdUsuario());
		usuarios.setNombre(UsuarioDetails.getNombre());
		usuarios.setPassword(UsuarioDetails.getPassword());
		usuarios.setEstado(UsuarioDetails.getEstado());
		
		Usuarios updatedUsaurios = usuariosRepository.save(usuarios);
		return ResponseEntity.ok(updatedUsaurios);
	}
	
	//////// API DELETE	
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/getUsuarios/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteUsuarios(@PathVariable Long id){
		Usuarios usuarios = usuariosRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existe id de Usuario :" + id));
		
		usuariosRepository.delete(usuarios);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	/******************************************************************************
	 * Compras
	 ******************************************************************************/
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/getCompras")
	public List<Compras> getCompras(){
		return comprasRepository.findAll();
	}
	
	////////API CREATE
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/getCompras")
	public Compras createCompras(@RequestBody Compras compras) {
		return comprasRepository.save(compras);
	}
	
	//////// API UPDATE
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/getCompras/{id}")
	public ResponseEntity<Compras> updateCompra(@PathVariable Long id, @RequestBody Compras ComprasDetails){
		Compras compras = comprasRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existe id de compra  :" + id));
		
		compras.setNombre(ComprasDetails.getNombree());
		compras.setCantidad(ComprasDetails.getCantidad());
		compras.setEstado(ComprasDetails.getEstado());
		
		Compras updatedCompras = comprasRepository.save(compras);
		return ResponseEntity.ok(updatedCompras);
	}
	//////// API DELETE	
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/getCompras/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteCompra(@PathVariable Long id){
		Compras compras = comprasRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existe id de compra :" + id));
		
		comprasRepository.delete(compras);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}

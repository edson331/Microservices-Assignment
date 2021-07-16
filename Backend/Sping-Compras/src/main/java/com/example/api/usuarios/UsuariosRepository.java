package com.example.api.usuarios;

import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.api.usuarios.Usuarios;
@Repository
//@Profile("admissions")
public interface UsuariosRepository extends JpaRepository<Usuarios, Long> {


}
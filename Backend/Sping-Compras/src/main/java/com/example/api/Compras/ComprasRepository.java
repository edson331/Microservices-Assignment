package com.example.api.Compras;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.api.Compras.Compras;

@Repository
public interface ComprasRepository extends JpaRepository<Compras, Long>{

}
package ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ecommerce.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

}

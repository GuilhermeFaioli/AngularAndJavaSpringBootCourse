package ecommerce.service;

import java.util.Set;
import java.util.UUID;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ecommerce.dto.Purchase;
import ecommerce.dto.PurchaseResponse;
import ecommerce.entity.Customer;
import ecommerce.entity.Order;
import ecommerce.entity.OrderItem;
import ecommerce.repository.CustomerRepository;

@Service
public class CheckoutServiceImpl implements CheckoutService{
	
	@Autowired
	private CustomerRepository customerRepository;

	@Override
	@Transactional
	public PurchaseResponse placeOrder(Purchase purchase) {
		
		// retrieve the order info from dto
		Order order = purchase.getOrder();
		
		// generate tracking number
		String orderTrackingNumber = generateOrderTrackingNumber();
		order.setOrderTrackingNumber(orderTrackingNumber);
		
		// populate order with orderItems
		Set<OrderItem> orderItems = purchase.getOrderItems();
		orderItems.forEach(item -> order.add(item));
		
		// populate order with billingAddress and shippingAddress
		order.setBillingAddress(purchase.getBillingAddress());
		order.setShippingAddress(purchase.getShippingAddress());
		
		// populate customer with order
		Customer customer = purchase.getCustomer();
		customer.add(order);
		
		//save to the database
		customerRepository.save(customer);
		
		// return a response
		return new PurchaseResponse(orderTrackingNumber);
	}

	private String generateOrderTrackingNumber() {
		// generate a random UUID number (UUID version-4)
		return UUID.randomUUID().toString();
	}

}

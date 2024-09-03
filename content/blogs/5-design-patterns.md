---
title: 5 Design Patterns Every Developer Should Know
description: Explore essential software design patterns with real-world examples
date: 2024-08-03
authors:
  - name: Dino Kupinic
    avatar: https://github.com/Dino-Kupinic.png
    handle: "@Dino-Kupinic"
tags:
  - Guide
seo:
  image:
    src: "/images/blog/design-patterns.webp"
    alt: 5 Design Patterns you should know
---

![Design Patterns](/images/blog/design-patterns.webp)

### Table of Contents
- [Dependency Injection Pattern](#1-dependency-injection-pattern)
- [Observer Pattern](#2-observer-pattern)
- [Strategy Pattern](#3-strategy-pattern)
- [Factory Method Pattern](#4-factory-method-pattern)
- [Decorator Pattern](#5-decorator-pattern)

Design patterns represent time-tested solutions to common problems in software design,
offering developers a shared language and approach to solving complex issues.

This article covers five essential design patterns that every software developer
should master, exploring their structure, use cases, benefits, and potential pitfalls.

The example implementations provided here are written in Java,
but the concepts are applicable to other programming languages as well.

Without further ado, let's dive in! 🚀

## 1. Dependency Injection Pattern

### Overview

Dependency Injection (DI) is a design pattern that implements Inversion of Control (IoC) for resolving dependencies. In
essence, DI separates the creation of an object's dependencies from the object itself.

Most notably, it's found in frameworks like [Java Spring](https://spring.io/) or [Angular.js](https://angular.dev/),
where the framework is responsible for creating and injecting dependencies into components.

### Structure

- **Service Interface**: Defines the functionality that will be used by the client.
- **Service Implementation**: Concrete implementation of the service interface.
- **Client**: The object that depends on the service.
- **Injector**: Responsible for creating and injecting service objects into the client.

### Example Implementation

```java
public interface MessageService {
    void sendMessage(String message, String recipient);
}
```

```java
public class EmailService implements MessageService {
    @Override
    public void sendMessage(String message, String recipient) {
        System.out.println("Sending email to " + recipient + ": " + message);
    }
}
```

```java
public class NotificationManager {
    private MessageService messageService;

    // Constructor Injection!
    public NotificationManager(MessageService messageService) {
        this.messageService = messageService;
    }

    public void notify(String message, String recipient) {
        messageService.sendMessage(message, recipient);
    }
}
```

```java
public class Application {
    public static void main(String[] args) {
        MessageService emailService = new EmailService();
        NotificationManager manager = new NotificationManager(emailService);
        manager.notify("Hello!", "user@example.com");
    }
}
```

### Benefits

1. **Loose Coupling**: Classes are not directly dependent on their dependencies, making the system more modular.
2. **Testability**: Dependencies can be easily mocked or stubbed for unit testing.
3. **Flexibility**: Implementations can be swapped without changing the client code.
4. **Lifetime Management**: The injector can manage the lifetime of dependencies, potentially reusing instances.

### Drawbacks

1. **Complexity**: Can introduce additional complexity, especially in smaller applications.
2. **Compile-time Errors to Runtime**: Some dependency issues may only become apparent at runtime.

### When to Use

- In large, complex systems where managing dependencies manually would be cumbersome.
- When you need to test components in isolation.
- When you want to be able to easily switch between different implementations of a dependency.

## 2. Observer Pattern

### Overview

The Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its
dependents are notified and updated automatically.

### Structure

- **Subject**: Maintains a list of observers and provides methods to add or remove observers.
- **Observer**: Defines an updating interface for objects that should be notified of changes in a subject.
- **Concrete Subject**: Broadcasts notifications to observers when its state changes.
- **Concrete Observer**: Implements the Observer updating interface to keep its state consistent with the subject's.

### Example Implementation

```java
import java.util.ArrayList;
import java.util.List;

public interface Subject {
    void registerObserver(Observer o);
    void removeObserver(Observer o);
    void notifyObservers();
}
```

```java
public class WeatherStation implements Subject {
    private List<Observer> observers;
    private float temperature;

    public WeatherStation() {
        observers = new ArrayList<>();
    }

    public void setTemperature(float temperature) {
        this.temperature = temperature;
        notifyObservers();
    }

    @Override
    public void registerObserver(Observer o) {
        observers.add(o);
    }

    @Override
    public void removeObserver(Observer o) {
        observers.remove(o);
    }

    @Override
    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(temperature);
        }
    }
}
```

```java
public interface Observer {
    void update(float temperature);
}
```

```java
public class TemperatureDisplay implements Observer {
    private float temperature;

    @Override
    public void update(float temperature) {
        this.temperature = temperature;
        display();
    }

    public void display() {
        System.out.println("Current temperature: " + temperature + "°C");
    }
}
```

```java
public class WeatherApp {
    public static void main(String[] args) {
        WeatherStation weatherStation = new WeatherStation();
        TemperatureDisplay display = new TemperatureDisplay();

        weatherStation.registerObserver(display);
        weatherStation.setTemperature(25.5f);
        weatherStation.setTemperature(26.8f);
    }
}
```

### Benefits

1. **Loose Coupling**: Subjects don't need to know anything about their observers, reducing dependencies.
2. **Broadcast Communication**: Allows for efficient broadcast-type communication.
3. **Extensibility**: New observers can be added without modifying the subject.

### Drawbacks

1. **Unexpected Updates**: Observers might be notified when they don't need to be, leading to performance issues.
2. **Lapsed Listener Problem**: If observers aren't properly removed, they may cause memory leaks.

### When to Use

- Event handling systems
- Model-View-Controller (MVC) architectural pattern
- Publish-subscribe systems
- Any scenario where multiple objects need to react to state changes in another object

## 3. Strategy Pattern

### Overview

The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. It lets the
algorithm vary independently from clients that use it.

### Structure

- **Strategy**: Declares an interface common to all supported algorithms.
- **Concrete Strategy**: Implements the algorithm using the Strategy interface.
- **Context**: Maintains a reference to a Strategy object and can switch between different Concrete Strategies.

### Example Implementation

```java
public interface PaymentStrategy {
    void pay(int amount);
}
```

```java
public class CreditCardPayment implements PaymentStrategy {
    private String cardNumber;

    public CreditCardPayment(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    @Override
    public void pay(int amount) {
        System.out.println(amount + " paid with credit card " + cardNumber);
    }
}
```

```java
public class PayPalPayment implements PaymentStrategy {
    private String email;

    public PayPalPayment(String email) {
        this.email = email;
    }

    @Override
    public void pay(int amount) {
        System.out.println(amount + " paid using PayPal account " + email);
    }
}
```

```java
public class ShoppingCart {
    private PaymentStrategy paymentStrategy;

    public void setPaymentStrategy(PaymentStrategy paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    public void checkout(int amount) {
        paymentStrategy.pay(amount);
    }
}
```

```java
public class OnlineStore {
    public static void main(String[] args) {
        ShoppingCart cart = new ShoppingCart();

        cart.setPaymentStrategy(new CreditCardPayment("1234-5678-9012-3456"));
        cart.checkout(100);

        cart.setPaymentStrategy(new PayPalPayment("user@example.com"));
        cart.checkout(200);
    }
}
```

### Benefits

1. **Flexibility**: Algorithms can be switched at runtime.
2. **Isolation**: Algorithm implementation details are isolated from the code that uses them.
3. **Eliminates Conditional Statements**: Replaces multiple conditionals with polymorphism.

### Drawbacks

1. **Increased Number of Objects**: Can lead to many strategy objects in the application.
2. **Client Must Be Aware of Strategies**: The client must understand how the strategies differ.

### When to Use

- When you have multiple algorithms for a specific task and want to make them interchangeable.
- To isolate the business logic of a class from the implementation details of algorithms.
- When a class defines many behaviors that appear as multiple conditional statements in its operations.

## 4. Factory Method Pattern

### Overview

The Factory Method pattern provides an interface for creating objects in a superclass, but allows subclasses to alter
the type of objects that will be created.

### Structure

- **Product**: Defines the interface of objects the factory method creates.
- **Concrete Product**: Implements the Product interface.
- **Creator**: Declares the factory method, which returns an object of type Product.
- **Concrete Creator**: Overrides the factory method to return an instance of a Concrete Product.

### Example Implementation

```java
public interface Vehicle {
    void drive();
}
```

```java
public class Car implements Vehicle {
    @Override
    public void drive() {
        System.out.println("Driving a car");
    }
}
```

```java
public class Motorcycle implements Vehicle {
    @Override
    public void drive() {
        System.out.println("Riding a motorcycle");
    }
}
```

```java
public abstract class VehicleFactory {
    public abstract Vehicle createVehicle();

    public void deliverVehicle() {
        Vehicle vehicle = createVehicle();
        System.out.print("Delivering new vehicle: ");
        vehicle.drive();
    }
}
```

```java
public class CarFactory extends VehicleFactory {
    @Override
    public Vehicle createVehicle() {
        return new Car();
    }
}
```

```java
public class MotorcycleFactory extends VehicleFactory {
    @Override
    public Vehicle createVehicle() {
        return new Motorcycle();
    }
}
```

```java
public class TransportationApp {
    public static void main(String[] args) {
        VehicleFactory carFactory = new CarFactory();
        carFactory.deliverVehicle();

        VehicleFactory motorcycleFactory = new MotorcycleFactory();
        motorcycleFactory.deliverVehicle();
    }
}
```

### Benefits

1. **Decoupling**: The code that creates objects is separated from the code that uses them.
2. **Extensibility**: New product types can be introduced without breaking existing client code.
3. **Centralized Complex Creation Logic**: Encapsulates complex object creation logic in a single place.

### Drawbacks

1. **Complexity**: Can lead to many small, but similar, subclasses.
2. **Refactoring Challenges**: Existing classes might need to be refactored to fit the pattern.

### When to Use

- When a class can't anticipate the type of objects it needs to create beforehand.
- When you want to delegate the responsibility of object instantiation to subclasses.
- To implement a class library or framework where you want to hide the details of concrete classes from the client code.

## 5. Decorator Pattern

### Overview

The Decorator pattern allows behavior to be added to individual objects, either statically or dynamically, without
affecting the behavior of other objects from the same class.

### Structure

- **Component**: Defines the interface for objects that can have responsibilities added to them dynamically.
- **Concrete Component**: Defines an object to which additional responsibilities can be attached.
- **Decorator**: Maintains a reference to a Component object and defines an interface that conforms to Component's
  interface.
- **Concrete Decorator**: Adds responsibilities to the component.

### Example Implementation

```java
public interface Coffee {
    String getDescription();
    double getCost();
}
```

```java
public class SimpleCoffee implements Coffee {
    @Override
    public String getDescription() {
        return "Simple Coffee";
    }

    @Override
    public double getCost() {
        return 1.0;
    }
}
```

```java
public abstract class CoffeeDecorator implements Coffee {
    protected Coffee decoratedCoffee;

    public CoffeeDecorator(Coffee coffee) {
        this.decoratedCoffee = coffee;
    }

    @Override
    public String getDescription() {
        return decoratedCoffee.getDescription();
    }

    @Override
    public double getCost() {
        return decoratedCoffee.getCost();
    }
}
```

```java
public class MilkDecorator extends CoffeeDecorator {
    public MilkDecorator(Coffee coffee) {
        super(coffee);
    }

    @Override
    public String getDescription() {
        return super.getDescription() + ", Milk";
    }

    @Override
    public double getCost() {
        return super.getCost() + 0.5;
    }
}
```

```java
public class SugarDecorator extends CoffeeDecorator {
    public SugarDecorator(Coffee coffee) {
        super(coffee);
    }

    @Override
    public String getDescription() {
        return super.getDescription() + ", Sugar";
    }

    @Override
    public double getCost() {
        return super.getCost() + 0.2;
    }
}
```

```java
public class CoffeeShop {
    public static void main(String[] args) {
        Coffee simpleCoffee = new SimpleCoffee();
        System.out.println(simpleCoffee.getDescription() + " - $" + simpleCoffee.getCost());

        Coffee milkCoffee = new MilkDecorator(simpleCoffee);
        System.out.println(milkCoffee.getDescription() + " - $" + milkCoffee.getCost());

        Coffee sweetMilkCoffee = new SugarDecorator(milkCoffee);
        System.out.println(sweetMilkCoffee.getDescription() + " - $" + sweetMilkCoffee.getCost());
    }
}
```

### Benefits

1. **Flexibility**: Allows responsibilities to be added to objects dynamically at runtime.
2. **Avoids Feature-Laden Classes**: Adding functionality via inheritance can lead to complex, hard-to-maintain class
   hierarchies.
3. **Pay-as-you-go Functionality**: You only include the functionality you need.

### Drawbacks

1. **Lots of Little Objects**: A system with many small decorator objects can be hard to learn and debug.
2. **Complicated Constructor Calls**: When using multiple decorators, the instantiation code can become complex.

### When to Use

- To add responsibilities to objects dynamically and transparently, without affecting other objects.
- When extension by subclassing is impractical or impossible.
- When you want to add functionality that may be withdrawn later.

## Wrapping Up

These five design patterns provide a solid foundation for writing more maintainable and flexible code.
By understanding and applying these patterns, you can:

1. Solve common design problems more efficiently
2. Communicate design ideas more effectively with other developers
3. Create more modular and easier-to-maintain code
4. Improve the overall architecture of your software projects

While design patterns are powerful tools, they should be used judiciously.
Always consider the specific needs of your project and don't force a pattern where it doesn't fit naturally.


package org.acme;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

import io.smallrye.common.annotation.NonBlocking;

@Path("/")
public class GreetingResource {

	public static class Person {
		public String Name;
		public byte Age;
		public String toString() {
			return "{ Name: '" + Name + "', Age: " + Age + " }";
		}
	}

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello Quarkus";
    }

    @POST
    @Produces(MediaType.TEXT_PLAIN)
	@Path("personCreate/blocking")
    public String personCreateBlocking(Person person) {
		System.out.println(person);
        return person.Name + " is " + person.Age + " years old";
    }

    @POST
    @Produces(MediaType.TEXT_PLAIN)
	@Path("personCreate")
	@NonBlocking
    public String personCreate(Person person) {
		System.out.println(person);
        return person.Name + " is " + person.Age + " years old";
    }
}

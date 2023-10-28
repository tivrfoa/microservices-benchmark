The goal here is to have an idea on:
  - performance
  - throughput
  - time to first request
  - memory utilization

It still in early stage, but these are the results for now.

## Languages and frameworks used so far

  - JavaScript NodeJS Express
  - Deno Oak
  - Go
  - Rust Axum
  - Java Quarkus

## JSON request, plain/text response


### wrk --timeout 2 -t4 -c50 -d30 -R3000

Go, Rust and Java achieve similar throughput, but the JVM takes longer
to reach Go and Rust performance.

The JVM is a great technology for long running applications, although it uses
much more memory than Go and Rust, so you could run at least 25
Rust microservices using the same memory as 1 Java microservice.

An alternative for Java developers is to use GraalVM to compile to a
native executable, reducing the memory usage and improving time to first
request. The JVM might still achieve better throughput after some time, but
the difference is negligible compared to the benefits that the native version
provides.

It's really important to notice that even the Java Native version still uses
much more memory than Go and Rust!
  - Go.....: <= 14,1MB
  - Rust...: <= 5,4MB
  - JVM....: <= 187MB¹
  - GraalVM: <= 103,4MB

¹: At startup, the JVM will use more memory because of Just in Time Compilation,
but then it stays <= 180MB


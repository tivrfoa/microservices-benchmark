# JavaScript Node Express

```txt
wrk --timeout 2 -t4 -c50 -d10 -R1000 -s wrk-pessoa.lua http://localhost:8080/personCreate
Running 10s test @ http://localhost:8080/personCreate
  4 threads and 50 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.75ms    1.11ms  13.44ms   89.33%
    Req/Sec       -nan      -nan   0.00      0.00%
  10000 requests in 10.00s, 2.33MB read
Requests/sec:    999.84
Transfer/sec:    238.24KB
```

# Deno Oak

```txt
wrk --timeout 2 -t4 -c50 -d10 -R1000 -s wrk-pessoa.lua http://localhost:8080/personCreate
Running 10s test @ http://localhost:8080/personCreate
  4 threads and 50 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.89ms    1.10ms  18.88ms   92.11%
    Req/Sec       -nan      -nan   0.00      0.00%
  10000 requests in 10.00s, 1.54MB read
Requests/sec:    999.87
Transfer/sec:    158.18KB
```

# Go

```txt
wrk --timeout 2 -t4 -c50 -d10 -R1000 -s wrk-pessoa.lua http://localhost:8080/personCreate
Running 10s test @ http://localhost:8080/personCreate
  4 threads and 50 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     0.97ms  395.87us   2.40ms   66.63%
    Req/Sec       -nan      -nan   0.00      0.00%
  10000 requests in 10.00s, 1.33MB read
Requests/sec:    999.88
Transfer/sec:    135.73KB
```

# Rust Axum

```txt
wrk --timeout 2 -t4 -c50 -d10 -R1000 -s wrk-pessoa.lua http://localhost:8080/personCreate
Running 10s test @ http://localhost:8080/personCreate
  4 threads and 50 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.07ms  424.36us   3.03ms   66.17%
    Req/Sec       -nan      -nan   0.00      0.00%
  10000 requests in 10.00s, 1.33MB read
Requests/sec:    999.87
Transfer/sec:    135.72KB
```

# Java Blocking

```txt
wrk --timeout 2 -t4 -c50 -d10 -R1000 -s wrk-pessoa.lua http://localhost:8080/personCreate
Running 10s test @ http://localhost:8080/personCreate
  4 threads and 50 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.08ms  430.46us   3.96ms   67.64%
    Req/Sec       -nan      -nan   0.00      0.00%
  10000 requests in 10.00s, 0.96MB read
Requests/sec:    999.90
Transfer/sec:     98.62KB
```

# Java NonBlocking

```txt
wrk --timeout 2 -t4 -c50 -d10 -R1000 -s wrk-pessoa.lua http://localhost:8080/personCreate
Running 10s test @ http://localhost:8080/personCreate
  4 threads and 50 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.01ms  442.67us   3.28ms   65.29%
    Req/Sec       -nan      -nan   0.00      0.00%
  10000 requests in 10.00s, 0.96MB read
Requests/sec:    999.81
Transfer/sec:     98.61KB
```


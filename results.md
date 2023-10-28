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

```txt
wrk --timeout 2 -t4 -c50 -d30 -R3000 -s wrk-pessoa.lua http://localhost:8080/personCreate
Running 30s test @ http://localhost:8080/personCreate
  4 threads and 50 connections
  Thread calibration: mean lat.: 1484.460ms, rate sampling interval: 5197ms
  Thread calibration: mean lat.: 1549.416ms, rate sampling interval: 5341ms
  Thread calibration: mean lat.: 1482.671ms, rate sampling interval: 5197ms
  Thread calibration: mean lat.: 1531.373ms, rate sampling interval: 5292ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     5.47s     1.60s   13.17s    63.55%
    Req/Sec   557.17      7.45   567.00     66.67%
  65469 requests in 30.00s, 15.23MB read
Requests/sec:   2182.32
Transfer/sec:    520.01KB
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

```txt
wrk --timeout 2 -t4 -c50 -d30 -R3000 -s wrk-pessoa.lua http://localhost:8080/personCreate
Running 30s test @ http://localhost:8080/personCreate
  4 threads and 50 connections
  Thread calibration: mean lat.: 1.048ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 1.084ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 1.014ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 1.110ms, rate sampling interval: 10ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.06ms  432.48us   2.95ms   63.69%
    Req/Sec   791.39     80.67     1.11k    51.65%
  89935 requests in 30.00s, 11.92MB read
Requests/sec:   2997.91
Transfer/sec:    406.94KB
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

```txt
wrk --timeout 2 -t4 -c50 -d30 -R3000 -s wrk-pessoa.lua http://localhost:8080/personCreate
Running 30s test @ http://localhost:8080/personCreate
  4 threads and 50 connections
  Thread calibration: mean lat.: 1.065ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 1.070ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 0.934ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 1.016ms, rate sampling interval: 10ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.03ms  430.50us   3.81ms   62.16%
    Req/Sec   794.77     85.31     1.11k    49.68%
  89935 requests in 30.00s, 11.92MB read
Requests/sec:   2997.85
Transfer/sec:    406.93KB
```

# Java Quarkus Blocking

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

# Java Quarkus NonBlocking

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

```txt
wrk --timeout 2 -t4 -c50 -d30 -R3000 -s wrk-pessoa.lua http://localhost:8080/personCreate
Running 30s test @ http://localhost:8080/personCreate
  4 threads and 50 connections
  Thread calibration: mean lat.: 57.218ms, rate sampling interval: 748ms
  Thread calibration: mean lat.: 57.460ms, rate sampling interval: 741ms
  Thread calibration: mean lat.: 56.708ms, rate sampling interval: 737ms
  Thread calibration: mean lat.: 56.384ms, rate sampling interval: 767ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.08ms  430.09us   4.39ms   63.72%
    Req/Sec   749.99      1.02   752.00     98.08%
  89936 requests in 30.00s, 8.66MB read
Requests/sec:   2997.93
Transfer/sec:    295.69KB
```

# Java Quarkus Blocking - Native with GraalVM

```txt
wrk --timeout 2 -t4 -c50 -d10 -R1000 -s wrk-pessoa.lua http://localhost:8080/personCreate
Running 10s test @ http://localhost:8080/personCreate
  4 threads and 50 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.31ms  441.23us   3.99ms   65.95%
    Req/Sec       -nan      -nan   0.00      0.00%
  10000 requests in 10.00s, 0.96MB read
Requests/sec:    999.96
Transfer/sec:     98.63KB
```

# Java Quarkus NonBlocking - Native with GraalVM

```txt
wrk --timeout 2 -t4 -c50 -d10 -R1000 -s wrk-pessoa.lua http://localhost:8080/personCreate
Running 10s test @ http://localhost:8080/personCreate
  4 threads and 50 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.23ms  435.23us   3.78ms   68.80%
    Req/Sec       -nan      -nan   0.00      0.00%
  10000 requests in 10.00s, 0.96MB read
Requests/sec:    999.90
Transfer/sec:     98.62KB
```

```txt
wrk --timeout 2 -t4 -c50 -d30 -R3000 -s wrk-pessoa.lua http://localhost:8080/personCreate
Running 30s test @ http://localhost:8080/personCreate
  4 threads and 50 connections
  Thread calibration: mean lat.: 1.212ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 1.162ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 1.191ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 1.200ms, rate sampling interval: 10ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.18ms  459.64us   8.78ms   64.18%
    Req/Sec   790.53     87.11     1.11k    44.32%
  89937 requests in 30.00s, 8.66MB read
Requests/sec:   2997.93
Transfer/sec:    295.69KB
```


# GraalVM Compilation

## Blocking

```txt
[INFO] [io.quarkus.deployment.pkg.steps.JarResultBuildStep] Building native image source jar: /home/lesco/dev/go/code-with-quarkus/target/code-with-quarkus-1.0.0-SNAPSHOT-native-image-source-jar/code-with-quarkus-1.0.0-SNAPSHOT-runner.jar
[INFO] [io.quarkus.deployment.pkg.steps.NativeImageBuildStep] Building native image from /home/lesco/dev/go/code-with-quarkus/target/code-with-quarkus-1.0.0-SNAPSHOT-native-image-source-jar/code-with-quarkus-1.0.0-SNAPSHOT-runner.jar
[INFO] [io.quarkus.deployment.pkg.steps.NativeImageBuildStep] Running Quarkus native-image plugin on GRAALVM 23.0 JDK 20.1
[INFO] [io.quarkus.deployment.pkg.steps.NativeImageBuildRunner] /home/lesco/dev/Java/graalvm-jdk-20_linux-x64_bin/graalvm-jdk-20.0.1+9.1/bin/native-image -J-Djava.util.logging.manager=org.jboss.logmanager.LogManager -J-Dlogging.initial-configurator.min-level=500 -J-Dsun.nio.ch.maxUpdateArraySize=100 -J-Dvertx.logger-delegate-factory-class-name=io.quarkus.vertx.core.runtime.VertxLogDelegateFactory -J-Dvertx.disableDnsResolver=true -J-Dio.netty.leakDetection.level=DISABLED -J-Dio.netty.allocator.maxOrder=3 -J-Duser.language=en -J-Duser.country=US -J-Dfile.encoding=UTF-8 --features=io.quarkus.runner.Feature,io.quarkus.runtime.graal.DisableLoggingFeature -J--add-exports=java.security.jgss/sun.security.krb5=ALL-UNNAMED -J--add-opens=java.base/java.text=ALL-UNNAMED -J--add-opens=java.base/java.io=ALL-UNNAMED -J--add-opens=java.base/java.lang.invoke=ALL-UNNAMED -J--add-opens=java.base/java.util=ALL-UNNAMED -H:BuildOutputJSONFile=code-with-quarkus-1.0.0-SNAPSHOT-runner-build-output-stats.json -H:+AllowFoldMethods -J-Djava.awt.headless=true --no-fallback --link-at-build-time -H:+ReportExceptionStackTraces -H:-AddAllCharsets --enable-url-protocols=http -H:NativeLinkerOption=-no-pie --enable-monitoring=heapdump -H:-UseServiceLoaderFeature -H:+StackTrace -J--add-exports=org.graalvm.sdk/org.graalvm.nativeimage.impl=ALL-UNNAMED --exclude-config io\.netty\.netty-codec /META-INF/native-image/io\.netty/netty-codec/generated/handlers/reflect-config\.json --exclude-config io\.netty\.netty-handler /META-INF/native-image/io\.netty/netty-handler/generated/handlers/reflect-config\.json code-with-quarkus-1.0.0-SNAPSHOT-runner -jar code-with-quarkus-1.0.0-SNAPSHOT-runner.jar
========================================================================================================================
GraalVM Native Image: Generating 'code-with-quarkus-1.0.0-SNAPSHOT-runner' (executable)...
========================================================================================================================
[1/8] Initializing...                                                                                   (14.4s @ 0.13GB)
 Java version: 20.0.1+9, vendor version: Oracle GraalVM 20.0.1+9.1
 Graal compiler: optimization level: 2, target machine: x86-64-v3, PGO: ML-inferred
 C compiler: gcc (linux, x86_64, 11.4.0)
 Garbage collector: Serial GC (max heap size: 80% of RAM)
 2 user-specific feature(s)
 - io.quarkus.runner.Feature: Auto-generated class by Quarkus from the existing extensions
 - io.quarkus.runtime.graal.DisableLoggingFeature: Disables INFO logging during the analysis phase
[2/8] Performing analysis...  [*****]                                                                  (118.5s @ 1.03GB)
  11,792 (86.65%) of 13,608 types reachable
  16,822 (57.97%) of 29,016 fields reachable
  66,831 (59.09%) of 113,101 methods reachable
   3,661 types,   134 fields, and 3,179 methods registered for reflection
      61 types,    59 fields, and    55 methods registered for JNI access
       4 native libraries: dl, pthread, rt, z
[3/8] Building universe...                                                                              (12.9s @ 1.17GB)
[4/8] Parsing methods...      [*******]                                                                 (49.8s @ 1.09GB)
[5/8] Inlining methods...     [***]                                                                      (3.0s @ 1.09GB)
[6/8] Compiling methods...    [***************]                                                        (250.7s @ 1.50GB)
[7/8] Layouting methods...    [****]                                                                    (12.5s @ 1.72GB)
[8/8] Creating image...       [***]                                                                      (9.9s @ 1.37GB)
  35.05MB (59.09%) for code area:    37,790 compilation units
  23.76MB (40.06%) for image heap:  333,081 objects and 8 resources
 514.77kB ( 0.85%) for other data
  59.31MB in total
------------------------------------------------------------------------------------------------------------------------
Top 10 origins of code area:                                Top 10 object types in image heap:
  16.36MB java.base                                            7.43MB byte[] for code metadata
   3.78MB svm.jar (Native Image)                               2.83MB byte[] for java.lang.String
   2.44MB c.f.jackson.core.jackson-databind-2.15.2.jar         2.32MB byte[] for general heap data
   1.77MB modified-io.vertx.vertx-core-4.4.5.jar               2.30MB java.lang.String
   1.20MB io.netty.netty-buffer-4.1.100.Final.jar              2.19MB java.lang.Class
 884.50kB code-with-quarkus-1.0.0-SNAPSHOT-runner.jar        745.15kB byte[] for reflection metadata
 788.09kB com.fasterxml.jackson.core.jackson-core-2.15.2.jar 552.75kB com.oracle.svm.core.hub.DynamicHubCompanion
 686.80kB io.netty.netty-transport-4.1.100.Final.jar         428.81kB java.util.concurrent.ConcurrentHashMap$Node
 525.83kB io.netty.netty-common-4.1.100.Final.jar            354.22kB java.util.HashMap$Node
 502.20kB io.smallrye.config.smallrye-config-core-3.4.1.jar  340.94kB c.o.svm.core.hub.DynamicHub$ReflectionMetadata
   5.93MB for 83 more packages                                 3.32MB for 3007 more object types
------------------------------------------------------------------------------------------------------------------------
Recommendations:
 G1GC: Use the G1 GC ('--gc=G1') for improved latency and throughput.
 PGO:  Use Profile-Guided Optimizations ('--pgo') for improved throughput.
 HEAP: Set max heap for improved and more predictable memory usage.
 CPU:  Enable more CPU features with '-march=native' for improved performance.
 QBM:  Use the quick build mode ('-Ob') to speed up builds during development.
------------------------------------------------------------------------------------------------------------------------
                       27.4s (5.8% of total time) in 266 GCs | Peak RSS: 2.99GB | CPU load: 7.03
------------------------------------------------------------------------------------------------------------------------
Produced artifacts:
 /home/lesco/dev/go/code-with-quarkus/target/code-with-quarkus-1.0.0-SNAPSHOT-native-image-source-jar/code-with-quarkus-1.0.0-SNAPSHOT-runner (executable)
 /home/lesco/dev/go/code-with-quarkus/target/code-with-quarkus-1.0.0-SNAPSHOT-native-image-source-jar/code-with-quarkus-1.0.0-SNAPSHOT-runner-build-output-stats.json (build_info)
========================================================================================================================
Finished generating 'code-with-quarkus-1.0.0-SNAPSHOT-runner' in 7m 53s.
[INFO] [io.quarkus.deployment.pkg.steps.NativeImageBuildRunner] objcopy --strip-debug code-with-quarkus-1.0.0-SNAPSHOT-runner
[INFO] [io.quarkus.deployment.QuarkusAugmentor] Quarkus augmentation completed in 484024ms
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  08:13 min
[INFO] Finished at: 2023-10-28T08:47:36-03:00
[INFO] ------------------------------------------------------------------------
```

## NonBlocking

```txt
[INFO] [io.quarkus.deployment.pkg.steps.JarResultBuildStep] Building native image source jar: /home/lesco/dev/go/code-with-quarkus/target/code-with-quarkus-1.0.0-SNAPSHOT-native-image-source-jar/code-with-quarkus-1.0.0-SNAPSHOT-runner.jar
[INFO] [io.quarkus.deployment.pkg.steps.NativeImageBuildStep] Building native image from /home/lesco/dev/go/code-with-quarkus/target/code-with-quarkus-1.0.0-SNAPSHOT-native-image-source-jar/code-with-quarkus-1.0.0-SNAPSHOT-runner.jar
[INFO] [io.quarkus.deployment.pkg.steps.NativeImageBuildStep] Running Quarkus native-image plugin on GRAALVM 23.0 JDK 20.1
[INFO] [io.quarkus.deployment.pkg.steps.NativeImageBuildRunner] /home/lesco/dev/Java/graalvm-jdk-20_linux-x64_bin/graalvm-jdk-20.0.1+9.1/bin/native-image -J-Djava.util.logging.manager=org.jboss.logmanager.LogManager -J-Dsun.nio.ch.maxUpdateArraySize=100 -J-Dlogging.initial-configurator.min-level=500 -J-Dvertx.logger-delegate-factory-class-name=io.quarkus.vertx.core.runtime.VertxLogDelegateFactory -J-Dvertx.disableDnsResolver=true -J-Dio.netty.leakDetection.level=DISABLED -J-Dio.netty.allocator.maxOrder=3 -J-Duser.language=en -J-Duser.country=US -J-Dfile.encoding=UTF-8 --features=io.quarkus.runner.Feature,io.quarkus.runtime.graal.DisableLoggingFeature -J--add-exports=java.security.jgss/sun.security.krb5=ALL-UNNAMED -J--add-opens=java.base/java.text=ALL-UNNAMED -J--add-opens=java.base/java.io=ALL-UNNAMED -J--add-opens=java.base/java.lang.invoke=ALL-UNNAMED -J--add-opens=java.base/java.util=ALL-UNNAMED -H:BuildOutputJSONFile=code-with-quarkus-1.0.0-SNAPSHOT-runner-build-output-stats.json -H:+AllowFoldMethods -J-Djava.awt.headless=true --no-fallback --link-at-build-time -H:+ReportExceptionStackTraces -H:-AddAllCharsets --enable-url-protocols=http -H:NativeLinkerOption=-no-pie --enable-monitoring=heapdump -H:-UseServiceLoaderFeature -H:+StackTrace -J--add-exports=org.graalvm.sdk/org.graalvm.nativeimage.impl=ALL-UNNAMED --exclude-config io\.netty\.netty-codec /META-INF/native-image/io\.netty/netty-codec/generated/handlers/reflect-config\.json --exclude-config io\.netty\.netty-handler /META-INF/native-image/io\.netty/netty-handler/generated/handlers/reflect-config\.json code-with-quarkus-1.0.0-SNAPSHOT-runner -jar code-with-quarkus-1.0.0-SNAPSHOT-runner.jar
========================================================================================================================
GraalVM Native Image: Generating 'code-with-quarkus-1.0.0-SNAPSHOT-runner' (executable)...
========================================================================================================================
[1/8] Initializing...                                                                                   (14.5s @ 0.16GB)
 Java version: 20.0.1+9, vendor version: Oracle GraalVM 20.0.1+9.1
 Graal compiler: optimization level: 2, target machine: x86-64-v3, PGO: ML-inferred
 C compiler: gcc (linux, x86_64, 11.4.0)
 Garbage collector: Serial GC (max heap size: 80% of RAM)
 2 user-specific feature(s)
 - io.quarkus.runner.Feature: Auto-generated class by Quarkus from the existing extensions
 - io.quarkus.runtime.graal.DisableLoggingFeature: Disables INFO logging during the analysis phase
[2/8] Performing analysis...  [*****]                                                                  (107.0s @ 1.05GB)
  11,801 (86.68%) of 13,614 types reachable
  16,838 (58.00%) of 29,031 fields reachable
  66,970 (59.15%) of 113,216 methods reachable
   3,663 types,   134 fields, and 3,180 methods registered for reflection
      61 types,    59 fields, and    55 methods registered for JNI access
       4 native libraries: dl, pthread, rt, z
[3/8] Building universe...                                                                              (12.5s @ 1.16GB)
[4/8] Parsing methods...      [*******]                                                                 (48.6s @ 1.21GB)
[5/8] Inlining methods...     [***]                                                                      (2.9s @ 1.02GB)
[6/8] Compiling methods...    [***************]                                                        (249.7s @ 2.17GB)
[7/8] Layouting methods...    [***]                                                                     (11.9s @ 2.21GB)
[8/8] Creating image...       [****]                                                                    (12.8s @ 1.58GB)
  35.10MB (59.12%) for code area:    37,898 compilation units
  23.77MB (40.04%) for image heap:  333,340 objects and 8 resources
 514.05kB ( 0.85%) for other data
  59.38MB in total
------------------------------------------------------------------------------------------------------------------------
Top 10 origins of code area:                                Top 10 object types in image heap:
  16.35MB java.base                                            7.44MB byte[] for code metadata
   3.78MB svm.jar (Native Image)                               2.83MB byte[] for java.lang.String
   2.44MB c.f.jackson.core.jackson-databind-2.15.2.jar         2.32MB byte[] for general heap data
   1.77MB modified-io.vertx.vertx-core-4.4.5.jar               2.30MB java.lang.String
   1.24MB io.netty.netty-buffer-4.1.100.Final.jar              2.19MB java.lang.Class
 885.40kB code-with-quarkus-1.0.0-SNAPSHOT-runner.jar        746.12kB byte[] for reflection metadata
 788.09kB com.fasterxml.jackson.core.jackson-core-2.15.2.jar 553.17kB com.oracle.svm.core.hub.DynamicHubCompanion
 686.89kB io.netty.netty-transport-4.1.100.Final.jar         428.91kB java.util.concurrent.ConcurrentHashMap$Node
 526.30kB io.netty.netty-common-4.1.100.Final.jar            355.13kB java.util.HashMap$Node
 502.40kB io.smallrye.config.smallrye-config-core-3.4.1.jar  341.22kB c.o.svm.core.hub.DynamicHub$ReflectionMetadata
   5.94MB for 83 more packages                                 3.32MB for 3010 more object types
------------------------------------------------------------------------------------------------------------------------
Recommendations:
 G1GC: Use the G1 GC ('--gc=G1') for improved latency and throughput.
 PGO:  Use Profile-Guided Optimizations ('--pgo') for improved throughput.
 HEAP: Set max heap for improved and more predictable memory usage.
 CPU:  Enable more CPU features with '-march=native' for improved performance.
 QBM:  Use the quick build mode ('-Ob') to speed up builds during development.
------------------------------------------------------------------------------------------------------------------------
                       26.9s (5.8% of total time) in 245 GCs | Peak RSS: 3.27GB | CPU load: 7.14
------------------------------------------------------------------------------------------------------------------------
Produced artifacts:
 /home/lesco/dev/go/code-with-quarkus/target/code-with-quarkus-1.0.0-SNAPSHOT-native-image-source-jar/code-with-quarkus-1.0.0-SNAPSHOT-runner (executable)
 /home/lesco/dev/go/code-with-quarkus/target/code-with-quarkus-1.0.0-SNAPSHOT-native-image-source-jar/code-with-quarkus-1.0.0-SNAPSHOT-runner-build-output-stats.json (build_info)
========================================================================================================================
Finished generating 'code-with-quarkus-1.0.0-SNAPSHOT-runner' in 7m 42s.
[INFO] [io.quarkus.deployment.pkg.steps.NativeImageBuildRunner] objcopy --strip-debug code-with-quarkus-1.0.0-SNAPSHOT-runner
[INFO] [io.quarkus.deployment.QuarkusAugmentor] Quarkus augmentation completed in 471706ms
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  08:01 min
[INFO] Finished at: 2023-10-28T09:08:25-03:00
[INFO] ------------------------------------------------------------------------
```

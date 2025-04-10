# Step 1: Use Gradle image to build the app
FROM gradle:8.5-jdk21 AS builder

# Set working directory inside container
WORKDIR /home/gradle/project

# Copy project files
COPY --chown=gradle:gradle . .

# Build the Spring Boot app (creates JAR)
RUN gradle build --no-daemon

# Step 2: Use a lightweight JDK image to run the app
FROM openjdk:17-jdk-slim

WORKDIR /app

# Copy the JAR from the builder stage
COPY --from=builder /home/gradle/project/build/libs/*.jar app.jar

EXPOSE 8080

# Run the app
ENTRYPOINT ["java", "-jar", "app.jar"]

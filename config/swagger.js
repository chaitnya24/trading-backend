import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Trading API Documentation",
      version: "1.0.0",
      description: "Swagger docs for Trading Backend SDK"
    },
    servers: [
      {
        url: "http://localhost:4000",
        description: "Local server"
      }
    ]
  },
  apis: ["./routes/*.js"] // Swagger will read comments from routes
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;

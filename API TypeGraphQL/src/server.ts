import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import "./connection";
import { buildSchema } from "type-graphql";
import { VideoResolver } from "./video/VideoResolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [VideoResolver],
  });

  const server = new ApolloServer({ schema });
  server.listen({ port: 4100 }, console.log("Server is running"));
}

bootstrap();

import { Arg, Field, InputType, Mutation, Resolver } from "type-graphql";
import VideoSchema from "./VideoSchema";

@InputType()
class VideoInput {
  @Field()
  description: String;

  @Field()
  title: String;

  @Field()
  category: String;
}

@Resolver()
class VideoResolver {
  @Mutation()
  addVideo(@Arg("videoInput") videoInput: VideoInput) {
    return VideoSchema.create();
  }
}

export { VideoResolver };

import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Video } from "./Video";
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
  @Mutation(() => Video)
  async addVideo(@Arg("videoInput") videoInput: VideoInput) {
    console.log(videoInput);
    const video = await VideoSchema.create(videoInput);
    return video;
  }

  @Query(() => [Video])
  async videos() {
    const videos = VideoSchema.find();
    return videos;
  }
}

export { VideoResolver };

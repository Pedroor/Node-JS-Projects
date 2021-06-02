import { Field, ObjectType } from "type-graphql";

@ObjectType()
class Video {
  @Field()
  description: String;

  @Field()
  title: String;

  @Field()
  category: String;
}

export { Video };

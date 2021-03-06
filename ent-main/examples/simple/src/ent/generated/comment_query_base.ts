/**
 * Copyright whaa whaa
 * Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.
 */

import {
  AssocEdgeCountLoaderFactory,
  AssocEdgeLoaderFactory,
  AssocEdgeQueryBase,
  CustomEdgeQueryBase,
  EdgeQuerySource,
  Ent,
  ID,
  IndexLoaderFactory,
  RawCountLoaderFactory,
  Viewer,
} from "@snowtop/ent";
import { getLoaderOptions } from "./loadAny";
import {
  Comment,
  CommentToPostEdge,
  EdgeType,
  NodeType,
  commentLoader,
} from "../internal";

export const commentToPostCountLoaderFactory = new AssocEdgeCountLoaderFactory(
  EdgeType.CommentToPost,
);
export const commentToPostDataLoaderFactory = new AssocEdgeLoaderFactory(
  EdgeType.CommentToPost,
  () => CommentToPostEdge,
);

export const articleToCommentsCountLoaderFactory = new RawCountLoaderFactory({
  ...Comment.loaderOptions(),
  groupCol: "article_id",
});
export const articleToCommentsDataLoaderFactory = new IndexLoaderFactory(
  Comment.loaderOptions(),
  "article_id",
  {
    toPrime: [commentLoader],
  },
);

export abstract class CommentToPostQueryBase extends AssocEdgeQueryBase<
  Comment,
  Ent,
  CommentToPostEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<Comment, Ent>) {
    super(
      viewer,
      src,
      commentToPostCountLoaderFactory,
      commentToPostDataLoaderFactory,
      (str) => getLoaderOptions(str as NodeType),
    );
  }

  static query<T extends CommentToPostQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<Comment, Ent>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<Comment, Ent>,
  ): T {
    return new this(viewer, src);
  }

  sourceEnt(id: ID) {
    return Comment.load(this.viewer, id);
  }
}

export class ArticleToCommentsQueryBase extends CustomEdgeQueryBase<
  Ent,
  Comment
> {
  constructor(viewer: Viewer, private srcEnt: Ent) {
    super(viewer, {
      src: srcEnt,
      countLoaderFactory: articleToCommentsCountLoaderFactory,
      dataLoaderFactory: articleToCommentsDataLoaderFactory,
      options: Comment.loaderOptions(),
    });
  }

  static query<T extends ArticleToCommentsQueryBase>(
    this: new (viewer: Viewer, src: Ent) => T,
    viewer: Viewer,
    src: Ent,
  ): T {
    return new this(viewer, src);
  }

  async sourceEnt(_id: ID) {
    return this.srcEnt;
  }
}

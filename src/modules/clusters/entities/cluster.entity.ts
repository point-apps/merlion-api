import { ObjectId } from "mongodb";

export interface ClusterInterface {
  _id?: string;
  name?: string;
  alias?: string;
  description?: string;
  suggestion?: string;
  typologies?: string[];
}

export const restricted = [];

export class ClusterEntity {
  public cluster: ClusterInterface;

  constructor(cluster: ClusterInterface) {
    this.cluster = cluster;
  }
}

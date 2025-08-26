import { ApiError } from "@point-hub/express-error-handler";
import Validatorjs from "validatorjs";

export const validate = (body: any) => {
  const validation = new Validatorjs(body, {
    date: "required",
    activity: "required",
    description: "required",
    observer: "required",
    // "clusters.*.ikigai": "required_if:clusters.is_identifiable,true",
    isDraft: "required",
    files: "required",
  });

  // Custom validation for ikigai inside clusters
  const clusterErrors: Record<string, string[]> = {};
  body.clusters?.forEach((cluster: any, index: number) => {
    if (cluster?.is_identifiable === true && cluster?.ikigai.length == 0) {
      clusterErrors[`clusters.${index}.ikigai`] = ["The ikigai field is required when is_identifiable is true."];
    }
  });

  if (Object.keys(clusterErrors).length > 0) {
    throw new ApiError(422, clusterErrors);
  }

  if (validation.fails()) {
    throw new ApiError(422, validation.errors.errors);
  }
};

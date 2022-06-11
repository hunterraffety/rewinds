import { json } from "@remix-run/node";

import {
  axiosConvertKitServer,
  axiosConvertKitClient,
  invariant,
} from "~/libs";
import { getEnvServer } from "~/utils";

import type { ActionDataSubscribe, ActionFunction } from "~/types";

/**
 * Remix Action to Subscribe
 */
export const actionSubscribe: ActionFunction = async ({ request }) => {
  // Get data from form
  const form = await request.formData();
  const email = form.get("email");
  const firstName = form.get("firstName");

  // Prepare error message
  const errors: ActionDataSubscribe = {
    email: email ? null : "Email is required",
    firstName: firstName ? null : "Name is required",
  };

  // Check if one of them has an error
  const hasErrors = Object.values(errors).some((errorMessage) => {
    return errorMessage;
  });

  // Response the errors if any
  if (hasErrors) {
    return json<ActionDataSubscribe>({ errors });
  }

  // Check types
  invariant(typeof firstName === "string", "Name should be a text");
  invariant(typeof email === "string", "Email should be a text");

  // Submit to API
  const data = await convertkitSubscribeServer({ email, firstName });

  // Check response from ConvertKit
  if (!data.subscription) {
    return json<ActionDataSubscribe>({
      error: true,
      message: "Failed to subscribe. Could be a wrong email format.",
    });
  }

  // Return success
  return json<ActionDataSubscribe>({
    success: true,
    firstName,
    email,
    message: `Thank you ${firstName}, your email ${email} is subscribed! Please check your inbox.`,
    ...data,
  });
};

/**
 * Custom function subscribe to ConvertKit in the client or server
 */

interface SubscribeToConvertKitProps {
  email: string;
  firstName: string;
}

export const convertkitSubscribeClient = async ({
  email,
  firstName,
}: SubscribeToConvertKitProps) => {
  try {
    const apiKey = ENV.CONVERTKIT_API_KEY;
    const tagIds = [3096588];

    const response = await axiosConvertKitClient.post("/subscribe", {
      api_key: apiKey,
      email,
      first_name: firstName,
      tags: tagIds,
    });

    return response.data;
  } catch (error: any) {
    console.error(error.response.status, error.response.data);
    return error.response.data[0];
  }
};

export const convertkitSubscribeServer = async ({
  email,
  firstName,
}: SubscribeToConvertKitProps) => {
  try {
    const apiKey = getEnvServer("CONVERTKIT_API_KEY");
    const tagIds = [3096588];

    const response = await axiosConvertKitServer.post("/subscribe", {
      api_key: apiKey,
      email,
      first_name: firstName,
      tags: tagIds,
    });

    return response.data;
  } catch (error: any) {
    console.error(error.response.status, error.response.data);
    return error.response.data[0];
  }
};

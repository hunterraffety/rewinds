import { Anchor } from "~/components";
import { SubscribeForm } from "~/contents";
import { actionSubscribe } from "~/features";
import { useActionData, useTransition } from "~/hooks";
import { Layout } from "~/layouts";
import { createMetaData } from "~/utils";

import type {
  ActionDataSubscribe,
  ActionFunction,
  MetaFunction,
  SEOHandle,
  Transition,
} from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return [{ route: `/subscribe`, priority: 0.9 }];
  },
};

export const meta: MetaFunction = () => {
  return createMetaData({
    title: `Subscribe`,
    description: `Get some updates from Rewinds via email.`,
  });
};

export const action: ActionFunction = actionSubscribe;

// EDITME
export default function Subscribe() {
  const transition = useTransition() as Transition;
  const actionData = useActionData() as ActionDataSubscribe;

  return (
    <Layout variant="large">
      <header className="header-center">
        <h1>Subscribe</h1>
        <h2>
          <Anchor href="https://twitter.com/mhaidarhanif">
            Follow the updates on <b>Rewinds</b>
          </Anchor>
        </h2>
      </header>

      <div className="stack-v items-center">
        <SubscribeForm transition={transition} actionData={actionData} />
      </div>
    </Layout>
  );
}

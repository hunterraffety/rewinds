import { ExampleNotifications } from '~/contents';
import { Layout } from '~/layouts';

export default function ExampleButtonRoute() {
  return (
    <Layout>
      <article className="prose-config">
        <h1>Example: Notification</h1>
        <p>Notification components with Vechai UI.</p>
      </article>

      <article className="demo">
        <ExampleNotifications />
      </article>
    </Layout>
  );
}

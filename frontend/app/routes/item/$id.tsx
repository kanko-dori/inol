import { json, LoaderFunction, MetaFunction, useLoaderData } from 'remix';
import { getItemById } from '~/data/getItemById';
import { Item } from '~/data/types';

export const loader: LoaderFunction = async ({ params }) => {
  const { id } = params;
  if (id === undefined) {
    throw new Response('address is not defind', {
      status: 404,
      statusText: 'Not Found',
    });
  }
  try {
    const item = await getItemById(id);
    return json(item);
  } catch (e) {
    console.error(e);
    throw new Response('loader error', {
      status: 500,
      statusText: 'Internal Server Error',
    });
  }
};

export const meta: MetaFunction = ({ data }) => {
  const ogImage = `https://inol.cf/png/${data.id}`;
  return {
    title: 'inol',
    description: 'PRAY WITH YOU, PRAY WITH ME',
    'og:title': 'inol',
    'og:description': 'PRAY WITH YOU, PRAY WITH ME',
    'og:image': ogImage,
    'twitter:card': 'summary_large_image',
    'twitter:title': 'inol',
    'twitter:description': 'PRAY WITH YOU, PRAY WITH ME',
    'twitter:image': ogImage,
  };
};

export default function Inol() {
  const item = useLoaderData<Item>();
  return (
    <main>
      <h1>単体で見るページ</h1>
      <p>OGP画像とかが生える</p>
      <img src={item.svg_url} alt="test" />
    </main>
  );
}

import { Feed } from '@/page-components/Feed';
import Head from 'next/head';

const FeedPage = () => {
  return (
    <>
      <Head>
        <title>Feed</title>
      </Head>
      <nav>
                <div class="text-sm lg:flex-grow">
                    <a href="/create-item" class="block mt-4 lg:inline-block text-lg lg:mt-0 text-white hover:text-white mr-4">
                        Create Item
                    </a>

                    <a href="/my-assets" class="block mt-4 lg:inline-block text-lg lg:mt-0 text-white hover:text-white mr-4">
                        My Item
                    </a>

                    <a href="/creator-dashboard" class="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-white mr-4">Dashboard</a>
                </div>
            </nav>
      <Feed />
    </>
  );
};

export default FeedPage;

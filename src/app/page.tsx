import Home from '@/components/sections/home';

export const metadata = {
  title: 'JLUG - JEC Linux User Group',
  description:
    'JEC Linux User Group - A community of Linux enthusiasts and tech professionals in Jabalpur Engineering College',
};

export async function generateStaticParams() {
  return [];
}

export default async function Page() {
  return <Home />;
}

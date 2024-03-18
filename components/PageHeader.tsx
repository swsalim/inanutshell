import Balancer from 'react-wrap-balancer';

export function PageHeader({ title, intro }: { title: string; intro: string }) {
  return (
    <header className="max-w-2xl">
      <Balancer
        as="h1"
        className="font-heading text-4xl tracking-tight text-stone-800 [word-spacing:4px] sm:text-5xl dark:text-stone-100">
        {title}
      </Balancer>
      <p className="mt-6 text-base text-stone-600 dark:text-stone-300">
        {intro}
      </p>
    </header>
  );
}

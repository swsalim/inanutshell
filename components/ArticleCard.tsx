import { Card } from '@/components/Card';
import { formatDate } from '@/lib/formatDate';

interface ArticleCardProps {
  post: {
    slug: string;
    title: string;
    date: string;
    description: string;
  };
}

export function ArticleCard({ post }: ArticleCardProps) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={post.slug}>{post.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={post.date}
          className="md:hidden"
          decorate>
          {formatDate(post.date)}
        </Card.Eyebrow>
        <Card.Description>{post.description}</Card.Description>
        <Card.Cta>Read post</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={post.date}
        className="mt-1 hidden md:block">
        {formatDate(post.date)}
      </Card.Eyebrow>
    </article>
  );
}

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto flex-1 p-4 md:p-8">
      <div className="mb-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{post.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <article className="prose prose-lg dark:prose-invert mx-auto">
        <div className="relative mb-8 h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            data-ai-hint={post.imageHint}
            priority
          />
        </div>

        <h1 className="text-4xl font-bold tracking-tight !mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 mb-8 text-muted-foreground">
          <Image
            src={post.author.avatarUrl}
            alt={post.author.name}
            width={40}
            height={40}
            className="rounded-full"
            data-ai-hint="person avatar"
          />
          <div>
            <span>{post.author.name}</span>
            <span className="mx-2">•</span>
            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
        
        <div dangerouslySetInnerHTML={{ __html: post.content }} className="text-foreground" />
      </article>
    </main>
  );
}

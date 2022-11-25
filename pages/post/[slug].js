import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Image from 'next/image';

export async function getStaticPaths() {
  // Retrive all our slugs
  const files = fs.readdirSync('posts');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
 
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {

  const {title, author, category, date, bannerImage, tags} = frontmatter

  return (
    <div className='prose mx-auto'>
        <Image 
          src={bannerImage} 
          alt={title}
          width={560}
          height={350} />
        <h1>{title}</h1>
        <h2>{author} || {date}</h2>
        <h3>{category} || {tags.join()}</h3>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
  );
}
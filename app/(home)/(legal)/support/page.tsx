import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { promises as fs } from 'fs';
import path from 'path';

const getPrivacyContent = async () => {
    try {
        const filePath = path.join(process.cwd(), 'SUPPORT.mdx');
        const content = await fs.readFile(filePath, 'utf8');
        return content;
    } catch (error) {
        console.error('Error reading', error);
        return 'Content not available.';
    }
};

const Page = async () => {
    const privacyContent = await getPrivacyContent();

    return (
        <div className='flex flex-col items-center gap-16 sm:gap-32 my-16 sm:my-32 w-full min-h-screen px-4'>
            <div className='w-full max-w-4xl'>
                <article className='prose prose-base sm:prose-lg prose-gray max-w-none'>
                    <ReactMarkdown
                        components={{
                            h1: ({ children }) => <h1 className='text-3xl sm:text-4xl font-bold  mb-8'>{children}</h1>,
                            h2: ({ children }) => <h2 className='text-2xl font-semibold  mb-4 mt-8'>{children}</h2>,
                            h3: ({ children }) => <h3 className='text-xl font-medium  mb-3 mt-6'>{children}</h3>,
                            p: ({ children }) => <p className='mb-4 leading-relaxed'>{children}</p>,
                            ul: ({ children }) => <ul className='list-disc list-inside  space-y-2 mb-4'>{children}</ul>,
                            a: ({ href, children }) => (
                                <Link href={href || '#'} className='underline'>
                                    {children}
                                </Link>
                            ),
                            hr: () => <hr className='my-8' />,
                            em: ({ children }) => <em className='text-sm'>{children}</em>,
                        }}
                    >
                        {privacyContent}
                    </ReactMarkdown>
                </article>
            </div>
        </div>
    );
};

export default Page;

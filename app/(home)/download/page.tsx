'use client';

import { GrArchlinux } from '@vertisanpro/react-icons/gr';
import { SiNixos } from '@vertisanpro/react-icons/si';
import { Button } from '@/components/ui/shadcn-button';
import type { BundledLanguage } from '@/components/ui/shadcn-io/code-block';
import {
    CodeBlock,
    CodeBlockBody,
    CodeBlockContent,
    CodeBlockCopyButton,
    CodeBlockFilename,
    CodeBlockFiles,
    CodeBlockHeader,
    CodeBlockItem,
    CodeBlockSelect,
    CodeBlockSelectContent,
    CodeBlockSelectItem,
    CodeBlockSelectTrigger,
    CodeBlockSelectValue,
} from '@/components/ui/shadcn-io/code-block';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Terminal } from 'lucide-react';
import Link from 'next/link';
import { SiDebian } from '@icons-pack/react-simple-icons';

export default function DownloadPage() {
    const installScript = 'curl -fsSL https://wayclip.com/install-cli | bash';

    return (
        <div className='min-h-screen bg-background'>
            <section className='py-24 px-4'>
                <div className='container mx-auto text-center max-w-4xl'>
                    <h1 className='text-5xl md:text-6xl font-bold mb-6 text-balance tracking-tight'>Downloads</h1>
                    <p className='text-xl text-muted-foreground mb-12 text-pretty max-w-2xl mx-auto leading-relaxed'>
                        Get the Wayclip CLI for your Linux distribution or wait for our upcoming desktop app.
                    </p>
                </div>

                <div className='container mx-auto max-w-6xl grid lg:grid-cols-2 gap-8'>
                    <Card className='w-full bg-muted border-dashed opacity-60 grayscale pointer-events-none'>
                        <CardHeader>
                            <div className='flex items-center justify-between'>
                                <CardTitle className='text-2xl'>Desktop App</CardTitle>
                            </div>
                            <CardDescription>
                                A full-featured desktop experience for recording, editing, and sharing. Currently in
                                development.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className='space-y-4 relative'>
                            <Badge
                                variant={'destructive'}
                                className='absolute left-1/2 z-20 brightness-200 top-1/2 -translate-x-1/2 -translate-y-1/2'
                            >
                                Coming Soon
                            </Badge>
                            <div className='p-4 border rounded-lg bg-background/50'>
                                <h3 className='font-semibold mb-3'>Supported Platforms</h3>
                                <div className='space-y-3'>
                                    <Button variant='outline' className='w-full justify-start' disabled>
                                        <Download className='w-4 h-4 mr-2' />
                                        Linux (AppImage, deb, rpm)
                                    </Button>
                                    <Button variant='outline' className='w-full justify-start' disabled>
                                        <Download className='w-4 h-4 mr-2' />
                                        Windows (x64)
                                    </Button>
                                    <Button variant='outline' className='w-full justify-start' disabled>
                                        <Download className='w-4 h-4 mr-2' />
                                        macOS (Universal)
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className='w-full'>
                        <CardHeader>
                            <CardTitle className='text-2xl flex items-center gap-2'>
                                <Terminal />
                                CLI Tool
                            </CardTitle>
                            <CardDescription>The fastest way to capture and share from your terminal.</CardDescription>
                        </CardHeader>
                        <CardContent className='space-y-6'>
                            <div>
                                <h3 className='font-semibold mb-3 text-lg'>Package Managers</h3>
                                <div className='flex flex-col gap-4'>
                                    <Button asChild variant='outline' className='w-full'>
                                        <a
                                            href='https://aur.archlinux.org/packages/wayclip-cli'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <GrArchlinux />
                                            AUR
                                        </a>
                                    </Button>

                                    <Button asChild variant='outline' className='w-full'>
                                        <a
                                            href='https://github.com/Wayclip/cli/releases/download/v0.1.85/wayclip-cli_0.1.85-1_amd64.deb'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <SiDebian />
                                            Debian Binary
                                        </a>
                                    </Button>
                                </div>
                            </div>

                            <div>
                                <h3 className='font-semibold mb-3 text-lg'>Install Script (recommended)</h3>
                                <p className='text-sm text-muted-foreground mb-3'>
                                    Run the following command in your terminal to automatically download and install the
                                    latest version.
                                </p>
                                <CodeBlock
                                    data={[
                                        {
                                            language: 'sh',
                                            filename: 'terminal',
                                            code: installScript,
                                        },
                                    ]}
                                    defaultValue={'sh'}
                                >
                                    <CodeBlockHeader>
                                        <CodeBlockFiles>
                                            {(item) => (
                                                <CodeBlockFilename key={item.language} value={item.language}>
                                                    {item.filename}
                                                </CodeBlockFilename>
                                            )}
                                        </CodeBlockFiles>
                                        <CodeBlockSelect>
                                            <CodeBlockSelectTrigger>
                                                <CodeBlockSelectValue />
                                            </CodeBlockSelectTrigger>
                                            <CodeBlockSelectContent>
                                                {(item) => (
                                                    <CodeBlockSelectItem key={item.language} value={item.language}>
                                                        {item.language}
                                                    </CodeBlockSelectItem>
                                                )}
                                            </CodeBlockSelectContent>
                                        </CodeBlockSelect>
                                        <CodeBlockCopyButton
                                            onCopy={() => console.log('Copied code to clipboard')}
                                            onError={() => console.error('Failed to copy code to clipboard')}
                                        />
                                    </CodeBlockHeader>
                                    <CodeBlockBody>
                                        {(item) => (
                                            <CodeBlockItem key={item.language} value={item.language}>
                                                <CodeBlockContent language={item.language as BundledLanguage}>
                                                    {item.code}
                                                </CodeBlockContent>
                                            </CodeBlockItem>
                                        )}
                                    </CodeBlockBody>
                                </CodeBlock>
                            </div>
                            {/*
                            <div>
                                <h3 className='font-semibold mb-3 text-lg'>Manual Download</h3>
                                <p className='text-sm text-muted-foreground mb-3'>
                                    Download the pre-compiled binary for your architecture.
                                </p>
                                <div className='space-y-3'>
                                    <Button asChild variant='secondary' className='w-full justify-start text-left'>
                                        <a href='#'>
                                            <Download className='w-4 h-4 mr-2 flex-shrink-0' />
                                            <div>
                                                <span className='font-mono'>
                                                    wayclip-x86_64-unknown-linux-gnu.tar.gz
                                                </span>
                                                <p className='text-xs text-muted-foreground'>For Intel/AMD 64-bit</p>
                                            </div>
                                        </a>
                                    </Button>
                                    <Button asChild variant='secondary' className='w-full justify-start text-left'>
                                        <a href='#'>
                                            <Download className='w-4 h-4 mr-2 flex-shrink-0' />
                                            <div>
                                                <span className='font-mono'>
                                                    wayclip-aarch64-unknown-linux-gnu.tar.gz
                                                </span>
                                                <p className='text-xs text-muted-foreground'>For ARM 64-bit</p>
                                            </div>
                                        </a>
                                    </Button>
                                </div>

                            */}
                            <div className='mt-auto text-center'>
                                <Link
                                    href='https://github.com/wayclip/cli/releases/latest'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-sm hover:underline text-muted-foreground'
                                >
                                    View all releases on GitHub &rarr;
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}

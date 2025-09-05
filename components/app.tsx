'use client';

import { Button } from './ui/shadcn-button';
import { Download } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export const App = () => {
    return (
        <Button className='px-8 py-3' onClick={() => toast.info('Not released yet (soon)')}>
            <Download className='w-5 h-5 mr-2' />
            Download App
            <ArrowRight className='w-4 h-4 ml-2' />
        </Button>
    );
};

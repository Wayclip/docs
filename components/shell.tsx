'use client';
import { toast } from 'sonner';
import copy from 'copy-to-clipboard';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

export const Shell = () => {
    const handleCopy = () => {
        copy('curl -fsSL https://wayclip.com/install-cli | sh');
        toast.success('Copied `curl -fsSL https://wayclip.com/install-cli | sh` successfully');
    };

    return (
        <DropdownMenuItem onClick={handleCopy}>
            <span>Shell Script</span>
        </DropdownMenuItem>
    );
};

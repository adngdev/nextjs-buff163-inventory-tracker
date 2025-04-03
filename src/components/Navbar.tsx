'use client'

import { FC } from 'react';
import { useSession } from 'next-auth/react';

import { Button } from '@/components/ui/button';

import { signInUser, signOutUser } from '@/actions/auth';

const NavbarJsx: FC = () => {
    const { data: session } = useSession();

    return (
        <div className={`absolute h-10 w-full  flex items-center justify-between px-5 bg-zinc-800`}>
            <p className={`font-medium text-white text-lg`}>Buff Inventory Tracker</p>
            { !session?.user ?
                <Button size={`xs`} variant={`secondary`} onClick={signInUser}>Login with Google</Button>
                :
                <div className={`flex gap-5 items-center`}>
                    <p className={`text-white`}>Hello, {session.user.name}</p>
                    <Button size={`xs`} variant={`destructive`} onClick={signOutUser}>Sign Out</Button>
                </div>
            }
        </div>
    );
};

export default NavbarJsx;

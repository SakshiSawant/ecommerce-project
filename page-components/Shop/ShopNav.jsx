// import { Avatar } from '@/components/Avatar';
// import { Button } from '@/components/Button';
// import { Input } from '@/components/Input';
// import { Container, Wrapper } from '@/components/Layout';
// import { LoadingDots } from '@/components/LoadingDots';
import { Text, TextLink } from '@/components/Text';
// import { fetcher } from '@/lib/fetch';
// import { usePostPages } from '@/lib/post';
// import { useCurrentUser } from '@/lib/user';
import Link from 'next/link';
// import { useCallback, useRef, useState } from 'react';
// import toast from 'react-hot-toast';
// import styles from './Poster.module.css';

const ShopNav = () => {
    return(
        <div>
            <Link href="/create-item" passHref>
                <TextLink color="link" variant="highlight">
                    Create Item
                </TextLink>
            </Link>

            {/* <Link href="/create-item" passHref>
                <TextLink color="link" variant="highlight">
                    
                </TextLink>
            </Link> */}
        </div>
    )
}

export default ShopNav;
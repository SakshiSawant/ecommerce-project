import { Text, TextLink } from '@/components/Text';
import Link from 'next/link';


const ShopNav = () => {
    return(
        <div>
            <Link href="/create-item" passHref>
                <TextLink color="link" variant="highlight">
                    Create Item
                </TextLink>
            </Link>

            <Link href="/my-assets" passHref>
                <TextLink color="link" variant="highlight">
                    Assets
                </TextLink>
            </Link>

            <Link href="/creator-dashboard" passHref>
                <TextLink color="link" variant="highlight">
                    Dashboard
                </TextLink>
            </Link>
        </div>
    )
}

export default ShopNav;
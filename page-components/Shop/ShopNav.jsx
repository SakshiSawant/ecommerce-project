import { Button } from '@/components/Button';
import { Text, TextLink } from '@/components/Text';
import Spacer from '@/components/Layout/Spacer';
import Link from 'next/link';


const ShopNav = () => {
    return(
        <div>
            <Link href="/create-item" passHref>
                <Button type="success">Create Item</Button>
            </Link>

            <Link href="/my-assets" passHref>
                <Button type="success">Assets</Button>
            </Link>
            <Spacer axis="horizontal" size={0.25} />
            <Link href="/creator-dashboard" passHref>
                <Button type="success">Dashboard</Button>
            </Link>
        </div>
    )
}

export default ShopNav;
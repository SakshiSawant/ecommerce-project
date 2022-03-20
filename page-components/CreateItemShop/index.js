import { spaces } from '@/components/Layout';
import CreateItem from './create-item';
import styles from './createItem.module.css';

export const Shop = () => {
    return (
        <div>
            {/* <spaces size={1} axis="vertical" /> */}
            <CreateItem />
        </div>
    )
}
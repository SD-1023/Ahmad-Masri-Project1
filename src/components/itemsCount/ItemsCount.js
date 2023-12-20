import Utils from '../utils/utils.module.css';

const ItemsCount = ({ topicsCount }) => {

    return <h2 className={Utils.container}>{topicsCount} Web Topics Found</h2>

}

export default ItemsCount;
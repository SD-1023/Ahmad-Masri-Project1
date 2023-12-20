
const CustomSelect = ({ classes, label, opts }) => {

    return <div className={label === 'Sort' ? classes.sort : classes.filter}>
        <label className={`${classes['control-label']}`} htmlFor={label}>{label} by:</label>

        <select name={label} id={label}>
            <option value="Default">Default</option>
            {opts && opts.map((c, i) => (<option value={c} key={i}>{c}</option>))}
        </select>

    </div>;
}

export default CustomSelect;
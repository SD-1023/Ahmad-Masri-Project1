
const CustomSelect = ({ classes, label, opts, action }) => {

    return <div className={classes.select}>
        <label className={`${classes['control-label']}`} htmlFor={label}>{label} by:</label>

        <select name={label} id={label} onChange={(e) => action(e.target.value)}>
            <option value="Default">Default</option>
            {opts && opts.map((c, i) => (<option value={c.value || c} key={i}>{c.name || c}</option>))}
        </select>

    </div>;
}

export default CustomSelect;
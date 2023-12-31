

const TempContent = ({style, content}) => {

    return <div style={{fontWeight: 700, display: 'flex', justifyContent: 'center', ...style}}>
        {content}
    </div>
}

export default TempContent;
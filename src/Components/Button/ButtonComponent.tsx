import './index.scss'


interface typeButton {
    text: string,
    link: string
}

const Button = ({ text, link }: typeButton) => {
    return (
        <div className="Button">
            <a href={link} target="_blank" className="Button__a">
                <button className="Button__btn">
                    {text}
                </button>
            </a>
        </div>
    )
}

export default Button
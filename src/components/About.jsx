import style from './About.module.css'

const About = () => {
    return (
        <div className={style.about}>
            <div className={style.desc}>
                <h1>Un poco sobre mi:</h1>
                <p>
                    Me llamo Valentino Micheloni, tengo 19 años. Vivo en Santa Fe,
                    Argentina y tengo la capacidad, motivacion y destreza para ir adelante, hasta en los peores momentos.
                </p>
            </div>
        </div>
    )
}

export default About;
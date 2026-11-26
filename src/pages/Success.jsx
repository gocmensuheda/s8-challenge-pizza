import logo from '../../images/iteration-1-images/logo.svg'
export default function Success(){
    return(
        <main className="success-hero">
            <div className="success-hero-icerik">
                <img className="success-hero-logo" src={logo} alt="Teknolojik Yemekler"/>
                <h1 className="success-slogan">
                    Tebrikler!
                    <br/>
                    SİPARİŞİNİZ ALINDI!
                </h1>


            </div>

        </main>
    )
}